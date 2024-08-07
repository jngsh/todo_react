import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Users, {loader as UsersLoader} from './pages/Users'; // User.js의 loader 메서드 import
import RootLayout from './pages/RootLayout';

// users에서 useLoaderData 하면 부모 loader 리턴값(page=1)이 나올까 본인 loader 리턴값(page=2)이 나올까?
// => 본인 게 나온다.
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: 'root',
    loader: async function () {
            var url = "https://reqres.in/api/users?page=1";
            var response = await fetch(url);
            var json = await response.json();
            var userList = json.data;
            return userList;
    },
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/users",
        element: <Users />,
        loader: UsersLoader
        ///////////////////////////////////////

        ///////////////////////////////////////
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
