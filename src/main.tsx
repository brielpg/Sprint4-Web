import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Formulario from './Pages/Formulario/Components/PageBody/index.tsx'
import Corpo from './Pages/Home/Components/Corpo/Corpo.tsx'
import Login from './Pages/Login/Components/Body/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Corpo/>
  },
  {
    path: '/cadastro',
    element: <Formulario/>
  },
  {
    path: '/login',
    element: <Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)

