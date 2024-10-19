import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PropsPractice from './PropsPractice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PropsPractice Account="Jai Shree Ram"/>
    <PropsPractice Account="Jai SiyaRam"/>
  </StrictMode>,
)
