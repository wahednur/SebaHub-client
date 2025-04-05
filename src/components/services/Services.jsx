import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { apiUrl } from "../../hooks/userServerAPI";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`${apiUrl}/search?search=${query}`);
      setResults(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(results);
  const getData = async () => {
    const { data } = await axios.get(`${apiUrl}/services`);
    setServices(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const displayServices = query ? results : services;
  return (
    <>
      <div className="mb-10">
        <form
          onSubmit={handleSearch}
          className="flex gap-3 items-center justify-between w-full relative"
        >
          <input
            type="text"
            name="search"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white px-5 py-3 rounded-lg shadow-md focus:outline-none"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayServices.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </>
  );
};

export default Services;
