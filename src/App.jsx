import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import React from 'react'
import MainLayout from './Layouts/MainLayout'
import HomePage from './Pages/HomePage'
import JobsPage from './Pages/JobsPage'
import NotFoundPage from './Pages/NotFoundPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)



const App = () => {
  return <RouterProvider router={router} />
}

export default App
