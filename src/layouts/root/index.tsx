import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { APP_CONSTANTS } from "../../config";

const RootLayout = () => {
  const { pathname } = useLocation();

  const noLayoutRoutes = [
    APP_CONSTANTS.ROUTES.AUTH.LOGIN,
    APP_CONSTANTS.ROUTES.AUTH.SIGNUP,
    APP_CONSTANTS.ROUTES.AUTH.FORGOT_PASSWORD,
  ];

  const isNoLayout = noLayoutRoutes.some((link) => pathname.includes(link));
  
  if (isNoLayout) {
    return (
      <div>
        <ScrollRestoration />
        <Outlet />
      </div>
    );
  }

  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
