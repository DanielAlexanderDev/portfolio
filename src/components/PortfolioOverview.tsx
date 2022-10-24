import React, { Suspense } from "react";
import { Link } from "react-router-dom";

const LazyCarousel = React.lazy(() => import("./VerticalCarousel"));

const PortfolioOverview = () => {
  return (
    <div className="flex flex-col md:flex-row  dark:bg-[#FDF2F2]  dark:text-black text-white items-center justify-evenly md:py-12 my-8">
      <div className="w-1/3 min-w-[350px] text-center p-8 animate-fade-in">
        <h3 className="text-2xl font-semibold mb-8">My Projects</h3>
        <p className="font-light text-lg">
          As a frontend developer there is no better way to grow than doing
          projects and applying what we have learned.
          <br />
          These are my projects, here you can see my work and technical
          information of each project. Hope you find it usefull :)
        </p>
        <Link className="mt-14" to={"/portfolio"}>
          <button className="hover:bg-[#e7e1c2] py-2 px-3 rounded-md mt-8 bg-[#dad6c5]  ">
            View Full Portfolio
          </button>
        </Link>
      </div>
      <Suspense>
        <LazyCarousel />
      </Suspense>
    </div>
  );
};
export default PortfolioOverview;
