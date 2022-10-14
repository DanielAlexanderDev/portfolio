import { Link } from "react-router-dom";
import VerticalCarousel from "./VerticalCarousel";

const PortfolioOverview = () => {
  return (
    <div className="flex flex-col md:flex-row dark:bg-[#FDF2F2]  dark:text-black text-white items-center justify-evenly md:py-12 my-8">
      <div className="w-1/3 min-w-[350px] text-center p-8">
        <h3 className="text-2xl font-semibold">My Projects</h3>
        <p className="font-light text-lg">
          These are my projects, here asdqweoi Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatum sequi mollitia ea
          perspiciatis nemo et rem quibusdam reprehenderit maxime sit sapiente
          blanditiis, quo nihil tenetur. Id doloremque ad vitae maiores?
        </p>
        <Link to={"/portfolio"}>
          <button className="hover:bg-[#e7e1c2] py-2 px-3 rounded-md my-5 bg-[#dad6c5]">
            View Full Portfolio
          </button>
        </Link>
      </div>
      <VerticalCarousel />
    </div>
  );
};
export default PortfolioOverview;
