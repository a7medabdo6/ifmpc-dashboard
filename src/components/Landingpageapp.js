import React, { Fragment } from "react";
import Landingpage from "./LandingPage/Landingpage";
import { Backtotop1 } from "../layouts/Backtotop/Backtotop";
const Landingpageapp = () => {
  document.querySelector("body").classList.add("app", "sidebar-mini", "ltr", "landing-page", "horizontalmenu");
  document.querySelector("body").classList.remove("main-body", "leftmenu");
  return (
    <Fragment>
      <Landingpage />
      <Backtotop1 />
    </Fragment>
  );
};
export default Landingpageapp;
