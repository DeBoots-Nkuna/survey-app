import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom'
import { RootLayout } from './layout/RootLayout'
import { Home } from './pages/Home'
import { Result } from './pages/Result'

export const App = () => {
  //declaration of page router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/results" element={<Result />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
