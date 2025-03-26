import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UserNav from "./UserNav";

const Navbar = () => {
  const { user } = useAuth();
  const [mOpen, setMOpen] = useState(false);

  const navLists = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/services`}>Services</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="desk-nav hidden lg:block border-b-secondary border-b backdrop-blur-md">
        <div className="flex items-center justify-between h-16 container">
          <Link to={`/`}>
            <h1 className="font-bold text-2xl text-primary">
              Seba<span className="text-secondary">Hub</span>
            </h1>
          </Link>
          <ul className="desk-menu flex items-center">{navLists}</ul>
          <div className="right-nav">
            {user?.email ? (
              ""
            ) : (
              <Link className="btn btn-fill" to="/login">
                Login
              </Link>
            )}
            {user?.email && (
              <Link
                className="hover:text-primary duration-300"
                to={`dashboard`}
              >
                Dashboard
              </Link>
            )}

            {user?.email && <UserNav />}
          </div>
        </div>
      </div>
      <div className="mbl-nav-wrap">
        <div className="nav-wrap flex justify-between items-center">
          <Link to={`/`}>
            <h1 className="font-bold text-2xl text-primary">
              Seba<span className="text-secondary">Hub</span>
            </h1>
          </Link>
          <button
            onClick={() => setMOpen(!mOpen)}
            className={`nav-icon text-primary hover:text-secondary duration-300 text-xl`}
          >
            <FaBars />
          </button>
        </div>
        <nav className={`mbl-nav ${mOpen ? "open" : ""}`}>
          <ul>{navLists}</ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
