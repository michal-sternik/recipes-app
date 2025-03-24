import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import RootLayout from './Components/RootLayout/RootLayout'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Toaster } from 'react-hot-toast'
import RecipeDetails from './Components/RecipeDetails/RecipeDetails'

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Navigate to="/recipes" />} />
        <Route path="recipes" element={<Home />} />
        <Route path='recipes/:recipeId' element={<RecipeDetails />} />
        <Route path='*' element={<Navigate to="/recipes" />} />
      </Route>
    )
  )

  return (
    <SkeletonTheme baseColor='#BBBBBB' highlightColor='#CCCCCC'>
      <Toaster position='bottom-left' />
      <RouterProvider router={router} />
    </SkeletonTheme>
  )
}

export default App
