import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/allMovies">All Movies</NavLink></li>
      <li><NavLink to="/myCollection">My Collection</NavLink></li>
    </>
  );

  return (
    <div className="navbar shadow-md backdrop-blur-md border-b border-base-300 w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to={"/"} className="text-xl font-heading font-bold text-primary">MovieHub</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {/* Theme toggle */}
        <button onClick={toggleTheme} className="btn btn-ghost">
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <Link to={"/auth/login"} className="btn btn-primary text-white ml-0 md:ml-5">Login</Link>
        <Link to={"/auth/register"} className="btn btn-primary text-white ml-0 md:ml-2">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
