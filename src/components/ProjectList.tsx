import data from "../portfolio.json";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div className=" container mx-auto p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-4 place-content-center">
        {data.repos.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};
export default ProjectList;
