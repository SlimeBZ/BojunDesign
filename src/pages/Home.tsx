import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { featuredProjects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const textContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const textItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Home = () => {
  return (
    <div className="space-y-16">
      <motion.section
        className="space-y-8"
        variants={textContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-4">
          <motion.p variants={textItem} className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            TouchDesigner visuals / Shanghai
          </motion.p>
          <motion.h1
            variants={textItem}
            className="text-4xl md:text-5xl font-semibold leading-tight text-white max-w-3xl"
          >
            Bojun Zhang — audiovisual systems crafted for clubs, installations, and live performance.
          </motion.h1>
          <motion.p variants={textItem} className="text-neutral-400 max-w-2xl leading-relaxed">
            I design monochrome-forward environments that listen to sound, respond to gesture, and scale across LED walls,
            projection, and bespoke stage builds. Built in TouchDesigner with a love for clarity and restraint.
          </motion.p>
        </div>
        <motion.div variants={textItem} className="flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="border border-neutral-200 text-black bg-neutral-100 hover:bg-white px-4 py-2 rounded-md uppercase text-xs tracking-[0.16em] transition-colors"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="border border-neutral-700 text-neutral-100 hover:border-neutral-300 px-4 py-2 rounded-md uppercase text-xs tracking-[0.16em] transition-colors"
          >
            Contact
          </Link>
        </motion.div>
        <motion.div
          variants={textItem}
          className="border border-neutral-900 rounded-3xl p-6 md:p-10 bg-gradient-to-br from-neutral-950 to-black"
        >
          <div className="text-sm text-neutral-400 max-w-3xl leading-relaxed">
            Minimal, high-contrast visuals built with custom GLSL, CHOP-driven dynamics, and procedural geometry. I focus on
            responsive systems that translate music and movement into precise, architectural motion.
          </div>
        </motion.div>
      </motion.section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Selected works</h2>
          <Link to="/projects" className="text-sm text-neutral-400 hover:text-white transition-colors">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
