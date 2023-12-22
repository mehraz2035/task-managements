import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Task from "../pages/Dashboard/Task";
import Contact from "../pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
          {
            path: '/',
            element: <Home></Home>
          },
          {
            path: 'login',
            element: <Login></Login>
          },
          {
            path: 'signup',
            element: <SignUp></SignUp>
          },
          {
            path: 'contact',
            element: <Contact></Contact>
          }
      ]
    },
    {
      path: 'deshboard',
      element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'task',
          element: <Task></Task>
        }
      ]
    }
  ]);

  export default router