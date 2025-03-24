import React from "react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-neutral-100">
      <div className="container">
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-text-light">
            <h4 className="text-2xl font-bold mb-2">Contact</h4>
            <p>212121 / +8801917839303</p>
            <p>info@sebahub.com</p>
            <h5 className="text-lg font-bold mt-2">Corporate Address</h5>
            <p>Sherpur, Mymensingh, Bangladesh</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold mb-2">Other Pages</h4>
            <Link>Blog</Link>
            <Link>Help</Link>
            <Link>Terms of use</Link>
            <Link>Privacy & Policy</Link>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-2">Company</h4>
            <div className="flex flex-col gap-2">
              <Link>About</Link>
              <Link>Mission</Link>
              <Link>Vision</Link>
              <Link>FAQ</Link>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-2">Download Our App</h4>
            <div className="flex flex-col gap-2">
              <p>
                Tackle your to-do list wherever you are with our mobile app &
                make your life easy.
              </p>
              <div className="flex gap-2">
                <img src="/app-store.png" alt="" />
                <img src="/android.png" alt="" />
              </div>
              <div className="flex items-center gap-2 mt-4">
                <a
                  className="w-10 h-10 bg-primary flex justify-center items-center text-white rounded-full duration-300 ease-in-out hover:bg-secondary"
                  href="#"
                >
                  <FaFacebookF />
                </a>
                <a
                  className="w-10 h-10 bg-primary flex justify-center items-center text-white rounded-full duration-300 ease-in-out hover:bg-secondary"
                  href="#"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  className="w-10 h-10 bg-primary flex justify-center items-center text-white rounded-full duration-300 ease-in-out hover:bg-secondary"
                  href="#"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white">
        <div className="container flex justify-center items-center gap-2">
          <p className=" text-sm py-4">
            Copyright &copy; {new Date().getFullYear()} SebaHub Inc | All rights
            reserved
          </p>
          |<p className="text-text-dark"> Developed by Wahed Nur</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
