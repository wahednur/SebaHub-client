import React from "react";
import { useLocation } from "react-router-dom";
import ServiceCard from "../../components/services/ServiceCard";

const Search = () => {
  const location = useLocation();
  const services = location.state?.results || [];
  console.log(services.length);
  return (
    <div className="container text-text-light dark:text-text-dark">
      <h1 className="sec-heading text-center my-10">Search Results</h1>
      <p>{services.length} services found</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Search;
