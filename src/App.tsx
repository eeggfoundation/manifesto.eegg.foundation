import { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { classNames } from './utils'
import type { Manifest } from './store'
import manifests from './store'

const App = () => {
    const [manifest, setManifest] = useState<Manifest | undefined>(undefined)

    const [selectedVersion, setSelectedVersion] = useState(manifests[0].version)

    const navigate = useNavigate()

    const params = useParams()

    useEffect(() => {
        const switched = manifests.find(m => m.version === params.version)
        setManifest(switched)
        if (switched) {
            setSelectedVersion(switched.version)
        }
    }, [params.version])

    const onSwitchVersion = (v: string) => {
        navigate(`/${v}`)
    }

    return (
        <div className="flex flex-col w-full justify-center">
            <div className="flex flex-col w-full md:max-w-4xl mx-auto space-y-4 px-2">
                {manifest ? (
                    <>
                        <div className="w-full flex flex-row items-center justify-between py-4 border-b-4 border-stone-400">
                            <h1 className="text-4xl">
                                Manifesto eegg.foundation
                            </h1>
                            <Listbox value={selectedVersion} onChange={onSwitchVersion}>
                                {({ open }) => (
                                    <>
                                        <div className="relative mt-1">
                                            <Listbox.Button className="text-black text-2xl lg:text-4xl border-black border-4 pl-3 pr-10 py-2 text-left cursor-default outline-none">
                                                <span className="block truncate">{selectedVersion}</span>
                                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                    <SelectorIcon className="w-5 h-5 text-stone-900" aria-hidden="true" />
                                                </span>
                                            </Listbox.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white max-h-60 text-2xl md:text-4xl overflow-auto border-black border-4 outline-none">
                                                    {manifests.map((manifest) => (
                                                        <Listbox.Option
                                                            key={manifest.version}
                                                            className={({active}) => classNames(
                                                                active ? 'text-white bg-black' : 'text-stone-900',
                                                                'cursor-default select-none relative py-2 pl-3 pr-9',
                                                            )}
                                                            value={manifest.version}
                                                        >
                                                            {({selected, active}) => (
                                                                <>
                                                                    <span className="block truncate">
                                                                        {manifest.version}
                                                                    </span>
                                                                    {selected && (
                                                                        <span
                                                                            className={classNames(
                                                                                active ? 'text-white' : 'text-stone-900',
                                                                                'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                            )}
                                                                        >
                                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    )}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
                        </div>
                        <div className="w-full flex flex-col py-4 border-b-4 border-stone-400 space-y-1">
                            <h2 className="text-stone-400 text-2xl">
                                EEGG = ROR + NFT
                            </h2>
                            <p>
                                &copy; 2022 <span className="font-bold">https://manifesto.eegg.foundation</span>
                            </p>
                            <p>
                                <a href="//eegg.foundation" target="_blank" className="underline">eegg.foundation</a>
                                <a href="//peperafaj.cz" target="_blank" className="underline ml-2">peperafaj.cz</a>
                            </p>
                            <p>
                                <a href={`https://etherscan.io/address/${manifest.wallet}`} target="_blank" className="underline">
                                    <span className="hidden md:flex">
                                        {manifest.wallet}
                                    </span>
                                    <span className="md:hidden">
                                        ETH wallet
                                    </span>
                                </a>
                            </p>
                            <p>
                                Original date of the idea: {manifest.inception}
                            </p>
                        </div>

                        <article className="prose m-auto py-8 px-2 md:px-0">
                            {parse(manifest.content)}
                        </article>
                    </>
                ) : (
                    <div className="flex min-h-screen justify-center">
                        <div className="flex flex-col space-y-4 m-auto">
                            <p className="text-center text-red-600">
                                Verze <span className="font-bold">{params.version}</span> neexistuje.
                            </p>
                            <p className="text-center">
                                <Link to={`/${manifests[0].version}`} className="text-2xl inline-flex bg-white text-black px-4 py-2 border-black border-4 font-bold hover:bg-black hover:text-white transition-colors ease-in-out duration-300">
                                    Zkuste poslední {manifests[0].version}
                                </Link>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App
