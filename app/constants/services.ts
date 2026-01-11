export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: 1,
    icon: "terminal",
    title: "Web Development",
    description:
      "We build websites and digital experiences that are easy to use, easy to manage, and built to evolve as your business grows.",
  },
  {
    id: 2,
    icon: "design_services",
    title: "UI/UX Design",
    description:
      "Our interfaces are designed around real users, with thoughtful interactions that encourage engagement and conversion.",
  },
  {
    id: 3,
    icon: "branding_watermark",
    title: "Brand Identity",
    description:
      "We build brand identities that feel intentional, cohesive, and true to your business.",
  },
  {
    id: 4,
    icon: "monitoring",
    title: "SEO & Optimisation",
    description:
      "Data-driven strategies to improve visibility. Technical audits, speed optimisation, and search ranking growth.",
  },
];
