import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import search from "../assets/icons/search.svg";
import notification from "../assets/icons/notification.svg";
import user from "../assets/image.png";
import menu from "../assets/menu.png";
import Mobilesidebar from "./mobilesidebar";

export default function Header() {
  const [toggleNav, setToggleNav] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setToggleNav(false);
  }, [location.pathname]);

  return (
    <div
      id="header"
      className="d-flex align-items-center justify-content-between"
    >
      <div id="hamburger" className="" onClick={() => setToggleNav(!toggleNav)}>
        <img src={menu} alt="" className="icon" />
      </div>

      {toggleNav && <Mobilesidebar />}

      <div className="logo gap-2 fw-bold">
        <span className="logoDot bg-info"></span>
        <span className="logoText">Compute</span>
      </div>

      <div id="search" className=" d-flex gap-1 align-items-center p-1">
        <img src={search} alt="" className="icon" />
        <input type="search" name="search" id="" />
      </div>

      <div className="d-flex align-items-center gap-3">
        <div className="">
          <img src={notification} alt="" className="icon" />
        </div>

        <div className="d-flex gap-1 align-items-center justify-content-center">
          <img
            src={user}
            alt=""
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "50%",
            }}
          />
          <div className="d-flex flex-column ">
            <span
              className=""
              style={{
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Anna Mac
            </span>
            <span
              className=""
              style={{
                fontSize: "13px",
              }}
            >
              Head HR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
