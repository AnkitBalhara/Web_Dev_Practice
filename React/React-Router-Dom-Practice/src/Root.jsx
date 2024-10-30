import React from "react";
import Hearder from "./components/Header/Hearder";
import Footer from "./components/Footer/Footer";
import {Outlet} from "react-router-dom"

function Root() {
  return (
    <>
      <Hearder />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
