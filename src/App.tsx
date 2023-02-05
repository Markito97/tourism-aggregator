import React, { type FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import './App.css'
import { Activities } from './pages/Activities'
import { Layout } from './components/Layout/Layout'
import { Hotels } from './pages/Hotels'

export const App: FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/hotels" element={<Hotels />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
