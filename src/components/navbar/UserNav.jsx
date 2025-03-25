import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const UserNav = () => {
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
        <img className="user-icon" src="wahednur.jpg" alt="" />
      </button>
      <div
        onClick={() => setOpen(false)}
        ref={menuRef}
        className={`nav-user-container ${open ? "open" : ""}`}
      >
        <div className="user-info">
          <img className="user-icon" src="wahednur.jpg" alt="" />
          <div className="flex flex-col">
            <p className="font-semibold">Abdul Wahed Nur</p>
            <small>wahednur@gmail.com</small>
          </div>
        </div>
        <hr className="text-gray-300" />
        <div className="flex flex-col">
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
          <button className="btn">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
