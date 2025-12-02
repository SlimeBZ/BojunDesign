import ProjectGrid from '../components/ProjectGrid';

const Projects = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Portfolio</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Projects</h1>
        <p className="text-neutral-400 max-w-3xl leading-relaxed">
          Selected TouchDesigner systems spanning live A/V, installations, and generative studies. Each piece is engineered to
          be responsive, lightweight, and tour-ready.
        </p>
      </div>
      <ProjectGrid />
    </div>
  );
};

export default Projects;
