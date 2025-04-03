import React from "react";
import Banner from "../../components/banner/Banner";
import HomeService from "../../components/services/HomeService";

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-bg-dark">
      <div>
        <Banner />
      </div>
      <div className="container">
        <div className="my-10">
          <h1 className="sec-heading text-center">
            Our recent popular services
          </h1>
          <p className="w-full md:w-7/12 mx-auto text-center dark:text-text-dark mt-5">
            Our recent popular services include personalized coaching, online
            workshops, and 24/7 customer support, all designed to enhance your
            experience and meet your needs effectively!
          </p>
        </div>
        <HomeService />
      </div>
    </div>
  );
};

export default HomePage;
