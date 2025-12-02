import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="block border border-neutral-800 hover:border-neutral-500 rounded-2xl overflow-hidden bg-black transition-colors"
      >
        <div className="aspect-[4/3] bg-neutral-900 overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <div className="p-4 sm:p-5 space-y-2">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.1em] text-neutral-400">
            <span>{project.year}</span>
            <div className="flex gap-2 flex-wrap justify-end">
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="border border-neutral-800 px-2 py-1 rounded-full text-[10px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">{project.shortDescription}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
