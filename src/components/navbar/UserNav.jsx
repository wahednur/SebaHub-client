import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserNav = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // setOpen(false) ousite click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="nav-user">
      <button ref={buttonRef} onClick={() => setOpen(!open)}>
        {user?.photoURL ? (
          <img className="user-icon" src="wahednur.jpg" alt="" />
        ) : (
          <span className="w-10 h-10 rounded-full bg-primary text-white flex justify-center items-center">
            {user?.displayName.slice(0, 1)}
          </span>
        )}
      </button>
      <div
        onClick={() => setOpen(false)}
        ref={menuRef}
        className={`nav-user-container ${open ? "open" : ""}`}
      >
        <div className="user-info">
          {user?.photoURL ? (
            <img className="user-icon" src="wahednur.jpg" alt="" />
          ) : (
            <span className="w-10 h-10 rounded-full bg-primary text-white flex justify-center items-center">
              {user?.displayName.slice(0, 1)}
            </span>
          )}
          <div className="flex flex-col">
            <p className="font-semibold">{user?.displayName}</p>
            <small>{user?.email}</small>
          </div>
        </div>
        <hr className="text-gray-300" />
        <Link
          className="hover:text-primary duration-300 w-full block"
          to={`dashboard`}
        >
          Dashboard
        </Link>
        <hr className="text-gray-300" />
        <div className="flex flex-col space-y-2">
          <Link to="/add-services">Add Service</Link>
          <Link to="/manage-services">Manage Services</Link>
          <Link to="/booked-services">Booked Services</Link>
          <Link to="/service-to-do"> Service-To-Do</Link>
        </div>
        <hr className="text-gray-300" />
        <div className="flex justify-between gap-6 w-full items-center">
          <Link className="btn btn-outline" to="#">
            Edit
          </Link>
          <button onClick={() => logOut()} className="btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
