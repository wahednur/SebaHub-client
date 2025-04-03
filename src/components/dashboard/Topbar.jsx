import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserNav from "../navbar/UserNav";
import ThemeToggle from "../theme/ThemeToggle";

const Topbar = ({ setOpen, open }) => {
  return (
    <div className="">
      <div className="w-full h-16 dark:bg-gray-800 bg-gray-200 flex items-center justify-between  dark:text-white px-5">
        <div className="flex items-center gap-2">
          <button onClick={() => setOpen(!open)} className="cursor-pointer">
            <FaBars />
          </button>
          <Link to={`/`}>
            <h1 className="font-bold text-2xl text-primary">
              Seba<span className="text-secondary">Hub</span>
            </h1>
          </Link>
        </div>
        <div className="hidden md:block w-1/2">
          <input
            type="text"
            name="search"
            className="frm-ctr "
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
