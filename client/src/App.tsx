import React, { FunctionComponent } from 'react'
import { Provider } from './routes/provider'
import './App.css'

const App: FunctionComponent<any> = () => {
  const x = 123
  return <Provider />
}

export default App
