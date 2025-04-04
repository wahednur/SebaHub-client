import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import TableRow from "../../components/services/TableRow";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "./../../hooks/useAuth";

const ManageServices = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id, dlTitle) => {
    Swal.fire({
      title: "Are you sure?",
      html: `Are you sure you want to delete <span class="font-semibold text-red-400"> ${dlTitle}</span> ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.delete(`/services/${id}`);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your services has been deleted.",
            icon: "success",
          });
          getServices();
        }
      }
    });
  };

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
      <Helmet>
        <title>Manage services</title>
      </Helmet>

      {services.length <= 0 ? (
        <div className="w-full min-h-[calc(100vh-100px)] flex-col flex justify-center space-y-6 items-center  py-5">
          <h1 className="sec-heading text-center">No services found</h1>
          <p className="text-text-light dark:text-text-dark mt-6">
            Are you want to add a new services ?{" "}
            <Link className="btn mt-6" to={`/dashboard/add-service`}>
              Add Service
            </Link>
          </p>
        </div>
      ) : (
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
              <TableRow
                key={service._id}
                service={service}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageServices;
