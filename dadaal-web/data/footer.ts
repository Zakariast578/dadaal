export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSectionData {
  title: string;
  links: FooterLink[];
}

export const footerNavigation: FooterSectionData[] = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Programs", href: "#programs" },
      { label: "Upcoming Events", href: "#events" },
      { label: "Impact", href: "#impact" },
    ],
  },
  {
    title: "Organization",
    links: [
      { label: "Our Team", href: "#team" },
      { label: "Partners", href: "#partners" },
      { label: "Get Involved", href: "#get-involved" },
      { label: "Contact", href: "#get-involved" },
    ],
  },
];

export const socialLinks = [
  { platform: "Twitter / X", href: "https://x.com", icon: "twitter" },
  { platform: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { platform: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { platform: "Instagram", href: "https://instagram.com", icon: "instagram" },
];