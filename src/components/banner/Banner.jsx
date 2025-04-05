import axios from "axios";
import React, { useState } from "react";
import { IoLocationSharp, IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../hooks/userServerAPI";
const Banner = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`${apiUrl}/search?search=${query}`);
      setResults(data);
      navigate("/search", { state: { results: data } });
    } catch (err) {
      console.log(err.message);
    }
  };
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
            <form
              onSubmit={handleSearch}
              className="flex gap-3 items-center justify-between w-full relative text-text-light dark:text-text-dark"
            >
              <input
                type="text"
                name="search"
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-white px-5 py-3 rounded-lg shadow-md focus:outline-none text-text-light dark:text-text-dark"
                placeholder="Search your services .."
              />
              <button
                type="submit"
                className="bg-primary text-white p-2 rounded-lg flex items-center justify-center cursor-pointer  absolute right-1 top-1/2 -translate-y-1/2"
              >
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
