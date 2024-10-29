import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Pets from "./components/Pets/Pets";
import Actors from "./components/Actors/Actors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
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
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
