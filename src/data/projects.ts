import { Project } from '../types/project';

const projectVideo = (slug: string) =>
  `https://github.com/SlimeBZ/BojunDesign/raw/main/docs/video/${slug}.mp4`;

export const projects: Project[] = [
  {
    slug: 'touch-to-start',
    title: 'Touch to Start',
    year: 2024,
    thumbnail: projectVideo('touch-to-start'),
    mediaType: 'video',
    mediaUrl: projectVideo('touch-to-start'),
    tags: ['Installation'],
    shortDescription: 'Interactive p5.js piece where visitors trigger evolving visuals with touch.',
    techStack: ['p5.js', 'JavaScript'],
    context: 'Final project developed as an interactive kiosk-style experience.',
    processNotes: 'Focused on touch-first interaction and bold typography for gallery environments.',
  },
  {
    slug: 'gold-spirit',
    title: 'Gold Spirit',
    year: 2025,
    thumbnail: projectVideo('gold-spirit'),
    mediaType: 'video',
    mediaUrl: projectVideo('gold-spirit'),
    tags: ['TouchDesigner', 'Generative', 'Web Design'],
    shortDescription: 'TD Music Visualizer made with Particle 3D effect and Audio Interactivity',
    techStack: ['TouchDesigner', 'TOPs', 'TD'],
    context: 'Fill this in Steven!',
    processNotes: 'This is where i describe the processes used (glitch, matrix, blender, etc.)',
    links: {
      fullVideo: 'https://www.youtube.com/watch?v=_SEBO2d2JMI',
    },
  },
  {
    slug: 'sphere-loop',
    title: 'Sphere Loop',
    year: 2025,
    thumbnail: projectVideo('sphere-loop'),
    mediaType: 'video',
    mediaUrl: projectVideo('sphere-loop'),
    tags: ['TouchDesigner', 'Interactive'],
    shortDescription: 'Minimalist TD Music Visualizer made with Audio Interactivity',
    techStack: ['TouchDesigner'],
    context: 'This is where i add context to my work',
    processNotes: 'This is where i describe the processes used (glitch, matrix, blender, etc.)',
  },
];

export const featuredProjects = projects.slice(0, 4);
