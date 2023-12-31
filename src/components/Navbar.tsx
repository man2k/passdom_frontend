import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { FC } from "react";
import logo from "/Black logo - no background.png";

const Navbar: FC = () => {
  return (
    <nav className="w-full flex justify-center fixed z-10">
      <div className="left-0 absolute">
        <Link to="/">
          <img src={logo} alt="logo" className="w-14 h-14 rounded-full p-2" />
        </Link>
      </div>
      <ul className="flex gap-9 w-max justify-center items-center rounded-full shadow-lg shadow-gray-500 bg-base-100 border-2">
        <li key="home">
          <Link
            to={"/"}
            className="btn btn-secondary text-base font-bold rounded-full w-max"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
              />
            </svg>
          </Link>
        </li>
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link to={`/${item.id}`} className="btn text-base rounded-full">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
