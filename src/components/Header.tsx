import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeSVG from "./DarkModeSVG";
import LightModeSVG from "./LightModeSVG";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <header className="flex flex-col md:flex-row lg:flex-row gap-y-4 bg-gray-50 justify-around items-center p-3 dark:bg-neutral-900 ">
      <Link to={"/"}>
        <h1 className=" text-3xl  dark:text-white tracking-tighter">
          DANIEL ALEXANDER
        </h1>
      </Link>
      <nav>
        <ul className="flex items-center gap-x-3 font-light lg:font-normal text-gray-500 text-lg dark:text-yellow-50">
          <li>
            <Link to={"/about"}>ABOUT</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>PORTFOLIO</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
          <button
            className="flex items-center ml-2 justify-center "
            aria-label={theme}
            onClick={handleClick}
          >
            {theme === "dark" ? <DarkModeSVG /> : <LightModeSVG />}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
