import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Dadaal | Youth Leadership & Mentorship",
  description:
    "Dadaal empowers young Somalis through mentorship, leadership, skills development, and community opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}