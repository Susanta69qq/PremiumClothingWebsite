import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/home/Contact.jsx'
import Catalog from './components/home/Catalog.jsx'
import ProductBuyPage from './components/home/ProductBuyPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/catalog",
    element: <Catalog />
  },
  {
    path: "/product/:id",
    element: <ProductBuyPage />,
  }
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
