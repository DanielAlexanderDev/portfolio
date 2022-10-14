import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiGit,
  SiStyledcomponents,
} from "react-icons/si";
import ReactTooltip from "react-tooltip";

const TechsList = () => {
  return (
    <div className="min-w-[360px] md:w-1/4 my-8 ">
      <p className="text-center tracking-normal text-3xl font-normal text-[#4eff95]">
        Main Techs
      </p>
      <div className="p-5 flex flex-wrap items-center justify-center gap-2 ">
        <>
          <SiJavascript data-tip data-for="js" size={"3em"} />
          <ReactTooltip
            id="js"
            effect="solid"
            backgroundColor="white"
            textColor="black"
          >
            Javascript
          </ReactTooltip>
        </>
        <>
          <SiReact data-tip data-for="react" size={"3em"} />
          <ReactTooltip
            id="react"
            effect="solid"
            backgroundColor="white"
            textColor="black"
          >
            ReactJs
          </ReactTooltip>
        </>
        <>
          <SiTypescript data-tip data-for="ts" size={"3em"} />
          <ReactTooltip
            id="ts"
            effect="solid"
            backgroundColor="white"
            textColor="black"
          >
            Typescript
          </ReactTooltip>
        </>
        <>
          <SiHtml5 data-tip data-for="html" size={"3em"} />
          <ReactTooltip
            id="html"
            effect="solid"
            backgroundColor="white"
            textColor="black"
          >
            HTML
          </ReactTooltip>
        </>
        <>
          <SiCss3 data-tip data-for="css" size={"3em"} />
          <ReactTooltip
            id="css"
            effect="solid"
            backgroundColor="white"
            textColor="black"
          >
            CSS
          </ReactTooltip>
        </>
        <>
          <SiNodedotjs data-tip data-for="node" size={"3em"} />
          <ReactTooltip
            id="node"
            effect="solid"
            backgroundColor="white"
            textColor="black"
          >
            NodeJs
          </ReactTooltip>
        </>
      </div>
      <p className="text-center text-2xl font-light text-[#ff6da0]">
        Basic knowledge techs
      </p>
      <div className="p-5 flex dark:text-[#FEFBE8] text-gray-600 items-center justify-center gap-2">
        <SiMongodb size={"2.2em"} />
        <SiMysql size={"2.2em"} />
        <SiTailwindcss size={"2.2em"} />
        <SiGit size={"2.2em"} />
        <SiStyledcomponents size={"2.2em"} />
      </div>
    </div>
  );
};
export default TechsList;
