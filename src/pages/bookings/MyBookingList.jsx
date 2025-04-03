import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { apiUrl } from "../../hooks/userServerAPI";
import BookTableRow from "./BookTableRow";

const MyBookingList = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id, dlTitle) => {
    try {
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
          const { data } = await axiosSecure.delete(`/bookings/${id}`);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Booking has been deleted.",
              icon: "success",
            });
            getBookings();
          }
        }
      });
    } catch (err) {
      toast.error(err.message);
    }
  };
  const getBookings = async () => {
    try {
      const { data } = await axiosSecure.get(
        `${apiUrl}/bookings/${user?.email}`
      );

      setBookings(data);
      return setBookings(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <div className="dark:text-text-dark text-text-light p-5">
      <Helmet>
        <title>Manage services</title>
      </Helmet>
      {bookings.length <= 0 ? (
        <div className="w-full min-h-[calc(100vh-100px)] flex-col flex justify-center items-center  py-5">
          <h1 className="sec-heading text-center"> No Booked service yet</h1>
          <Link className="btn mt-6" to={`/services`}>
            Go to services page
          </Link>
        </div>
      ) : (
        <table className="w-full ">
          <thead className="bg-primary text-white text-left">
            <tr className="text-left">
              <th>Service Title</th>
              <th>Service Holder name</th>
              <th>Email</th>
              <th>Price</th>
              <th>status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {bookings.map((booking) => (
              <BookTableRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyBookingList;
