import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import App from './App'
import Home from '../components/Home'
import Contact from '../components/Contact'
import CallApi from '../components/CallApi'


/*
const router = createBrowserRouter([
{
    path: "/",
    element: <App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/apicall",
        element:<CallApi/>
      },
  ]
  }

])
*/


//loader={async function call which will return a promise data ,
//use useLoaderdata from reactrouter dom to access the response of api in json}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/apicall/:id' element={<CallApi/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
