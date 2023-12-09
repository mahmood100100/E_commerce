import Layout from "../Layouts/Layout.jsx";
import Register from "../components/web/Register/Register.jsx";
import Login from "../components/web/Login/Login.jsx";
import Home from "../components/web/Home/Home.jsx";
import Categories from "../components/web/Categories/Categories.jsx";
import DashboardLayout from "../Layouts/Dashboard_Layout.jsx";
import HomeDashboard from '../components/dashboard/Home/Home.jsx';
import CategoriesDashboard from '../components/dashboard/Categories_admin/Dashboard_Categories.jsx'
import Cart from "../components/web/Cart/Cart.jsx";
import Category_details from "../components/web/Categories/Category_details.jsx";
import Product from "../components/web/Products/product.jsx";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/web/ProtectedRoutes/ProtectedRoute.jsx";
import Profile from "../components/web/Profile/Profile.jsx";
import SendCode from "../components/web/ForgetPassword/SendCode.jsx";
import ResetPassowrd from "../components/web/ForgetPassword/ResetPassowrd.jsx";
export const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
        {
          path:'register',
          element:<Register />
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          index: true,
          element:<Home />
        },
        {
          path:'categories',
          element:<Categories />
        },
        {
          path:'products/category/:categoryID',
          element:<Category_details />
        },
        {
          path:'product/:productID',
          element:<Product/>
        },
        {
          path:'cart',
          element:
          <ProtectedRoute>
             <Cart />
          </ProtectedRoute>
        },
        {
          path:'profile',
          element:
          <ProtectedRoute>
             <Profile />
          </ProtectedRoute>
        },
        {
          path:'forgotPassword',
          element:<SendCode/>
        },
        {
          path:'resetPassword',
          element:
          <ProtectedRoute>
            <ResetPassowrd/>
          </ProtectedRoute>

        },
        {
          path:'*',
          element:<h2>page not found --- web</h2>
        }
    ]
  },
  {
      path:'/dashboard',
      element:<DashboardLayout />,
      children:[{
      path:'home',
      element:<HomeDashboard />
    }
    ,{
      path:'categories',
      element:<CategoriesDashboard />
    },
    {
      path:'*',
      element:<h2>page not found --- dashboard</h2>
    }
  ]

  }
]);