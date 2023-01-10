import Tag from "./Tag";
import { Project } from "../types/types";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className=" min-h-[400px] h-auto px-4 opacity-60 hover:opacity-100 py-4 rounded-lg flex flex-col md:flex-row gap-x-4 items-center shadow-md bg-gray-800 hover:scale-105 duration-300  overflow-hidden transition ease-in-out delay-50 ">
      <div className="w-2/3 h-1/2 md:h-full">
        <img
          className="rounded-t-lg w-full h-full object-contain"
          src={project.image}
          alt={project.title}
        />
      </div>
      <div className="p-4 text-white w-1/3 h-1/2 md:h-full">
        <h2 className="mb-2 text-2xl font-medium  tracking-tight ">
          {project.title}
        </h2>
        <p className="mb-3 font-body text-sm font-normal text-gray-400">
          {project.description.substring(0, 200)} .....{" "}
        </p>
        <a target="_blank" href={project.repoUrl}>
          {project.repoUrl}
        </a>
        <p>{project.deployUrl || "Not deployed yet"}</p>
        {project.tags.map((tag) => {
          return <Tag tag={tag} key={tag} />;
        })}
      </div>
    </div>
  );
};
export default ProjectCard;
