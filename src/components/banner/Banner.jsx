import React from "react";
import { IoLocationSharp, IoSearchSharp } from "react-icons/io5";
const Banner = () => {
  return (
    <div className="w-full aspect-[16/5] bg-[url(/clean.jpg)] bg-no-repeat bg-cover bg-top flex items-center justify-center banner relative">
      <div className="container aspect-[16/5] flex justify-center items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl text-white shadow-md">
            Your Personal Assistant
          </h1>
          <p className="text-white shadow-md text-2xl">
            One-stop solution for your services. Order any service, anytime.
          </p>
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <button className="bg-white text-primary px-5 py-3 rounded-lg flex items-center justify-center gap-2 text-xl">
              <IoLocationSharp className="text-secondary" /> Sherpur
            </button>{" "}
            <form className="flex gap-3 items-center justify-between w-full relative">
              <input
                type="text"
                name="search"
                className="w-full bg-white px-5 py-3 rounded-lg shadow-md focus:outline-none"
                placeholder="Search your services .."
              />
              <button className="bg-primary text-white p-2 rounded-lg flex items-center justify-center cursor-pointer  absolute right-1 top-1/2 -translate-y-1/2">
                <IoSearchSharp className="text-xl w-6 h-6 " />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
