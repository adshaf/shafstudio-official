export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  clipClass?: string;
  isFeatured?: boolean;
  link: string;
  status: "live" | "sample" | "wip" 
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
    status: "live"
  },
  {
    id: 2,
    category: "Health",
    title: "Physio Phyx",
    image: "/assets/images/projects/physiophyx-hero.png",
    clipClass: "tech-clip-bl",
    isFeatured: true,
    link: "https://physio-phyx.vercel.app/",
    status: "wip"
  },
  {
    id: 3,
    category: "Videography",
    title: "Motion Showcase",
    image: "/assets/images/projects/videography-website-hero.jpg",
    clipClass: "tech-clip-tr",
    isFeatured: true,
    link: "https://videography-website.vercel.app/",
    status: "sample"
  },
];

export const getFeaturedProjects = () => PROJECTS.filter((p) => p.isFeatured);
