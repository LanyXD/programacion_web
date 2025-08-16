import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Title from './component/Title.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title name='Andy' surname='Monzon' />
    <Title />
    <App />
  </StrictMode>,
)
