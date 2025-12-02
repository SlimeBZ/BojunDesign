export type ProjectMediaType = 'video' | 'image';

export type ProjectTag =
  | 'TouchDesigner'
  | 'Audio Reactive'
  | 'Generative'
  | 'Live Performance'
  | 'Installation'
  | 'Collaboration';

export interface ProjectLinkSet {
  fullVideo?: string;
  instagram?: string;
  other?: string;
}

export interface Project {
  slug: string;
  title: string;
  year: number;
  thumbnail: string;
  mediaType: ProjectMediaType;
  mediaUrl: string;
  tags: ProjectTag[];
  shortDescription: string;
  techStack: string[];
  context: string;
  processNotes: string;
  links?: ProjectLinkSet;
}
