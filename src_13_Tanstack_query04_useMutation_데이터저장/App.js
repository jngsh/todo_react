import logo from './logo.svg';
import './App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Users from './pages/Users';

import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import UsersSearch from './pages/UsersSearch';
import UsersAdd from './pages/UsersAdd';

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
        path:"/users",
        element:<Users />
      },
      {
        path:"/usersSearch",
        element:<UsersSearch />
      },
      {
        path:"/usersAdd",
        element:<UsersAdd />
      }
    ]
  }
]);

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
