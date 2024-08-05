import React, { Fragment,  } from "react";
import Header from "../layouts/Header/Header";
import Sidebar from "../layouts/SideBar/SideBar";
import Footer from "../layouts/Footer/Footer";
import Switcher from "../layouts/Switcher/Switcher";
import { Outlet } from "react-router-dom";
import Rightside from "../layouts/Rightside/Rightside";
import { Backtotop1 } from "../layouts/Backtotop/Backtotop";
const App = () => {
  document.querySelector("body").classList.remove("error-1");
  document.querySelector("body").classList.remove("app", "sidebar-mini", "landing-page", "horizontalmenu")
  document.querySelector("body").classList.add("main-body", "leftmenu")
  const remove = () => {
    document.querySelector(".sidebar-right").classList.remove("sidebar-open");
    document.querySelector("body").classList.remove("main-sidebar-show");
    document.querySelector(".demo_changer").classList.remove("active");
    document.querySelector(".demo_changer").style.right = "-270px";

  };
  return (
    <Fragment >
      <div className="horizontalMenucontainer">
        <Switcher />
        <div className="page">
          <Header />
          <Sidebar />
          <div className="main-content side-content">
            <div className="main-container container-fluid" onClick={() => remove()}>
              <div className="inner-body" >
                <Outlet />
              </div>
            </div>
          </div>
          <Rightside />
        </div>
        <Backtotop1 />
        <Footer />
      </div>
    </Fragment>
  );
};
export default App;
