import { useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Scroll } from "./animation";
import { RootLayout, DashboardLayout } from "./layouts";
import { NotFound, Home, About, Dashboard, FundMe } from "./pages";
import { APP_CONSTANTS } from "./config";

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
    ],
  },
  {
    path: APP_CONSTANTS.ROUTES.DASHBOARD,
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: APP_CONSTANTS.ROUTES.FUNDME,
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
