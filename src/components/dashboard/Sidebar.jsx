import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ open }) => {
  return (
    <div className="w-full bg-primary/20 h-[calc(100vh-64px)] flex flex-col justify-between relative">
      <Link
        className="text-text font-bold text-2xl px-5 py-2 bg-primary text-white w-full float-left hover:bg-secondary duration-300 ease-in-out"
        to={`/dashboard`}
      >
        Dashboard
      </Link>
      <div
        className={`w-full h-full mt-5 duration-300 transition-all ${open ? "px-5" : "px-0 -translate-x-[100px]"}`}
      >
        <div className="flex flex-col space-y-2 dark:text-dark text-text-light">
          <Link to="/dashboard/add-service">Add Service</Link>
          <Link to="/dashboard/manage-services">Manage Services</Link>
          <Link to="/dashboard/booked-services">Booked Services</Link>
          <Link to="/dashboard/service-to-do"> Service-To-Do</Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-center px-5">
        <button
          className={`btn w-full relative bottom-5 duration-300 ${!open && "hidden"}`}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
