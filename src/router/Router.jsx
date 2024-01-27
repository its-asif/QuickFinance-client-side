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
import FinancialManagement from "../pages/financialManagement/financialManagement";
import Dashboard from "../Components/DashBoard/Dashboard";
import AboutUs from "../pages/AboutUs/AboutUs";



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
        path: "/financialManagement",
        element: <FinancialManagement />
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      }
      ,
      {
        path: "/dashBoard",
        element: <Dashboard/>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      }

    ],
  },
]);

export default router;