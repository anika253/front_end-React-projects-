import React from "react";
import Header from "./components/Header/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
//oulet k  ander thing will change Headre amd footer will remain same
