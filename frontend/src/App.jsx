import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom'
import { RootLayout } from './layout/RootLayout'
import { Home } from './pages/Home'
import { Result } from './pages/Result'
import { Error } from './pages/Error'

export const App = () => {
  //declaration of page router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/results" element={<Result />} />

        {/* error page to catch all unknown routes */}
        <Route path="*" element={<Error />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
