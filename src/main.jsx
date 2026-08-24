import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeProvider.jsx'
import { EffectProvider } from './contexts/EffectProvider.jsx'
import { SidebarProvider } from './contexts/SidebarProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <ThemeProvider>
          <EffectProvider>
            <App />
          </EffectProvider>
        </ThemeProvider>
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>,
)
