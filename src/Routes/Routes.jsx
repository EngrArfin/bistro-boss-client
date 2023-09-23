import {
    createBrowserRouter,
    RouterProvider,
    
  } from "react-router-dom";  
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Secret from "../pages/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
//import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SignUp from "../pages/SignUp/SignUp";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
//import AdminRoute from "./AdminRoute";
//import PrivateRoute from "./PrivateRoute";


  export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: '/secret',
          element: <Secret></Secret>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard> ,//<PrivateRoute></PrivateRoute>,
    children: [
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },

      //Admin Routes Here
      {
        path: 'adminhome',
        element: <AdminHome></AdminHome>

      },
      {
        path: 'allusers',
        element: <AllUsers></AllUsers> //<AdminRoute></AdminRoute> 
      },
      {
        path: 'addItem',
        element: <AddItem></AddItem> //<AdminRoute></AdminRoute> 
      },
      {
        path: 'manageItems',
        element: <ManageItems></ManageItems> //<AdminRoute> </AdminRoute> 
      }
      
    ]
  }
]);
{/* <PrivateRoute></PrivateRoute> */}
{/* <AdminRoute></AdminRoute> */}