import React, { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Customswitcher from "../layouts/Switcher/Customswitcher";
const Custompage = () => {
  useEffect(() => {
    let i = true
    return () => {
      if (i) {
        window.location.reload()
         i = false
      }
    }
  }, [])
  document.querySelector("body").classList.add("error-1");
  return (
    <Fragment >
      <Outlet />
      <Customswitcher />
    </Fragment>
  );
};
export default Custompage;
