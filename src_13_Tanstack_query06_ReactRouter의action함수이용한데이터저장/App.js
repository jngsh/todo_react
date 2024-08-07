import logo from './logo.svg';
import './App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Users, {loader as UsersLoader} from './pages/Users';

import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import UsersSearch from './pages/UsersSearch';
import UsersAdd, {action as UserAddAction} from './pages/UsersAdd';
import { queryClient } from './http/HttpService.js';

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
        element:<Users />,
        loader: UsersLoader
      },
      {
        path:"/usersSearch",
        element:<UsersSearch />
      },
      {
        path:"/usersAdd",
        element:<UsersAdd />,
        action: UserAddAction
      }
    ]
  }
]);

// Create a client
// const queryClient = new QueryClient(); HttpService.js에서 export

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
