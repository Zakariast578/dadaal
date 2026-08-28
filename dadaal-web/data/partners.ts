export interface Partner {
  id: string;
  name: string;
  logo: string;
  url?: string;
}

export const partnersData: Partner[] = [
  {
    id: "1",
    name: "Partner Organization 01",
    logo: "/images/partners/partner-1.jpeg",
    url: "https://example.com",
  },
  {
    id: "2",
    name: "Partner Organization 02",
    logo: "/images/partners/partner-1.jpeg",
    url: "https://example.com",
  },
  {
    id: "3",
    name: "Partner Organization 03",
    logo: "/images/partners/partner-1.jpeg",
    url: "https://example.com",
  },
];