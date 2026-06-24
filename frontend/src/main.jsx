// main.jsx
// Einstiegspunkt der React Anwendung, rendert die App Komponente in den DOM
// Autor: Oskar Wiederhold

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// StrictMode aktiviert zusätzliche Entwicklungswarnungen (kein Einfluss auf den Produktionsbuild)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
