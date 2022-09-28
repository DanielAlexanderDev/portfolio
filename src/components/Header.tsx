import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row lg:flex-row gap-y-4 justify-around items-center p-3 bg-neutral-900 ">
      <Link to={"/"}>
        <h1 className=" text-3xl text-white tracking-tighter">
          DANIEL ALEXANDER
        </h1>
      </Link>
      <nav>
        <ul className="flex items-center gap-x-3 font-light lg:font-normal text-lg text-yellow-50">
          <li>
            <Link to={"/about"}>ABOUT</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>PORTFOLIO</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
