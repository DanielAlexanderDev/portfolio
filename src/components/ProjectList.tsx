import data from "../portfolio.json";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div className=" container mx-auto p-4">
      <div className="flex flex-col gap-4">
        {data.repos.map((project) => {
          //@ts-ignore
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};
export default ProjectList;
