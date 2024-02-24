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
import BudgetPlanning from "../pages/Dashboard/BudgetPlanning/BudgetPlanning";
import GoalProgress from "../pages/Dashboard/GoalProgress/GoalProgress";
import AllUsers from "../pages/Dashboard/adminRoutes/AllUsers";
import MyAsset from "../pages/Dashboard/MyAsset/MyAsset";
import DonateZakat from "../pages/zakatAndTax/Zakat/DonateZakat";
import PaymentSuccess from "../pages/shared/Payment/PaymentSuccess";
import UnderMaintenance from "../pages/shared/underMaintenance/UnderMaintenance";
import MyPayments from "../pages/Dashboard/payments/MyPayments";
import PayTax from "../pages/zakatAndTax/Tax/PayTax";
import PaymentFailed from "../pages/shared/Payment/PaymentFailed";
import CreateBlogs from "../pages/Dashboard/blogs/CreateBlog";
import MyBlog from "../pages/Dashboard/blogs/myBlog/MyBlog";
import PublicBlogs from "../pages/Dashboard/blogs/publicBlogs/PublicBlogs";
import BlogDetails from "../pages/Dashboard/blogs/publicBlogs/BlogDetails";
import BlogsByTags from "../pages/Dashboard/blogs/publicBlogs/BlogsByTags";



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
        path:"/donateZakat",
        element:<DonateZakat></DonateZakat>

      },
      {
        path:"/payTax",
        element:<PayTax></PayTax>

      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/about", 
        element: <AboutUs></AboutUs>
      },
      {
        path:"/payment/success/:tranId",
        element:<PaymentSuccess></PaymentSuccess>
      },
      {
        path:"/payment/fail",
        element:<PaymentFailed></PaymentFailed>
      },
      {
        path: "blogs/:blogId",
        element: <BlogDetails/>,
      },
      {
        path: "blog/tag/:tag",
        element: <BlogsByTags/>,
      },
      {
        path: 'publicBlogs',
        element: <PublicBlogs/>,
      },

    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children:
      [
        {
          path: "",
          element: <MyDashboard />,
        },
        {
          path: "myAccount",
          element: <MyDashboard />,
        },
        // {
        //   path: "myAsset",
        //   element: <UnderMaintenance />, 
        // },
        {
          path: "financialManagement",  //personal finance
          element: <FinancialManagement />
        },
        {
          path: "budgetPlanning",
          element: <BudgetPlanning />
        },
        {
          path:'goalProgress',
          element: <GoalProgress/>,
        },
        {
          path:'manageDebt',
          element: <UnderMaintenance/>,
        },
        {
          path:'payments',
          element: <MyPayments/>,
        },
        {
          path: 'allUsers',
          element: <AllUsers/>,
        },
        {
          path: 'publishBlogs',
          element: <CreateBlogs/>,
        },
        {
          path: 'myBlogs',
          element: <MyBlog/>,
        },
        {
          path: 'myAsset',
          element: <MyAsset/>,
        },
      ]
  }
]);

export default router;