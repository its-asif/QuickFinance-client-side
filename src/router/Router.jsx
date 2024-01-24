import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/shared/errorPage/ErrorPage";
import Login from "../pages/login-register/login/Login";
import Register from "../pages/login-register/register/Register";
import ZakatAndTax from "../pages/zakatAndTax/zakatAndTax/ZakatAndTax";
import Services from "../pages/home/services/Services";


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
        path:"/services",
        element:<Services></Services>
      }
    ],
  },
]);

export default router;