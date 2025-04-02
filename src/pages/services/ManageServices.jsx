import axios from "axios";
import React, { useEffect, useState } from "react";
import TableRow from "../../components/services/TableRow";
import useAuth from "./../../hooks/useAuth";
import { apiUrl } from "./../../hooks/userServerAPI";

const ManageServices = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);

  const getServices = async () => {
    const { data } = await axios.get(`${apiUrl}/services/${user?.email}`, {
      withCredentials: true,
    });
    setServices(data);
    return setServices(data);
  };
  useEffect(() => {
    getServices();
  }, []);
  return (
    <div className="container mt-10 border border-primary rounded-lg overflow-hidden">
      <table className="w-full ">
        <thead className="bg-primary text-white text-left">
          <tr className="text-left">
            <th>Service Title</th>
            <th>Category</th>
            <th>Area</th>
            <th>Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-left">
          {services.map((service) => (
            <TableRow key={service._id} service={service} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageServices;
