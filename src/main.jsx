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
import Error from "./Componet/Pages/Error/Error.jsx";
import AuthContext from "./AuthContext/AuthContext.jsx";
import PrivateRoute from "./Componet/PrivateRoute/PrivateRoute.jsx";
import LoginRoute from "./Componet/PrivateRoute/LoginRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
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
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/managemyfoods",
        element: (
          <PrivateRoute>
            <ManageMyfoods></ManageMyfoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreqfood",
        element: (
          <PrivateRoute>
            <MyreqFood></MyreqFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <LoginRoute>
            <Login></Login>
          </LoginRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <LoginRoute>
            <Signup></Signup>
          </LoginRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage/:id",
        element: (
          <PrivateRoute>
            <ManageFood></ManageFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>
);
