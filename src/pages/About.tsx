import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">About</p>
      <h1 className="text-3xl md:text-4xl font-semibold text-white">Bojun Zhang</h1>
      <div className="space-y-4 text-neutral-400 leading-relaxed max-w-3xl">
        <p>
          I design black-and-white, typography-led visual systems using TouchDesigner. My practice centers on creating responsive
          environments for clubs, installations, and performances where light, sound, and spatial rhythm move together.
        </p>
        <p>
          My toolset is rooted in TOPs/CHOPs, GLSL shaders, Python automation, and hardware integrations (DMX, OSC, MIDI). I build
          custom operators to keep pipelines lightweight and resilient for touring contexts.
        </p>
        <p>
          Recent collaborations include kinetic LED monoliths for architectural lobbies, audio-reactive scenography for modular
          synth artists, and multi-surface projection design for contemporary dance. Minimal palettes, sharp contrast, and precise
          motion are my constants.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
