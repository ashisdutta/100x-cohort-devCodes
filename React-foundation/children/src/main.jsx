import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import KeyApp from './keyApp.jsx'
createRoot(document.getElementById('root')).render(

    //<App />
    <KeyApp/>
)
