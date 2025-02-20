import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AuthComponents from "../components/auth";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <AuthComponents />,
  },
]);

export default root;
