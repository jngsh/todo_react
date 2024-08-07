import logo from './logo.svg';
import './App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Users from './pages/Users';
import UserSinglePage from './pages/UserSinglePage';
import UserMultiPage from './pages/UserMultiPage';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
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
        loader: async function(){
          var url = "https://reqres.in/api/users?page=2";
          var response = await fetch(url);
          var json = await response.json();
          var userList = json.data;
          return userList;
        }
      },
      {
        path: "/users/:id",
        element: <UserSinglePage />,
        loader: async function({params}){
          var url = `https://reqres.in/api/users/${params.id}`;
          var response = await fetch(url);
          var json = await response.json();
          var userList = json.data;
          return userList;
        }
      },
      // users2?page=2
      {
        path: "/users2",
        element: <UserMultiPage />,
        loader: async function({request}){

          const x = new URL(request.url);
          const x2 = x.searchParams.get("page");
          console.log(x2); // 2

          var url = `https://reqres.in/api/users?page=${x2}`;
          var response = await fetch(url);
          var json = await response.json();
          var userList = json.data;
          return userList;
        }
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
