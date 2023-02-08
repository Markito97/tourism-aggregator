import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout/Layout'
import { Hotels } from '../pages/Hotels'
import { About } from '../pages/About'
import { Contacts } from '../pages/Contacts'
import { Activities } from '../pages/Activities'

export const Provider = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="hotels/:lake" element={<Hotels />} />
          <Route path="aboutus" element={<About />} />
          <Route path="activities" element={<Activities />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  )
}