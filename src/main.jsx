import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Inicial from './Components/Pages/Inicial.jsx'
import Login from'./Components/Login.jsx'
import Devolucoes from './Components/Pages/Devolucoes.jsx'
import Solicitacoes from './Components/Pages/Solicitacoes'
import Ocorrencia from './Components/Pages/Ocorrencia.jsx'
import OcorrenciaDetails from './Components/Pages/OcorrenciaDetails.jsx'
import OcDetails2 from './Components/Pages/OcDetails2.jsx'
import OcDetails3 from './Components/Pages/OcDetails3.jsx'
import Dev1 from './Components/Pages/Dev1.jsx'
import Dev2 from './Components/Pages/Dev2.jsx'
import Dev3 from './Components/Pages/Dev3.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [ 
      {
      path: "/",
      element: <Login/>
    },
      {
        path: "/Inicial",
        element: <Inicial />
      },
      {
        path: "/Devolucoes",
        element: <Devolucoes />
      },
      {
        path: "/Solicitacoes",
        element: <Solicitacoes />
      },
      {
        path: "/Ocorrencia",
        element: <Ocorrencia/>
      }, 
      {
        path: "/OcorrenciaDetails",
        element: <OcorrenciaDetails/>
      }, 
      {
        path: "/OcDetails2",
        element: <OcDetails2/>
      }, 
      {
        path: "/OcDetails3",
        element: <OcDetails3/>
      }, 
      {
        path: "/Dev1",
        element: <Dev1/>
      }, 
       {
        path: "/Dev2",
        element: <Dev2/>
      }, 
      {
        path: "/Dev3",
        element: <Dev3/>
      }, 
      
   
    ]
  }
 
]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
    </React.StrictMode>,
)
