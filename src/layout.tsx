import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

export default function Layout() {
  return (
    <div className=" layout fixed-top d-flex bg-white w-100 vh-100">
      <Sidebar />
      <div id="layoutBody" className="d-flex flex-column">
        <Header />
        <div id="outlet" className="p-3 overflow-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
