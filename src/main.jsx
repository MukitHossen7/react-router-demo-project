import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Pets from "./components/Pets/Pets";
import Actors from "./components/Actors/Actors";
import Blogs from "./components/Bolgs/Blogs";
import Homes from "./components/Homes/Homes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/homes",
        element: <Homes></Homes>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/pets",
        loader: () =>
          fetch("https://openapi.programming-hero.com/api/peddy/pets"),
        element: <Pets></Pets>,
      },
      {
        path: "/actors",
        loader: () =>
          fetch("https://openapi.programming-hero.com/api/retro-forum/posts"),
        element: <Actors></Actors>,
      },
      {
        path: "/blogs",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
