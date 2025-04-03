import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="overflow-x-hidden w-full dark:bg-bg-dark">
      <div className="w-full relative z-10 ">
        <Topbar open={open} setOpen={setOpen} />
      </div>

      <div className="w-full flex ">
        <div
          className={` fixed top-16 left-0 h-full duration-300 transition-all ${open ? "w-[300px]" : "w-0 -translate-x-10"}`}
        >
          <Sidebar open={open} />
        </div>
        <div
          className={`px-5 w-full min-h-[calc(100vh-64px)] duration-300 transition-all ${open ? "w-[calc(100%-300px)] ml-[300px]" : "w-full ml-0"}`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
