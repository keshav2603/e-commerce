import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from './components/header/Header.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import AllProducts from './pages/AllProducts.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element:
        <>
          <Header/>
          <Home/>
        </>
      },
      {
        path: "/cart",
        element:
        <>
          <Header/>
          <Cart/>
        </>
      },
      {
        path: "/products",
        element:
        <>
        <Header/>
        <AllProducts/>
        </>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
