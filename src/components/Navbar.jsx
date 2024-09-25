import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="bg-[#1f2028] top-0 left-0 flex justify-between items-center px-5 text-white w-full h-20 fixed">
      <div>
        <h1 className="font-signature text-5xl ml-3 great-vibes-regular">Vinayak</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            className="px-4 cursor-pointer font-medium capitalize text-gray-500 hover:scale-105 duration-200 hover:text-gray-400"
            key={id}
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="pr-5 text-gray-500 cursor-pointer z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-dvh bg-gradient-to-b from-black to-gray-800 text-gray-500  ">
          {links.map(({ id, link }) => (
            <li
              className="px-4 text-3xl cursor-pointer capitalize py-6 hover:text-gray-400"
              key={id}
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;