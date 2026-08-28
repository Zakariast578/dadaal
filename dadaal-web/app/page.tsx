import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { MissionVisionSection } from "@/components/sections/MissionVisionSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { eventsData } from "@/data/events";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-dadaal-bg">
      {/* ============================================================
          01 — HERO
          First impression, positioning, primary CTA
          ============================================================ */}
      <Hero />

      {/* ============================================================
          02 — ABOUT
          Who Dadaal is and why it exists
          ============================================================ */}
      <AboutSection />

      {/* ============================================================
          03 — PROGRAMS
          What Dadaal actually does
          ============================================================ */}
      <ProgramsSection />

      {/* ============================================================
          04 — EVENTS
          Real-world activity and community presence
          ============================================================ */}
      <EventsSection events={eventsData} />

      {/* ============================================================
          05 — MISSION & VISION
          Purpose + long-term direction
          ============================================================ */}
      <MissionVisionSection />

      {/* ============================================================
          06 — VALUES
          Principles behind the work
          ============================================================ */}
      <ValuesSection />

      {/* ============================================================
          07 — IMPACT
          Why the work matters
          ============================================================ */}
      <ImpactSection />

      {/* ============================================================
          08 — TEAM
          People behind the mission
          ============================================================ */}
      <TeamSection />

      {/* ============================================================
          09 — PARTNERS
          Organizations and institutions in the ecosystem
          ============================================================ */}
      <PartnersSection />

      {/* ============================================================
          10 — GET INVOLVED
          Final conversion / action section
          ============================================================ */}
      <ContactSection />

      {/* ============================================================
          11 — FOOTER
          Navigation, contact, legal, social
          ============================================================ */}
      <FooterSection />
    </main>
  );
}