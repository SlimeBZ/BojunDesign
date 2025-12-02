import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import VideoLoop from '../components/VideoLoop';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();

  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug]);

  if (!project) {
    return (
      <div className="space-y-4">
        <p className="text-neutral-400">Project not found.</p>
        <Link to="/projects" className="underline text-neutral-200">Back to projects</Link>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-10">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{project.year}</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-white">{project.title}</h1>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-neutral-300">
          {project.tags.map((tag) => (
            <span key={tag} className="border border-neutral-700 px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>

      <div className="border border-neutral-900 rounded-3xl overflow-hidden bg-black">
        {project.mediaType === 'video' ? (
          <VideoLoop src={project.mediaUrl} className="w-full h-full" />
        ) : (
          <img src={project.mediaUrl} alt={project.title} className="w-full h-full object-cover" />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-neutral-200">
        <div className="md:col-span-3 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-white">Overview</h2>
            <p className="text-neutral-400 leading-relaxed">{project.shortDescription}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm uppercase tracking-[0.14em] text-neutral-300">Context</h3>
            <p className="text-neutral-400 leading-relaxed">{project.context}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm uppercase tracking-[0.14em] text-neutral-300">Process</h3>
            <p className="text-neutral-400 leading-relaxed">{project.processNotes}</p>
          </div>
          {project.links && (
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-[0.14em] text-neutral-300">Links</h3>
              <div className="flex gap-4 flex-wrap text-neutral-200">
                {project.links.fullVideo && (
                  <a href={project.links.fullVideo} target="_blank" rel="noreferrer" className="underline">
                    Full video
                  </a>
                )}
                {project.links.instagram && (
                  <a href={project.links.instagram} target="_blank" rel="noreferrer" className="underline">
                    Instagram
                  </a>
                )}
                {project.links.other && (
                  <a href={project.links.other} target="_blank" rel="noreferrer" className="underline">
                    More info
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="md:col-span-2 space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm uppercase tracking-[0.14em] text-neutral-300">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="border border-neutral-700 px-3 py-1 rounded-full text-xs text-neutral-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
