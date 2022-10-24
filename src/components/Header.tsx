import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row lg:flex-row gap-y-4 bg-gray-50 justify-around items-center p-3 dark:bg-neutral-900 ">
      <NavLink to={"/"}>
        <h1 className=" text-3xl dark:text-white  tracking-tighter">
          DANIEL ALEXANDER
        </h1>
      </NavLink>
      <nav>
        <ul className="flex items-center gap-x-3 font-light lg:font-normal text-gray-500 text-lg dark:text-yellow-50">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white underline " : "dark:text-zinc-300"
              }
              to={"/about"}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white underline " : "dark:text-zinc-300"
              }
              to={"/portfolio"}
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white underline " : "dark:text-zinc-300"
              }
              to={"/contact"}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
