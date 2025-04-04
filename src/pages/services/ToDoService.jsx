import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ToDoTableRow from "./ToDoTableRow";

const ToDoService = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  const getBookings = async () => {
    const { data } = await axiosSecure.get(`/bookings-request/${user?.email}`);
    return setBookings(data);
  };

  useEffect(() => {
    getBookings();
  }, []);
  return (
    <div>
      <Helmet>
        <title>To do services </title>
      </Helmet>
      {bookings.length <= 0 ? (
        <div className="w-full min-h-[calc(100vh-100px)] flex-col flex justify-center space-y-6 items-center  py-5">
          <h1 className="sec-heading text-center">No services booked yet</h1>
        </div>
      ) : (
        <table className="w-full ">
          <thead className="bg-primary text-white text-left">
            <tr className="text-left">
              <th>Service Title</th>
              <th>Client Name</th>
              <th>Customer Name</th>
              <th>Client Email</th>
              <th>Price</th>
              <th>status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {bookings.map((booking) => (
              <ToDoTableRow key={booking._id} booking={booking} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ToDoService;
