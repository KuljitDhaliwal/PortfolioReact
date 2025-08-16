import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SidebarProvider } from './contexts/SidebarContext.jsx'
import { EffectProvider } from './contexts/EffectContext.jsx'

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
