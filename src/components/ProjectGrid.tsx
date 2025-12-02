import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  limit?: number;
}

const ProjectGrid = ({ limit }: ProjectGridProps) => {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {list.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectGrid;
