import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, area, price, image } = service;
  return (
    <Link
      to={`/services/${_id}`}
      className="border border-primary/15 hover:border-primary duration-300 hover:drop-shadow-md hover:scale-110 p-5 rounded-lg"
    >
      <img
        className="w-full aspect-[3/2] rounded-lg object-cover mb-5 object-center"
        src={image}
        alt=""
      />
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex items-center justify-between">
        <p>Area: {area}</p>
        <p className="text-primary text-2xl font-semibold">Price: {price}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
