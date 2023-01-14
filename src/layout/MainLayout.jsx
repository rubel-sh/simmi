import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import SimmiFooter from "../pages/shared/SimmiFooter/SimmiFooter";
import SimmiHeader from "../pages/shared/SimmiHeader/SimmiHeader";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <SimmiHeader />
      {navigation.state === "idle" ? (
        <Outlet />
      ) : (
        <LoadingSpinner className="my-10" />
      )}

      <SimmiFooter />
    </>
  );
};

export default MainLayout;
