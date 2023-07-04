import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { FC } from "react";
import logo from "/passdom-logo.png";

const Navbar: FC = () => {
  return (
    <nav className="w-full flex justify-center bg-inherit">
      <Link to="/">
        <img src={logo} alt="logo" className="w-14 h-14 rounded-full p-2" />
      </Link>
      <ul className="flex gap-9 p-2 w-full justify-center pr-16">
        <li key="home">
          <Link
            to={"/"}
            className="btn btn-secondary bg-teal-600 text-base font-bold rounded-md text-black"
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
            <Link
              to={`/${item.id}`}
              className="btn bg-teal-600 text-base text-black rounded-md"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
