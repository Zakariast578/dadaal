"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import { FadeUp } from "@/components/motion/FadeUp";
import {
  Stagger,
  StaggerItem,
} from "@/components/motion/Stagger";

const actions = [
  {
    title: "Become a Mentor",
    description:
      "Share your experience and help someone move forward.",
  },
  {
    title: "Become a Mentee",
    description:
      "Find guidance, knowledge, and a community that supports your growth.",
  },
  {
    title: "Volunteer Your Time",
    description:
      "Contribute your skills, energy, and ideas to Dadaal.",
  },
  {
    title: "Partner With Us",
    description:
      "Collaborate with us to create greater opportunities for young people.",
  },
];

export function ContactSection() {
  return (
    <section
      id="get-involved"
      className="
        relative
        isolate
        overflow-hidden
        bg-dadaal-navy
        py-24
        text-white
        sm:py-28
        lg:py-36
      "
    >
      {/* ============================================================
          BACKGROUND
          ============================================================ */}

      <div
        aria-hidden="true"
        className="
          absolute
          -right-40
          -top-40
          h-96
          w-96
          rounded-full
          bg-dadaal-blue/30
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          -bottom-40
          -left-40
          h-96
          w-96
          rounded-full
          bg-dadaal-green/20
          blur-3xl
        "
      />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.06]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:4rem_4rem]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ============================================================
            HEADER
            ============================================================ */}

        <div className="grid items-end gap-10 lg:grid-cols-12">
          <FadeUp
            delay={0.05}
            distance={20}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-4">
              <span
                className="
                  font-heading
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-dadaal-green
                "
              >
                05
              </span>

              <span className="h-px w-12 bg-white/20" />

              <span
                className="
                  font-heading
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white/60
                "
              >
                Get Involved
              </span>
            </div>

            <h2
              className="
                mt-6
                max-w-4xl
                font-heading
                text-4xl
                font-bold
                leading-[1.05]
                tracking-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Your next step could
              <span className="text-dadaal-green">
                {" "}
                change someone’s story.
              </span>
            </h2>
          </FadeUp>

          <FadeUp
            delay={0.12}
            distance={20}
            className="lg:col-span-4"
          >
            <p className="max-w-md font-sans text-body leading-relaxed text-white/65 lg:ml-auto">
              Whether you want to mentor, learn, volunteer, or
              collaborate, there is a place for you at Dadaal.
            </p>
          </FadeUp>
        </div>

        {/* ============================================================
            MAIN GRID
            ============================================================ */}

        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* ========================================================
              ACTIONS
              ======================================================== */}

          <div className="lg:col-span-7">
            <FadeUp delay={0.15} distance={20}>
              <div className="mb-5 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-dadaal-green" />

                <span
                  className="
                    font-heading
                    text-caption
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-white/70
                  "
                >
                  Choose your path
                </span>
              </div>
            </FadeUp>

            <Stagger
              staggerDelay={0.08}
              delayChildren={0.05}
              className="grid gap-3 sm:grid-cols-2"
            >
              {actions.map((action) => (
                <StaggerItem key={action.title}>
                  <button
                    type="button"
                    className="
                      group
                      flex
                      min-h-[150px]
                      w-full
                      flex-col
                      justify-between
                      rounded-card
                      border
                      border-white/10
                      bg-white/[0.06]
                      p-5
                      text-left
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-dadaal-green/40
                      hover:bg-white/[0.10]
                      hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-dadaal-green
                    "
                  >
                    <div>
                      <h3
                        className="
                          font-heading
                          text-lg
                          font-bold
                          text-white
                        "
                      >
                        {action.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-sm
                          font-sans
                          text-caption
                          leading-relaxed
                          text-white/55
                        "
                      >
                        {action.description}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <span
                        className="
                          font-heading
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-white/40
                          transition-colors
                          group-hover:text-dadaal-green
                        "
                      >
                        Get started
                      </span>

                      <div
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          text-white/50
                          transition-all
                          duration-300
                          group-hover:border-dadaal-green/40
                          group-hover:bg-dadaal-green
                          group-hover:text-white
                        "
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </button>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* ========================================================
              CONTACT CARD
              ======================================================== */}

          <FadeUp
            delay={0.25}
            distance={24}
            className="lg:col-span-5"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-card-lg
                bg-white
                p-7
                text-dadaal-navy
                shadow-[0_30px_80px_rgba(0,0,0,0.25)]
                sm:p-8
              "
            >
              {/* Card glow */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-dadaal-soft-blue
                  blur-3xl
                "
              />

              <div className="relative">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-badge
                    bg-dadaal-soft-blue
                    px-3
                    py-1.5
                    font-heading
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-dadaal-blue
                  "
                >
                  <Mail className="h-3.5 w-3.5" />

                  Contact Dadaal
                </span>

                <h3
                  className="
                    mt-5
                    font-heading
                    text-2xl
                    font-bold
                    text-dadaal-navy
                  "
                >
                  Let's build something meaningful together.
                </h3>

                <p
                  className="
                    mt-3
                    font-sans
                    text-caption
                    leading-relaxed
                    text-dadaal-muted
                  "
                >
                  Have a question, partnership idea, or simply
                  want to learn more about Dadaal? Reach out to us.
                </p>

                {/* Contact details */}
                <div className="mt-7 space-y-3">
                  {/* Email */}
                  <a
                    href="mailto:info@dadaal.org"
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-card
                      border
                      border-dadaal-border
                      bg-dadaal-bg
                      p-3.5
                      transition-colors
                      hover:border-dadaal-blue/30
                      hover:bg-dadaal-soft-blue/40
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-dadaal-soft-blue
                        text-dadaal-blue
                      "
                    >
                      <Mail className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                      <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-dadaal-muted">
                        Email
                      </p>

                      <p className="mt-0.5 truncate font-heading text-sm font-bold text-dadaal-navy">
                        info@dadaal.org
                      </p>
                    </div>

                    <ArrowRight
                      className="
                        ml-auto
                        h-4
                        w-4
                        text-dadaal-muted
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+25261XXXXXXX"
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-card
                      border
                      border-dadaal-border
                      bg-dadaal-bg
                      p-3.5
                      transition-colors
                      hover:border-dadaal-blue/30
                      hover:bg-dadaal-soft-blue/40
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-dadaal-soft-blue
                        text-dadaal-blue
                      "
                    >
                      <Phone className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-dadaal-muted">
                        Phone
                      </p>

                      <p className="mt-0.5 font-heading text-sm font-bold text-dadaal-navy">
                        +252 61 XXX XXXX
                      </p>
                    </div>

                    <ArrowRight
                      className="
                        ml-auto
                        h-4
                        w-4
                        text-dadaal-muted
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </a>

                  {/* Location */}
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-card
                      border
                      border-dadaal-border
                      bg-dadaal-bg
                      p-3.5
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-dadaal-soft-green
                        text-dadaal-green
                      "
                    >
                      <MapPin className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-dadaal-muted">
                        Location
                      </p>

                      <p className="mt-0.5 font-heading text-sm font-bold text-dadaal-navy">
                        Mogadishu, Somalia
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="mailto:info@dadaal.org"
                  className="
                    btn-primary
                    mt-6
                    w-full
                    justify-center
                  "
                >
                  Start a conversation

                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* ============================================================
            FINAL STATEMENT
            ============================================================ */}

        <FadeUp delay={0.3} distance={20}>
          <div className="mt-20 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-heading text-sm font-semibold text-white/50">
                Learn. Connect. Lead. Make an impact.
              </p>

              <a
                href="#about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  font-heading
                  text-sm
                  font-semibold
                  text-white/70
                  transition-colors
                  hover:text-dadaal-green
                "
              >
                Back to beginning

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}