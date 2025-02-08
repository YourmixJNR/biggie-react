import { useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { RootLayout, DashboardLayout } from "./layouts";
import { PrivateRoute } from "./routes";
import { APP_CONSTANTS } from "./config";
import { Scroll } from "./animation";
import {
  NotFound,
  Home,
  About,
  Dashboard,
  FundMe,
  SignIn,
  SignUp,
} from "./pages";

// import global styles
import "./styles/overrides.css";
import "./styles/utils.css";

const router = createBrowserRouter([
  {
    path: APP_CONSTANTS.ROUTES.HOME,
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: APP_CONSTANTS.ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: APP_CONSTANTS.ROUTES.AUTH.LOGIN,
        element: <SignIn />,
      },
      {
        path: APP_CONSTANTS.ROUTES.AUTH.SIGNUP,
        element: <SignUp />,
      },
    ],
  },

  {
    path: APP_CONSTANTS.ROUTES.DASHBOARD,
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <PrivateRoute element={<Dashboard />} />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: APP_CONSTANTS.ROUTES.FUND_ME,
        element: <FundMe />,
      },
    ],
  },
]);

export default function App() {
  useEffect(() => {
    Scroll();
  }, []);
  return (
    <>
      <Outlet />
      <RouterProvider router={router} />
    </>
  );
}
