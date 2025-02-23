// import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/home";
// import AuthComponents from "../components/auth";
// import Verify from "../components/auth/verify";
// import GetEmail from "../components/auth/getemail";
// import ChangePassword from "../components/auth/changePassword";
// import Cart from "../pages/cart";

// const root = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/auth",
//     element: <AuthComponents />,
//   },
//   {
//     path: "/getemail",
//     element: <GetEmail />,
//   },
//   {
//     path: "/verify",
//     element: <Verify />,
//   },
//   {
//     path: "/changePassword",
//     element: <ChangePassword />,
//   },

//   {
//     path: "/cart",
//     element: <Cart />,
//   },
// ]);

// export default root;

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AuthComponents from "../components/auth";
import Verify from "../components/auth/verify";
import GetEmail from "../components/auth/getemail";
import ChangePassword from "../components/auth/changePassword";
import Cart from "../pages/cart";
import Layout from "../outlet";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Barcha sahifalar Layout ichida bo'ladi
    children: [
      { path: "/", element: <Home /> },

      { path: "/cart", element: <Cart /> },
    ],
  },
  { path: "/auth", element: <AuthComponents /> },
  { path: "/getemail", element: <GetEmail /> },
  { path: "/verify", element: <Verify /> },
  { path: "/changePassword", element: <ChangePassword /> },
]);

export default root;
