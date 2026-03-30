import './global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'

import { App } from './App.tsx'

import {Toaster} from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Toaster richColors/>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
