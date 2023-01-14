import React from "react";
import { Outlet } from "react-router-dom";
import SimmiFooter from "../pages/shared/SimmiFooter/SimmiFooter";
import SimmiHeader from "../pages/shared/SimmiHeader/SimmiHeader";

const MainLayout = () => {
  return (
    <>
      <SimmiHeader />
      <Outlet />
      <SimmiFooter />
    </>
  );
};

export default MainLayout;
