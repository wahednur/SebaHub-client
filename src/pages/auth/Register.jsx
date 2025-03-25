import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <div className="min-h-[calc(100vh-415px)] flex justify-center items-center">
        <div className="w-full md:w-1/2 p-10 border border-primary/20 rounded-lg shadow-lg">
          <div className="text-center space-y-3">
            <p className="text-primary">Register</p>
            <h1 className="sec-heading">Start for free Today</h1>
            <p className="text-text-light/60">
              Create an account to get started
            </p>
          </div>
          <div className="text-center">
            <button className="w-full my-5 flex items-center justify-center gap-3 py-2 border border-primary/30 rounded-md cursor-pointer text-primary hover:bg-primary hover:text-white transition-all duration-300 group">
              <img
                className="group-hover:bg-white p-2 rounded-full duration-300 transition-all"
                src="/g.svg"
                alt=""
              />{" "}
              Sign up with Google
            </button>
          </div>
          <form>
            <div className="flex flex-col mb-4">
              <label htmlFor="name">Name</label>
              <input
                className="frm-ctr"
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="photo">Photo</label>
              <input
                className="frm-ctr"
                type="text"
                name="photo"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email">Email</label>
              <input
                className="frm-ctr"
                type="email"
                name="email"
                placeholder="Your email"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="password">Password</label>
              <input
                className="frm-ctr"
                type="password"
                name="password"
                placeholder="Your password"
              />
            </div>
            <div className="flex flex-col mt-10">
              <button className="btn w-full">Sing up</button>
            </div>
          </form>
          <div className="text-center mt-5">
            <p className="text-text-light/60">
              Already have an account?{" "}
              <Link to={`/login`} className="text-primary hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
