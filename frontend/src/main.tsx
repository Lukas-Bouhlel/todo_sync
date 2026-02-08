import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ZeroProvider } from '@rocicorp/zero/react';
import { z } from './zero/zero';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ZeroProvider zero={z}>
      <App />
    </ZeroProvider>
  </StrictMode>
)