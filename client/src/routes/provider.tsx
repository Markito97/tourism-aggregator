import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout/Layout'
import { Hotels } from '../pages/Hotels'
import { getHouses } from '../actions/getHouses.action'
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary'
import { About } from '../pages/About'
import { Activities } from '../pages/Activities'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="/hotels" element={<Hotels />} />
//       {/* <Route path="hotels/:lake" element={<Hotels />} /> */}
//       <Route path="aboutus" element={<About />} />
//       <Route path="activities" element={<Activities />} />
//       <Route path="contacts" element={<Contacts />} />
//       <Route path="admin" element={<AdminPage/>} />
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'hotels',
        element: <Hotels />,
        loader: getHouses,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'aboutus',
        element: <About />,
      },
      {
        path: 'activities',
        element: <Activities />,
      },
    ],
  },
])

export const Provider = (): JSX.Element => {
  return <RouterProvider router={router} />
}
