import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import RootLayout from './components/RootLayout/RootLayout'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Navigate to="/recipes" />} />
        <Route path="recipes" element={<Home />} />
      </Route>
    )
  )

  return (
    <SkeletonTheme baseColor='#BBBBBB' highlightColor='#CCCCCC'>
      <RouterProvider router={router} />
    </SkeletonTheme>
  )
}

export default App
