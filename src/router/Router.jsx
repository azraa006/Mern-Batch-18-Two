
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import HeroSection from "../pages/HeroSection";
import Layout from "./Layout";
import Azraa from "../pages/Azraa";
import Azraa2 from "../pages/Azraa2";
import Dummy from "../pages/Dummy";
import Product from "../pages/Product";


const router = createBrowserRouter([


  {
    path: "/",
    element: <Layout />,
    children: [

       {
        path: "/",
        element: <About />,
      },

      {
        path: "/aa",
        element: <About />,
      },
      {
        path: "/hero",
        element: <HeroSection />,
      },
      {
        path: "/Az",
        element: <Azraa />,
      },
      {
        path: "/Azr",
        element: <Azraa2 />,
      },
      {
        path: "/Dummy",
        element: <Dummy />,
      },
      {
        path: "/Pro",
        element: <Product />,
      },



    ],
    errorElement: <ErrorPage />
  }


]);
export default router