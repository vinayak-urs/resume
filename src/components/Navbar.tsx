import React, { useState } from "react";
import Switcher from "./theme/Switcher";

const inActiveLink = "block py-2 px-3 text-gray  rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

const activeLink = "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"

const NavLink = ({ href, children, isActive, onClick }) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      className={`${isActive? activeLink: inActiveLink} `}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </a>
  </li>
);

const MenuButton = ({ toggleMenu, isMenuOpen }) => (
  <button
    onClick={toggleMenu}
    data-collapse-toggle="navbar-cta"
    type="button"
    className="text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    aria-controls="navbar-cta"
    aria-expanded={isMenuOpen}
  >
    <span className="sr-only">Open main menu</span>
    <svg
      className="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  </button>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (e,page) => () => {
    // e.preventDefault()
    setActivePage(page);
    setIsMenuOpen(false); // Close the menu on link click (for mobile view)
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl items-center flex flex-wrap justify-between  p-4">
        <a
          href="#"
          className="items-center md:flex gap-3 font-bold lg:font-bold text-sky-400 hover:cursor-pointer text-xl lg:text-2xl"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Vinayak
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <div className="py-auto">
            <Switcher />
          </div>
          <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent dark:text-white text-gray-600 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent md:bg-transparent dark border-gray-700">
            <NavLink
              href="#"
              isActive={activePage === "Home"}
              onClick={(e)=>handleNavLinkClick(e,"Home")}
            >
              Home
            </NavLink>
            <NavLink
              href="#"
              isActive={activePage === "About"}
              onClick={(e)=>handleNavLinkClick(e,"About")}
            >
              About
            </NavLink>
            <NavLink
              href="#"
              isActive={activePage === "Services"}
              onClick={(e)=>handleNavLinkClick(e,"Services")}
            >
              Work Experience
            </NavLink>
            <NavLink
              href="#"
              isActive={activePage === "Contact"}
              onClick={(e)=>handleNavLinkClick(e,"Contact")}
            >
              Projects
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
