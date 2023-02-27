import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!, {
  identifierPrefix: 'admin',
}).render(<App />)

window.addEventListener('unhandledrejection', console.error)
