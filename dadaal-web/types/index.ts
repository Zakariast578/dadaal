export interface Program {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
}

export interface EventItem {
  id: string;
  type: string;
  title: string;
  date: string;
  location: string;
  image: string;
  status: "Upcoming" | "Completed" | "Registration Open";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}