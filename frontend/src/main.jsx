import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Hide from './pages/Hide';
import Reveal from './pages/Reveal';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Navigate to="/hide" replace />} />
      <Route path="/hide" element = {<Hide />} />
      <Route path="/reveal/:id" element = {<Reveal />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
