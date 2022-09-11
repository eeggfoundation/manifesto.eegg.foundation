import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    HashRouter,
    Navigate,
    Routes,
    Route,
} from 'react-router-dom'

import './app.css'
import manifests from './store'
import App from './App'

const latestVersion = manifests[0].version

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Navigate to={`/${latestVersion}`} />} />
                <Route path="/:version" element={<App />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
)
