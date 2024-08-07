import logo from './logo.svg';
import './App.css';

import {createBrowserRouter, RouterProvider, json} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Users from './pages/Users';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
          var response = await fetch(url,{
            method:"PUT"
          });

          ///////////////////////////////////////
          // 일부러 loader 에러 발생. GET인데 PUT으로. 404에러 뜸. 500으로 바꿀 거임
          console.log(response);
          if(!response.ok){
            // throw new Response("Not Found", {state: 404}); // 잘 안 씀
            throw json({
              message:'에러발생 statusText',
              message2:'에러발생 data'
            }, {status:500});
          }


          ///////////////////////////////////////
          var xxx = await response.json();
          var userList = xxx.data;
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
