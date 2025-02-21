import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AuthComponents from "../components/auth";
import Verify from "../components/auth/verify";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <AuthComponents />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
]);

export default root;
