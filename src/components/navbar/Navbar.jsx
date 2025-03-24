import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLists = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/about`}>About</NavLink>
      </li>
      <li>
        <NavLink to={`/contact`}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={`/login`}>Login</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="desk-nav hidden lg:block">
        <div className="flex items-center justify-between h-16 container">
          <Link to={`/`}>
            <h1 className="font-bold text-2xl">LOGO</h1>
          </Link>
          <ul className="desk-menu flex items-center">{navLists}</ul>
          <div className="desk-nav-user flex items-center gap-4">
            <Link className="btn" to={`/login`}>
              Login
            </Link>
            <button className="w-10 h-10 rounded-full cursor-pointer overflow-hidden cursor-pointer">
              <img src="/wahednur.jpg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
