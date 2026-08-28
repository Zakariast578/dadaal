"use client";

import {
  ArrowUpRight,
  HeartHandshake,
  Sparkles,
  Users,
  Target,
} from "lucide-react";

import { FadeUp } from "@/components/motion/FadeUp";
import {
  Stagger,
  StaggerItem,
} from "@/components/motion/Stagger";

const impactAreas = [
  {
    icon: Users,
    title: "People",
    description:
      "Creating meaningful connections between young people, mentors, and communities.",
  },
  {
    icon: Target,
    title: "Progress",
    description:
      "Turning learning and mentorship into practical steps toward personal and professional growth.",
  },
  {
    icon: HeartHandshake,
    title: "Community",
    description:
      "Building a culture where young people support one another and contribute to positive change.",
  },
];

export function ImpactSection() {
  return (
    <section
      id="impact"
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
          -right-48
          top-20
          h-80
          w-80
          opacity-40
          sm:h-96
          sm:w-96
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          -left-32
          bottom-0
          h-72
          w-72
          rounded-full
          bg-dadaal-soft-green/40
          blur-3xl
        "
      />

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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ============================================================
            HEADER
            ============================================================ */}

        <FadeUp delay={0.05} distance={20}>
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-4">
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
                04
              </span>

              <span className="h-px w-12 bg-dadaal-border" />

              <span className="eyebrow">
                Our Impact
              </span>
            </div>

            <h2
              className="
                heading-section
                mt-6
                leading-[1.05]
              "
            >
              Stories before{" "}
              <span className="text-gradient">
                numbers.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                font-sans
                text-body-lg
                leading-relaxed
                text-dadaal-muted
              "
            >
              We believe meaningful impact starts with people.
              Every connection, learning opportunity, and mentorship
              relationship can become part of a larger story of growth.
            </p>
          </div>
        </FadeUp>

        {/* ============================================================
            FEATURE QUOTE
            ============================================================ */}

        <FadeUp delay={0.15} distance={24}>
          <div className="mx-auto mt-16 max-w-5xl">
            <div
              className="
                relative
                overflow-hidden
                rounded-card-lg
                border
                border-dadaal-border
                bg-white
                p-8
                shadow-card
                sm:p-12
                lg:p-16
              "
            >
              {/* Gradient glow */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-dadaal-soft-blue/70
                  blur-3xl
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-24
                  -left-24
                  h-64
                  w-64
                  rounded-full
                  bg-dadaal-soft-green/50
                  blur-3xl
                "
              />

              <div className="relative">
                {/* Quote mark */}
                <div
                  className="
                    font-heading
                    text-7xl
                    font-black
                    leading-none
                    text-dadaal-blue/15
                    sm:text-8xl
                  "
                >
                  “
                </div>

                <blockquote
                  className="
                    -mt-4
                    max-w-4xl
                    font-heading
                    text-2xl
                    font-bold
                    leading-[1.2]
                    text-dadaal-navy
                    sm:text-3xl
                    lg:text-4xl
                  "
                >
                  Every student has a story.
                  <br className="hidden sm:block" />
                  Every mentor can change one.
                </blockquote>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-px w-10 bg-dadaal-green" />

                  <span
                    className="
                      font-sans
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-dadaal-muted
                    "
                  >
                    The Dadaal philosophy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ============================================================
            IMPACT AREAS
            ============================================================ */}

        <Stagger
          staggerDelay={0.1}
          delayChildren={0.05}
          className="
            mt-8
            grid
            grid-cols-1
            gap-5
            md:grid-cols-3
          "
        >
          {impactAreas.map((item) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.title}>
                <article
                  className="
                    card-premium
                    group
                    h-full
                  "
                >
                  <div
                    className="
                      mb-6
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-dadaal-soft-blue
                      text-dadaal-blue
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3
                    className="
                      font-heading
                      text-xl
                      font-bold
                      text-dadaal-navy
                    "
                  >
                    {item.title}
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
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2">
                    <span className="h-1 w-6 rounded-full bg-dadaal-green transition-all duration-300 group-hover:w-10" />

                    <span
                      className="
                        font-sans
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-dadaal-muted
                      "
                    >
                      Dadaal impact
                    </span>
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

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <Sparkles className="mt-1 h-5 w-5 shrink-0 text-dadaal-green" />

                <p
                  className="
                    max-w-3xl
                    font-heading
                    text-xl
                    font-semibold
                    leading-relaxed
                    text-dadaal-navy
                    sm:text-2xl
                  "
                >
                  The real measure of impact is not only what we
                  achieve, but{" "}
                  <span className="text-gradient">
                    who becomes stronger because we were there.
                  </span>
                </p>
              </div>

              <a
                href="#get-involved"
                className="btn-ghost group shrink-0"
              >
                Be part of the story

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
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