import React, { type FunctionComponent } from 'react'
import './index.css'
import { Header } from './components/Header/Header'

export const App: FunctionComponent = () => {
  return (
    <div className="container">
      <Header />
    </div>
  )
}
