export interface ProcessStep {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    icon: "travel_explore",
    title: "Discovery",
    description:
      "We get an understanding of your goals, branding, and overall vision.",
  },
  {
    id: 2,
    icon: "format_paint",
    title: "Design",
    description: "Present mockups get your insight on design intent and desired features.",
  },
  {
    id: 3,
    icon: "terminal",
    title: "Development",
    description:
      "Website will be developed based on the design you have agreed to.",
  },
  {
    id: 4,
    icon: "rocket_launch",
    title: "Deployment",
    description:
      "Showcase the website once built, and proceed with going live once confirmed to go ahead.",
  },
  {
    id: 5,
    icon: "handshake",
    title: "Handover",
    description:
      "Conduct QA checks, testings and any transferring of ownership (if applicable) as part of the Handover process. The website is officially yours!",
  },
];
