import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useAuth from "./../../hooks/useAuth";
import { apiUrl } from "./../../hooks/userServerAPI";
const ServiceDetails = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const getServices = useLoaderData();
  const { _id, title, area, description, price, image, category } = getServices;
  const navigate = useNavigate();
  const handleBooking = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;
    const mobile = form.mobile.value;
    if (user?.email === getServices?.user?.email)
      return toast.error("You can't book your own service");
    const booking = {
      serviceId: _id,
      serviceName: title,
      customerName: name,
      address,
      mobile,
      host: {
        email: getServices?.user?.email,
        name: getServices?.user?.name,
      },
      status: "pending",
      client: {
        email: user?.email,
        name: user?.displayName,
      },

      price,
    };
    try {
      const { data } = await axios.post(`${apiUrl}/bookings`, booking);
      navigate("/dashboard/booked-services");

      toast.success(
        <p className="text-primary font-semibold">
          {title} <span className="text-text-light">successfully booked</span>
        </p>,

        data
      );
      setOpen(false);
    } catch (error) {
      toast.error(error.message);
    }
    console.table(booking);
  };
  return (
    <>
      <div className="container">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className="flex flex-col md:flex-row gap-6 pt-10 dark:text-text-dark text-text-light">
          <div className="w-full md:w-7/12">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-500">Category: {category}</p>
            <hr className="mt-4 mb-2 text-gray-300" />
            <p>Description: {description}</p>
            <div className="flex flex-col md:flex-row gap-3 justify-between items-center mt-6">
              <p>Area: {area}</p>{" "}
              <h2 className="flex items-center gap-2">
                Service charge start from:{" "}
                <span className="text-primary text-2xl font-semibold">
                  {price}
                </span>
              </h2>
            </div>
            <button onClick={() => setOpen(true)} className="btn w-full mt-6">
              Book this service
            </button>
          </div>
          <div className="w-full md:w-5/12">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className={`${open ? "flex opacity-100 transition-all duration-300 delay-100" : "hidden opacity-0"}  ease-in-out items-center justify-center w-full h-full fixed left-0 top-0 bg-black/20`}
      >
        <div className="w-full md:w-1/2 rounded-lg p-5 space-y-5 relative dark:bg-gray-800 bg-gray-200">
          <div className="bg-secondary px-5 py-2 absolute top-20 right-0 text-2xl font-bold text-white">
            Price: {price}
          </div>
          <div className="text-text-light dark:text-text-dark">
            <h2 className="text-2xl font-bold">Book {title} services</h2>
            <p className="text-sm ">category: {category}</p>
          </div>
          <h4 className="text-xl font-semibold text-text-light dark:text-text-dark">
            Please fill up this form{" "}
          </h4>
          <div className="w-full">
            <form
              onSubmit={handleBooking}
              className="w-full text-text-light dark:text-text-dark"
            >
              <div className="grp-col">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="frm-ctr"
                  placeholder="Enter your name"
                />
              </div>
              <div className="grp-col">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  className="frm-ctr"
                  placeholder="Enter your email"
                />
              </div>
              <div className="grp-col">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  className="frm-ctr"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className="grp-col">
                <label htmlFor="message">Mobile</label>
                <textarea
                  name="message"
                  className="frm-ctr "
                  placeholder="Write your message here"
                  rows={5}
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button className="btn" type="submit">
                  Book Now
                </button>
              </div>
            </form>
            <button
              onClick={() => setOpen(false)}
              className="btn-delete absolute bottom-5 right-5"
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
