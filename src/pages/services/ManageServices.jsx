import React, { useEffect, useState } from "react";
import TableRow from "../../components/services/TableRow";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "./../../hooks/useAuth";

const ManageServices = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  const axiosSecure = useAxiosSecure();

  const getServices = async () => {
    const { data } = await axiosSecure.get(`/services/${user?.email}`);
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
