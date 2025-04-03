import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../../hooks/userServerAPI";
import ServiceCard from "./ServiceCard";

const HomeService = () => {
  const [services, setServices] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(`${apiUrl}/services`);
    setServices(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {services.slice(0, 6).map((service) => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </div>
  );
};

export default HomeService;
