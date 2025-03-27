import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { user, setUser, loginUser, googleLogin, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      setUser(result.user);
      navigate(location.state || "/", { replace: true });
      toast.success(`Welcome ${result?.user?.displayName}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const result = await loginUser(email, password);
      navigate(location.state || "/", { replace: true });
      toast.success(`Welcome ${result?.user?.displayName}`);
    } catch (error) {
      toast.error("Invalid email or password", error);
      console.error("Invalid email or password", error);
    }
  };
  console.log(location?.state);
  if (user) return navigate(location.state || "/", { replace: true });
  if (user || loading) return null;

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
          <form onSubmit={handleLogin}>
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
              <div className="flex justify-between">
                <label htmlFor="password">Password</label>
                <Link
                  to={`/forgot-password`}
                  className="text-primary hover:underline"
                >
                  Forgot password
                </Link>
              </div>
              <input
                className="frm-ctr"
                type="password"
                name="password"
                placeholder="Your password"
              />
            </div>
            <div className="flex flex-col mt-10">
              <button type="submit" className="btn w-full">
                Sing In
              </button>
            </div>
          </form>
          <div className="text-center mt-5">
            <p className="text-text-light/60">
              You have no account?{" "}
              <Link to={`/sign-up`} className="text-primary hover:underline">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
