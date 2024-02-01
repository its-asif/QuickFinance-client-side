import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/shared/errorPage/ErrorPage";
import Login from "../pages/login-register/login/Login";
import Register from "../pages/login-register/register/Register";
import ZakatAndTax from "../pages/zakatAndTax/zakatAndTax/ZakatAndTax";
import ContactUs from "../pages/ContactUs/ContactUs";
import FinancialManagement from "../pages/financialManagement/FinancialManagement";
import AboutUs from "../pages/AboutUs/AboutUs";
import Dashboard from "../layout/Dashboard";
import MyDashboard from "../pages/Dashboard/MyDashboard/MyDashboard";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/zakatAndTax",
        element: <ZakatAndTax />
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      }

    ],
  },
  {
    path:"/dashboard", 
    // element: <PrivateRoute><Dashboard/></PrivateRoute>,
    element: <Dashboard/>,
    children:
    [
      {
        path:"",
        element:<MyDashboard/>,
      },
      {
        path:"financialManagement",
        element:<FinancialManagement/>
      }
    ] 
  }
]);

export default router;