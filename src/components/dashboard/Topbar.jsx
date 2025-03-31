import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserNav from "../navbar/UserNav";

const Topbar = ({ setOpen, open }) => {
  return (
    <div className="">
      <div className="w-full h-16 dark:bg-gray-800 bg-white flex items-center justify-between  dark:text-white px-5">
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
            className="frm-ctr dark:bg-white text-gray-500"
            placeholder="Search..."
          />
        </div>
        <div>
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
