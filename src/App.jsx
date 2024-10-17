import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { LayoutOne } from './layouts/LayoutOne'
import { HomePage } from './Pages/HomePage'

function App() {
  const myApp = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={myApp}/>
    </>
  )
}

export default App
