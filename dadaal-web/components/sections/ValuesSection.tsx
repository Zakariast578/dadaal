"use client";

import {
  Handshake,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { FadeUp } from "@/components/motion/FadeUp";
import {
  Stagger,
  StaggerItem,
} from "@/components/motion/Stagger";

const valuesData = [
  {
    number: "01",
    title: "Integrity",
    desc: "Honesty and transparency in every mentorship relationship.",
    icon: ShieldCheck,
    accent: "blue",
    label: "Trust",
  },
  {
    number: "02",
    title: "Leadership",
    desc: "Empowering young people to take initiative and create change.",
    icon: TrendingUp,
    accent: "green",
    label: "Ownership",
  },
  {
    number: "03",
    title: "Collaboration",
    desc: "Working together with community partners and institutions.",
    icon: Handshake,
    accent: "blue",
    label: "Together",
  },
  {
    number: "04",
    title: "Innovation",
    desc: "Using modern tools and approaches for real-world impact.",
    icon: Lightbulb,
    accent: "green",
    label: "Possibility",
  },
];

export function ValuesSection() {
  return (
    <section
      id="values"
      className="
        relative
        isolate
        overflow-hidden
        border-t
        border-dadaal-border
        bg-dadaal-bg
        py-24
        sm:py-28
        lg:py-36
      "
    >
      {/* ============================================================
          BACKGROUND ATMOSPHERE
          ============================================================ */}

      <div
        aria-hidden="true"
        className="
          decor-blob
          -left-48
          top-16
          h-80
          w-80
          opacity-35
          sm:h-96
          sm:w-96
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-96
          w-96
          rounded-full
          bg-dadaal-soft-green/30
          blur-3xl
        "
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-30
          bg-[linear-gradient(to_right,#0b5cab06_1px,transparent_1px),linear-gradient(to_bottom,#0b5cab06_1px,transparent_1px)]
          bg-[size:4rem_4rem]
        "
      />

      {/* ============================================================
          CONTAINER
          ============================================================ */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ============================================================
            HEADER
            ============================================================ */}

        <div className="grid items-end gap-8 lg:grid-cols-12">
          <FadeUp
            delay={0.05}
            distance={20}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4">
              <span
                className="
                  font-heading
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-dadaal-blue
                "
              >
                03
              </span>

              <span className="h-px w-12 bg-dadaal-border" />

              <span className="eyebrow">
                What Drives Us
              </span>
            </div>

            <h2
              className="
                heading-section
                mt-5
                max-w-3xl
                leading-[1.05]
              "
            >
              Principles that shape{" "}
              <span className="text-gradient">
                how we lead.
              </span>
            </h2>
          </FadeUp>

          <FadeUp
            delay={0.12}
            distance={20}
            className="lg:col-span-5 lg:pb-1"
          >
            <p
              className="
                max-w-md
                font-sans
                text-body
                leading-relaxed
                text-dadaal-muted
                lg:ml-auto
              "
            >
              Our values are more than words on a page. They guide
              how we build relationships, design opportunities, and
              work alongside young people and communities.
            </p>
          </FadeUp>
        </div>

        {/* ============================================================
            VALUES GRID
            ============================================================ */}

        <Stagger
          staggerDelay={0.1}
          delayChildren={0.08}
          className="
            mt-16
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:mt-20
            lg:grid-cols-4
          "
        >
          {valuesData.map((value) => {
            const Icon = value.icon;

            const isGreen = value.accent === "green";

            return (
              <StaggerItem key={value.number}>
                <article
                  className={`
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-dadaal-border
                    bg-white/80
                    p-6
                    shadow-sm
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-card
                    ${
                      isGreen
                        ? "hover:border-dadaal-green/30"
                        : "hover:border-dadaal-blue/30"
                    }
                  `}
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className={`
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      h-32
                      w-32
                      rounded-full
                      blur-3xl
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      ${
                        isGreen
                          ? "bg-dadaal-soft-green"
                          : "bg-dadaal-soft-blue"
                      }
                    `}
                  />

                  {/* Large background number */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      right-4
                      top-0
                      font-heading
                      text-[7rem]
                      font-black
                      leading-none
                      text-dadaal-navy/[0.035]
                      transition-transform
                      duration-700
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  >
                    {value.number}
                  </span>

                  <div className="relative flex h-full flex-col">

                    {/* Top row */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          transition-all
                          duration-500
                          group-hover:scale-105
                          ${
                            isGreen
                              ? "bg-dadaal-soft-green text-dadaal-green"
                              : "bg-dadaal-soft-blue text-dadaal-blue"
                          }
                        `}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <span
                        className={`
                          rounded-full
                          border
                          px-2.5
                          py-1
                          font-sans
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          ${
                            isGreen
                              ? "border-dadaal-green/15 bg-dadaal-soft-green/50 text-dadaal-green"
                              : "border-dadaal-blue/15 bg-dadaal-soft-blue/50 text-dadaal-blue"
                          }
                        `}
                      >
                        {value.label}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-8">
                      <span
                        className={`
                          font-heading
                          text-[10px]
                          font-bold
                          tracking-[0.15em]
                          ${
                            isGreen
                              ? "text-dadaal-green"
                              : "text-dadaal-blue"
                          }
                        `}
                      >
                        {value.number}
                      </span>

                      <h3
                        className="
                          mt-2
                          font-heading
                          text-2xl
                          font-bold
                          tracking-tight
                          text-dadaal-navy
                        "
                      >
                        {value.title}
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
                        {value.desc}
                      </p>
                    </div>

                    {/* Bottom indicator */}
                    <div className="mt-auto pt-8">
                      <div className="flex items-center gap-3">
                        <span
                          className={`
                            h-1
                            w-6
                            rounded-full
                            transition-all
                            duration-500
                            group-hover:w-12
                            ${
                              isGreen
                                ? "bg-dadaal-green"
                                : "bg-dadaal-blue"
                            }
                          `}
                        />

                        <span
                          className="
                            font-sans
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.14em]
                            text-dadaal-muted
                          "
                        >
                          Dadaal principle
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* ============================================================
            BOTTOM STATEMENT
            ============================================================ */}

        <FadeUp delay={0.25} distance={20}>
          <div className="mt-20 lg:mt-28">
            <div className="divider-gradient mb-8 opacity-70" />

            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="flex items-start gap-4">
                  <div
                    className="
                      mt-1
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-dadaal-navy
                      text-white
                    "
                  >
                    <span className="font-heading text-xs font-bold">
                      D
                    </span>
                  </div>

                  <div>
                    <p
                      className="
                        font-heading
                        text-xl
                        font-semibold
                        leading-relaxed
                        text-dadaal-navy
                        sm:text-2xl
                        lg:text-3xl
                      "
                    >
                      What we believe shapes{" "}
                      <span className="text-gradient">
                        what we build.
                      </span>
                    </p>

                    <p
                      className="
                        mt-3
                        max-w-2xl
                        font-sans
                        text-sm
                        leading-relaxed
                        text-dadaal-muted
                      "
                    >
                      These principles keep us grounded while
                      encouraging us to think bigger, work together,
                      and create meaningful opportunities for young
                      people.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <a
                  href="#get-involved"
                  className="
                    btn-ghost
                    group
                    inline-flex
                    items-center
                    gap-2
                  "
                >
                  Grow with us

                  <span
                    className="
                      inline-flex
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}