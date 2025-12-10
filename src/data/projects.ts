import { Project } from '../types/project';

const thumb = (label: string) => `https://dummyimage.com/960x540/000/ffffff&text=${encodeURIComponent(label)}`;
const loop = (id: string) => `https://cdn.coverr.co/videos/${id}/1080p.mp4`;

export const projects: Project[] = [
  {
  slug: 'touch-to-start',
  title: 'Touch to Start',
  year: 2024,
  thumbnail: thumb('Touch to Start'),
  mediaType: 'image', // just to satisfy the current type
  mediaUrl: thumb('Touch to Start'),
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
    thumbnail: thumb('Gold Spirit'),
    mediaType: 'web',
    mediaUrl: 'https://slimebz.github.io/p5js-finals/',
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
    thumbnail: thumb('Sphere Loop'),
    mediaType: 'image',
    mediaUrl: thumb('Monolith Kinetics — Still'),
    tags: ['TouchDesigner', 'Interactive'],
    shortDescription: 'Minimalist TD Music Visualizer made with Audio Interactivity',
    techStack: ['TouchDesigner'],
    context: 'This is where i add context to my work',
    processNotes: 'This is where i describe the processes used (glitch, matrix, blender, etc.)',
  },
];

export const featuredProjects = projects.slice(0, 4);
