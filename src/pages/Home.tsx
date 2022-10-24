import TechList from "../components/TechsList";
import Hero from "../components/Hero";
import PortfolioOverview from "../components/PortfolioOverview";
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";
import CV from "../Daniel-Llumiquinga-CV.pdf";

const Home = () => {
  return (
    <main className="dark:bg-gradient-to-r from-zinc-900 via-black to-zinc-900 bg-white dark:text-white">
      <div className={`flex flex-col items-center `}>
        <Hero />
        <div className="flex flex-col md:flex-row md:justify-evenly w-full flex-wrap items-center justify-center gap-x-3">
          <div className=" flex justify-center items-center min-w-[350px] w-1/4 my-8 ">
            <ul className="dark:text-white text-center font-light text-2xl ">
              <li>
                <p>Junior Web Developer</p>
              </li>
              <li>
                <p>Self-taught</p>
              </li>
              <li>
                <p>Ready to work</p>
              </li>
            </ul>
          </div>
          <div className="w-1/4 min-w-[350px] my-8 flex flex-col items-center">
            <q className="italic text-xl">Learning, growing and solving</q>
          </div>
          <TechList />
        </div>
        <button className="bg-[#FEFBE8] rounded-md text-black py-2 px-3 mb-5">
          Download CV
        </button>

        <PortfolioOverview />
        <div className=" dark:text-white w-full">
          <h3 className="font-semibold text-2xl text-center">Contact</h3>
          <div className="flex justify-around items-center w-full flex-wrap">
            <div className="flex justify-center gap-x-3 my-5 text-[#FEFBE8]">
              <SiLinkedin size={"2.4em"} />
              <SiInstagram size={"2.4em"} />
              <SiGithub size={"2.4em"} />
              <SiTwitter size={"2.4em"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
