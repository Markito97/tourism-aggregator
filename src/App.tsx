import React, { type FunctionComponent } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './routes/provider'
import './App.css'

export const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Provider />
    </BrowserRouter>
  )
}
