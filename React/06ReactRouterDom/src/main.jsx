import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import {Re}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactProvider />
    {/* <App /> */}
  </StrictMode>,
)
