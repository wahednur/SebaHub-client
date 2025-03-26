import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate } from "react-router-dom";
import { toast } from "sonner";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { user, setUser, googleLogin, createUser, updateUser, loading } =
    useAuth();
  const [error, setError] = useState(null);
  //Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      setUser(result.user);
      toast.success(`Welcome ${result.user.displayName}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Create user with email and password
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      return setError("Password must be at least 6 characters log");
    }
    if (!/[a-z]/.test(password)) {
      return setError("Password must contain at least one lowercase letter");
    }
    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain at least one uppercase letter");
    }
    if (!/[0-9]/.test(password)) {
      return setError("Password must contain at least one number");
    }
    if (!/[@$!%*?&]/.test(password)) {
      return setError("Password must contain at least one special character");
    }
    try {
      const result = await createUser(email, password);
      await updateUser(name, photo);
      setUser({ ...result?.user, displayName: name, photoURL: photo });
      toast(`Welcom ${name}`);
    } catch (error) {
      toast.error(error.message);
    }
    console.table({ name, photo, email, password });
  };
  if (user) return <Navigate to="/" />;
  if (user || loading) return null;
  return (
    <div className="container">
      <Helmet>
        <title>Register</title>
      </Helmet>
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
            <button
              onClick={handleGoogleLogin}
              className="w-full my-5 flex items-center justify-center gap-3 py-2 border border-primary/30 rounded-md cursor-pointer text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <img
                className="group-hover:bg-white p-2 rounded-full duration-300 transition-all"
                src="/g.svg"
                alt=""
              />{" "}
              Sign up with Google
            </button>
          </div>
          <form onSubmit={handleCreateUser}>
            <div className="flex flex-col mb-4">
              <label htmlFor="name">Name</label>
              <input
                className="frm-ctr"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="photo">Photo</label>
              <input
                className="frm-ctr"
                type="text"
                name="photo"
                placeholder="Your photo url"
                required
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
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <div className="flex flex-col mt-10">
              <button type="submit" className="btn w-full">
                Sing up
              </button>
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
