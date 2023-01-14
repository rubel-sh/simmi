import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About/About";
import Details from "../pages/Details/Details";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/equipments/:id",
        element: <Details />,
        loader: async ({ params }) =>
          fetch(`https://simmi-server.vercel.app/api/equipments/${params.id}`),
      },
    ],
  },
]);
