import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/styles/index.scss'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider.tsx'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from './app/providers/StoreProvider/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
)
