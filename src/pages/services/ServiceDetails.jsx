import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const getServices = useLoaderData();
  const { _id, title, area, description, price, image, category } = getServices;
  return (
    <div className="container">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="flex flex-col md:flex-row gap-6 pt-10">
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
          <button className="btn w-full mt-6">Book this service</button>
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
  );
};

export default ServiceDetails;
