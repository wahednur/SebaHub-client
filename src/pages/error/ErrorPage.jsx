import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white dark:bg-bg-dark text-text-light dark:text-text-dark">
      <h1 className="sec-heading">404 | Page not found</h1>
      <Link to={`/`} className="btn mt-5">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
