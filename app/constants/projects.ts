export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  clipClass?: string;
  isFeatured?: boolean;
  link: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    category: "Beauty",
    title: "By Lia Makeup",
    image: "/assets/images/projects/byLiaMakeup-Hero.jpeg",
    clipClass: "tech-clip-br",
    isFeatured: true,
    link: "https://by-lia-makeup.vercel.app",
  },
  {
    id: 2,
    category: "Health",
    title: "Physio Phyx",
    image: "/assets/images/projects/PhysioPhyx-hero-WIP.jpg",
    clipClass: "tech-clip-bl",
    isFeatured: true,
    link: "https://physio-phyx.vercel.app/",
  },
];

export const getFeaturedProjects = () => PROJECTS.filter((p) => p.isFeatured);
