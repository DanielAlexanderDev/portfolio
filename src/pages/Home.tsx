import TechList from "../components/TechsList";
import Hero from "../components/Hero";
import PortfolioOverview from "../components/PortfolioOverview";
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

const Home = () => {
  return (
    <main className="dark:bg-gradient-to-r from-zinc-900 via-black to-zinc-900 bg-white dark:text-white">
      <div className={`flex flex-col items-center `}>
        <Hero />
        <div className="flex flex-col md:flex-row md:justify-evenly w-full flex-wrap items-center justify-center gap-x-3 my-4">
          <div className=" flex justify-center items-center min-w-[350px] w-1/4 my-8 ">
            <ul className="dark:text-white text-center font-light text-2xl ">
              <li>
                <p>Junior Web Developer</p>
              </li>
              <li>
                <p>Self-taught</p>
              </li>
              <li>
                <p>Learning, growing and solving</p>
              </li>
            </ul>
          </div>
          <p className="w-1/4 text-center min-w-[350px] my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit
            soluta, sed ipsam libero est dolorum, eveniet rem temporibus ea
            excepturi magnam veritatis perspiciatis quisquam placeat labore
            officia vitae voluptate?
          </p>
          <TechList />
        </div>
        <PortfolioOverview />
        <div className=" dark:text-white">
          <h3 className="font-semibold text-2xl text-center">CONTACT</h3>
          <div className="flex justify-center gap-x-3 my-5">
            <SiLinkedin size={"3em"} />
            <SiInstagram size={"3em"} />
            <SiGithub size={"3em"} />
            <SiTwitter size={"3em"} />
          </div>
          <div>
            <form className="">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Type your email"
              />
              <textarea
                className="text-black"
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Type your message"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
