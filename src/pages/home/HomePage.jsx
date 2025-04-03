import React from "react";
import { Link } from "react-router-dom";
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
        <div className="my-10 container flex justify-center items-center">
          <Link className="btn mx-auto" to="/services">
            All Services
          </Link>
        </div>
      </div>
      <div className="bg-primary/10 py-10 md:py-16 lg:py-20">
        <div className="container">
          <div className="">
            <h4 className="text-text-light text-2xl uppercase dark:text-text-dark ">
              Why Choose us
            </h4>
            <h1 className="sec-heading">Because we care about your safety..</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-10">
            <div className="w-full md:w-5/12 grid grid-cols-2 content-center gap-10">
              <div className="flex gap-2.5 items-center">
                <img className="h-12" src="/mask.svg" alt="" />
                <h4 className="text-2xl dark:text-text-dark text-text-light font-semibold">
                  Ensuring Masks
                </h4>
              </div>
              <div className="flex gap-2.5 items-center">
                <img className="h-12" src="/24-7.svg" alt="" />
                <h4 className="text-2xl dark:text-text-dark text-text-light font-semibold">
                  24/7 Support
                </h4>
              </div>
              <div className="flex gap-2.5 items-center">
                <img className="h-12" src="/wash.svg" alt="" />
                <h4 className="text-2xl dark:text-text-dark text-text-light font-semibold">
                  Sanitising Hands & Equipment
                </h4>
              </div>
              <div className="flex gap-2.5 items-center">
                <img className="h-12" src="/gloves.svg" alt="" />
                <h4 className="text-2xl dark:text-text-dark text-text-light font-semibold">
                  Ensuring Gloves
                </h4>
              </div>
            </div>
            <div className="w-full md:w-7/12 flex  gap-5 justify-between items-center">
              <img
                className="w-full h-full object-cover object-center rounded-lg"
                src="/team.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 md:py-16 lg:py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
            <div className="w-full md:w-4/12">
              <img src="/app.webp" alt="" />
            </div>
            <div className="w-full md:w-8/12 flex flex-col gap-5">
              <div className="">
                <h4 className="text-text-light text-2xl uppercase dark:text-text-dark ">
                  Download Our App
                </h4>
                <h1 className="sec-heading">
                  Any Service, Any Time, Anywhere.
                </h1>
              </div>
              <p className="dark:text-text-dark text-text-light">
                Give us your mobile number. You’ll get an SMS with the app
                download link.
              </p>
              <div className="flex items-center">
                <input
                  type="text"
                  name="msg"
                  placeholder="Your Mobile Number"
                  className="w-full bg-white px-5 py-3 focus:outline-none rounded-tl-xl rounded-bl-xl shadow-md border border-r-0 border-primary"
                />{" "}
                <button className="bg-primary text-white px-5 py-3.5 rounded-tr-xl rounded-br-xl shadow-md w-48 cursor-pointer hover:bg-secondary duration-300">
                  Get the app
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
