import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout.tsx";
import Reporting from "./pages/reporting.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <div>Board</div>,
      },
      {
        path: "/schedule",
        element: <div>Plan Schedule</div>,
      },
      {
        path: "reporting",
        element: <Reporting />,
      },
      {
        path: "/messages",
        element: <div>Messages</div>,
      },
      {
        path: "/teams",
        element: <div>Team Member</div>,
      },
      {
        path: "/plugins",
        element: <div>Tools Plugin</div>,
      },
      {
        path: "/roadmap",
        element: <div>Roadmap</div>,
      },
      {
        path: "/settings",
        element: <div>Settings</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
