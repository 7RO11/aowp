import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import Home from "./Home";
import About from "./About";
import BuildPrompt from "./BuildPrompt";
import Select from "./Select";
import Description from "./Description";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/buildprompt",
    element: <BuildPrompt />,
  },
  {
    path: "/select/:type",
    element: <Select />,
  },
  {
    path: "/item/:type/:item",
    element: <Description />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
