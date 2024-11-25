import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const RootLayout = () => {
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
