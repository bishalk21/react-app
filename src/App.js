import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./app.css";
import MainLayout from "./components/main-layout/MainLayout";
import Header from "./components/header/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error-page/Error";
// import RestaurantMenu from "./pages/restaurant-menu/RestaurantMenu";
import AboutUs from "./pages/about-us/AboutUs";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import ShimmerUI from "./components/shimmer-ui/ShimmerUI";
import store from "./utils/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import { setUserInfo } from "./reducers/userSlice";
// import Grocery from "./learning-optimization/Grocery";

const Grocery = lazy(() => import("./learning-optimization/Grocery"));
const RestaurantMenu = lazy(() =>
  import("./pages/restaurant-menu/RestaurantMenu")
);

const AppLayout = () => {
  // ---------- RTK
  const dispatch = useDispatch();

  // ---------- RTK
  const userInfo = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    // api call - username and password
    const data = {
      name: userInfo,
    };
    dispatch(setUserInfo(data.name));
  }, []);
  return (
    <Provider store={store}>
      <div className="app">
        <ScrollToTop />
        <Header />
        <Outlet />
      </div>
    </Provider>
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
        element: <AboutUs />,
      },
      {
        path: "/restaurants/:resId/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root.render(<RouterProvider router={appRouter} />);
