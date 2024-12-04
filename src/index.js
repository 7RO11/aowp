import React from "react";
import ReactDOM from "react-dom/client";
import "react-tooltip/dist/react-tooltip.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./about/About";
import BuildPrompt from "./buildPrompt/BuildPrompt";
import Description from "./description/Description";
import Home from "./home/Home";
import "./index.css";
import ProfPrompt from "./profPrompt/ProfPrompt";
import Select from "./select/Select";
import Windex from "./windex/Windex";

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
    path: "/profprompt",
    element: <ProfPrompt />,
  },
  {
    path: "/select/:type",
    element: <Select />,
  },
  {
    path: "/item/:type/:item",
    element: <Description />,
  },
  {
    path: "/index",
    element: <Windex />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
