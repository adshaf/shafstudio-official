export interface FooterLink {
  id: number;
  label: string;
  href: string;
}

export interface SocialLink {
  id: number;
  icon: string;
  href: string;
  label: string;
}

export const FOOTER_LINKS: FooterLink[] = [
  { id: 1, label: "Privacy Policy", href: "/privacy" },
  { id: 2, label: "Terms of Service", href: "/terms" },
];
