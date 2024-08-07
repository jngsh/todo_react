import logo from './logo.svg';
import './App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>
  },
  {
    path: "/xxx",
    element: <div>안녕하세요</div>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
