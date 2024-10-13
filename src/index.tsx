import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorProvider } from 'src/context/ErrorContext'
import Routes from './Routes'
import 'assets/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorProvider>
      <Routes />
    </ErrorProvider>
  </React.StrictMode>
)
