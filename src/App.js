import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayout from "./components/main-layout/MainLayout";
import Header from "./components/header/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./pages/about-us/About";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error-page/Error";
import RestaurantMenu from "./pages/restaurant-menu/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root.render(<RouterProvider router={appRouter} />);
