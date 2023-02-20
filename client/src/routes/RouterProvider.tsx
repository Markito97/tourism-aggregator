import React from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout/Layout'
import { Hotels } from '../pages/Hotels'
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary'
import { About } from '../pages/About'
import { Activities } from '../pages/Activities'
import { InfoPage } from '../pages/InfoPage'
import { AdminLayout } from '../components/Layout/AdminLayout'
import { HousesList } from '../pages/HousesList'
import { ActivitiesList } from '../pages/ActivitiesList'

const router = createHashRouter([
  {
    path: '/tourism-aggregator',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'hotels',
        element: <Hotels />,
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
  {
    path: 'admin/*',
    element: <AdminLayout />,
    children: [
      { index: true, element: <InfoPage /> },
      { path: 'houseslist', element: <HousesList /> },
      { path: 'activitieslist', element: <ActivitiesList /> },
    ],
  },
])

export const Provider = (): JSX.Element => {
  return <RouterProvider router={router} />
}

// export const Provider = (): JSX.Element => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="admin/*" element={<AdminLayout />}>
//           <Route path="contacts" element={<p>Contacts</p>} />
//           <Route path="team" element={<p>Team</p>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }
