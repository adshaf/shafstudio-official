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

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 1, icon: "public", href: "#", label: "Twitter" },
  { id: 2, icon: "chat_bubble", href: "#", label: "LinkedIn" },
  { id: 3, icon: "share", href: "#", label: "GitHub" },
];
