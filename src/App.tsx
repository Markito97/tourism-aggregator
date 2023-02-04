import React, { type FunctionComponent } from 'react'
import { Header } from './components/Header/Header'
import './App.css'
import { Main } from './components/Main/Main'

export const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}
