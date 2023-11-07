import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Componet/Pages/Home/Home.jsx";
import AvailableFoods from "./Componet/Pages/AvailableFoods/AvailableFoods.jsx";
import Login from "./Componet/Pages/Login/Login.jsx";
import Signup from "./Componet/Pages/Signup/Signup.jsx";
import DetailsPage from "./Componet/Pages/DetailsPage/DetailsPage.jsx";
import AddFood from "./Componet/Pages/AddFood/AddFood.jsx";
import ManageMyfoods from "./Componet/Pages/ManageMyfoods/ManageMyfoods.jsx";
import UpdateFood from "./Componet/Pages/UpdateFood/UpdateFood.jsx";
import ManageFood from "./Componet/Pages/ManageFood/ManageFood.jsx";
import MyreqFood from "./Componet/Pages/MyreqFood/MyreqFood.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/AvailableFoods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/addfood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/managemyfoods",
        element: <ManageMyfoods></ManageMyfoods>,
      },
      {
        path: "/myreqfood",
        element: <MyreqFood></MyreqFood>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/details/:id",
        element: <DetailsPage></DetailsPage>,
      },
      {
        path: "/manage/:id",
        element: <ManageFood></ManageFood>,
      },
      {
        path: "/update/:id",
        element: <UpdateFood></UpdateFood>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
