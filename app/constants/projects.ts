export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  clipClass?: string;
  slug?: string;
  isFeatured?: boolean;
  description?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  techStack?: string[];
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    category: "UI/UX",
    title: "By Lia Makeup",
    image: "/assets/images/projects/byLiaMakeup-Hero.jpeg",
    clipClass: "tech-clip-br",
    slug: "by-lia-makeup",
    isFeatured: true,
  },
  {
    id: 2,
    category: "Web3",
    title: "Apex Exchange",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNHXt40HMrgkYxpvdi0C4yslECp6bUntgSX2nhgy4kqkpl9n0jYraIvMWJnAJ_3BSrY-z_Osy0xgsSa1BYJVu_48RUoWWCMkh4pGBqagtMnhnSzOF3CxIBqugYOly3QiNeMV8E_t_1-l-OLxu-7nBQ5ocowSjYjUDzc5J8pHlASSx52zAHQEH5cAZQTGh1EhvLUoazF2PXwCtBV6ZETRRQgf1FFynctqngMhuLxQNLch6D70Efao-GjyEicrNgB6EaIQcTVuqeOIo",
    clipClass: "tech-clip-bl",
    slug: "apex-exchange",
    isFeatured: true,
  },
  {
    id: 3,
    category: "Real Estate",
    title: "Tower Prime",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwQCisqPuLqbMpc1Xbz73mQYnpVHny4rmR5XRe71hwSP1AOlOLu50FwFU4eibJjsLxB4zrMPLYNFA7AkydYO9b6TDJgzN5ffP1dv68v-9cDvNujE9Km97Kx6h6cfNhQ-G90UidO8yZFcz0TrYDykP2WEFDBdIrq5HLzB-vMnZ93_o3huj2PrkVn-0mZIndO-LsmrRtz09jVsvfB-Ly_Qudq3VmF6PdDZcIHuhWth8hDhunMwehM5EN4pD3PxuyozFSCNr3Kz1FT0o",
    clipClass: "tech-clip-tr",
    slug: "tower-prime",
    isFeatured: true,
  },
  {
    id: 4,
    category: "SaaS",
    title: "Flow Systems",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeTvUcXS-2xa6WwkavbM8cAYg4XdtoL-GaRjQGx3WcjU_3R0rR3Y-Si5qy9D216ipak-jCdlz1wS4Z0Ql_H0wFwMBySAHXOmnlTk5dmpgMF4X_xAIpz3WTSYgQg6QMsgpe2PwKjsQo2V8pGVTub-GwIEMmpc7zOXIpfm5fI_hQZMBJ4jyY5ro85-i04s3NGhp-ivWivcCud2JcvjMZdB18wNUCBEGUpudFqmG0HJQ_qLq1tMD8-X2nByY14kixoUER-Oom2S02mX8",
    clipClass: "tech-clip-tl",
    slug: "flow-systems",
    isFeatured: true,
  },
  {
    id: 5,
    category: "Fintech",
    title: "Nova Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    slug: "nova-analytics",
    isFeatured: false,
  },
  {
    id: 6,
    category: "Mobile",
    title: "Vault Mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    slug: "vault-mobile",
    isFeatured: false,
  },
  {
    id: 7,
    category: "AI",
    title: "Neural Net",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    slug: "neural-net",
    isFeatured: false,
  },
  {
    id: 8,
    category: "E-Commerce",
    title: "Cart Logic",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    slug: "cart-logic",
    isFeatured: false,
  },
  {
    id: 9,
    category: "Health",
    title: "MediSync",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    slug: "medisync",
    isFeatured: false,
  },
  {
    id: 10,
    category: "Security",
    title: "Structura",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    slug: "structura",
    isFeatured: false,
  },
];

export const PROJECT_CATEGORIES = ["All", "UI/UX", "Web3", "Fintech", "SaaS", "Mobile", "Health", "Security", "E-Commerce", "Real Estate", "AI"];

export const getFeaturedProjects = () => PROJECTS.filter((p) => p.isFeatured);

export const getProjectsByCategory = (category: string) =>
  category === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === category);

export const getProjectBySlug = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);

export const getRelatedProjects = (currentId: number, limit: number = 3) =>
  PROJECTS.filter((p) => p.id !== currentId).slice(0, limit);
