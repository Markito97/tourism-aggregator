import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Activities } from '../pages/Activities'
import { Layout } from '../components/Layout/Layout'
import { Hotels } from '../pages/Hotels'

export const Provider = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/activities" element={<Activities />} />
      </Route>
    </Routes>
  )
}
