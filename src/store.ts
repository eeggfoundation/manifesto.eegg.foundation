import contentV10  from './manifests/v1.0.html?raw'
//import contentV11  from './manifests/v1.1.html?raw'

export type Manifest = {
    version: string
    content: string
    inception: string
    wallet: string
}

/**
 * Note: manifests must be sorted descending to keep the functionality.
 */
const manifests = <Manifest[]>[
    /*
    {
        version: 'v1.1',
        content: contentV11,
        inception: '2022-08-25',
        wallet: '0x475f913Cc75F89DDAb521c717111F39778BA770b',
    },
    */
    {
        version: 'v1.0',
        content: contentV10,
        inception: '2022-04-01',
        wallet: '0xee54e45ec1cda5a4d9e837ff3b4310721140da30',
    }
]

export default manifests
