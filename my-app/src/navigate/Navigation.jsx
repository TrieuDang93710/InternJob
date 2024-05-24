import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../router/ErrorPage";
import Root from "../router/Root";
import Console from "../screens/console/Console";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/console",
        element: <Console />,
      },
      {
        path: "/customer",
        element: <h1>Customer Page</h1>,
      },
      {
        path: "/staff",
        element: <h1>Staff Page</h1>,
      },
      {
        path: "/product",
        element: <h1>Product Page</h1>,
      },
      {
        path: "/order",
        element: <h1>Order Page</h1>,
      },
    ],
  },
]);

function Navigation(props) {
  return <RouterProvider router={router} />;
}

export default Navigation;
