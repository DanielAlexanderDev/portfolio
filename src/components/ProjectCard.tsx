import Tag from "./Tag";
import SvgComponent from "./GithubSVG";

export interface Project {
  id: number;
  url: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
}

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="max-w-sm  bg-white rounded-lg  shadow-md dark:bg-gray-800  overflow-hidden">
      <div className="h-56">
        <img
          className="rounded-t-lg w-full h-full object-cover"
          src={project.image}
          alt=""
        />
      </div>
      <div className="p-4">
        <h2 className="mb-2 text-2xl font-medium  tracking-tight text-gray-900 dark:text-white">
          {project.title}
        </h2>
        <p className="mb-3 font-body text-sm font-normal text-gray-700 dark:text-gray-400">
          {project.description.substring(0, 200)} .....
        </p>

        {project.tags.map((tag) => {
          return <Tag tag={tag} key={tag} />;
        })}
      </div>
    </div>
  );
};
export default ProjectCard;
