
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createBrowserRouter, RouterProvider, Navigate, useRouteLoaderData } from "react-router-dom";
// import HomeComponent from "./components/HomeComponent.js";
// import SignupComponent, { action as signUpAction } from "./pages/SignupComponent";
// import LoginComponent, { action as authAction } from "./pages/LoginComponent";
// import RootLayout from "./components/Root.js";
// import ErrorPage from './pages/Error';

// import { tokenLoader } from './util/auth';
// import { action as logoutAction } from './pages/Logout'

// import ListTodosComponent, { loader as todosLoader } from "./pages/ListTodosComponent";
// import AddTodoComponent, { action as addTodoAction } from "./pages/AddTodoComponent";
// import UpdateTodoComponent, { loader as updateTodoLoader, action as updateTodoAction } from "./pages/UpdateTodoComponent";

import React from 'react';

import StatsChartsPage from "./stats/StatsChartsPage.js";
import StocksPage from "./stocks/StocksPage.js";

const router = createBrowserRouter([
  // {
  //   path: "/bisang/admin",
  //   element: <RootLayout />,
  //   children: [
      // {path:'/', element:<HomeComponent />},
      {
        path: "/stats",
        element: <StatsChartsPage />
      },
      {
        path: "/stocks",
        element: <StocksPage />
      }
  //   ]
  // }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
