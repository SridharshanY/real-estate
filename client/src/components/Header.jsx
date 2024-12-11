import { FaSearch } from "react-icons/fa";
import hamburger from "../svg/HAMBURG.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [ham, setHam] = useState(false);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex flex-row justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="sm:text-2xl text-sm flex flex-wrap">
          <NavLink to="/">
            <span className="text-slate-500">Estate</span>
            <span className="text-slate-700">Emporium</span>
          </NavLink>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="sm:flex sm:gap-4 hidden">
          <li className="hover:underline">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:underline">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:underline">
            <NavLink to="/signIn">Sign In</NavLink>
          </li>
        </ul>
        <button
          onClick={() => setHam(!ham)}
          className={`text-black duration-200 block sm:hidden ${
            ham ? "rotate-180" : "rotate-0"
          }`}
        >
          <img src={hamburger} className="w-8" />
        </button>
      </div>
      <ul
        className={
          ham
            ? `sm:hidden flex flex-col gap-2 p-4 tranition-all duration-300 border border-y-black`
            : `max-h-0 opacity-0 tranition-all duration-75`
        }
      >
        <li className="hover:underline">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/signIn">Sign In</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
