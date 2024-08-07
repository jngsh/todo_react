import logo from './logo.svg';
import './App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import ProductDetail from './pages/ProductDetail';
import ProductDetail2 from './pages/ProductDetail2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/products",
        element:<Products />
      },
      {
        path:"/products/:id",
        element:<ProductDetail />
      },
      {
        path:"/products2",
        element:<ProductDetail2 />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
