"use client";

import {
  ArrowUpRight,
  Compass,
  Sparkles,
  Target,
} from "lucide-react";

import { FadeUp } from "@/components/motion/FadeUp";
import {
  Stagger,
  StaggerItem,
} from "@/components/motion/Stagger";

export function MissionVisionSection() {
  return (
    <section
      id="mission"
      className="
        relative
        isolate
        overflow-hidden
        border-t
        border-white/10
        bg-dadaal-navy
        py-24
        text-white
        sm:py-28
        lg:py-36
      "
    >
      {/* ============================================================
          BACKGROUND ATMOSPHERE
          ============================================================ */}

      {/* Blue atmospheric glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-dadaal-blue/20
          blur-3xl
        "
      />

      {/* Green atmospheric glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-48
          -left-40
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-dadaal-green/10
          blur-3xl
        "
      />

      {/* Center glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-dadaal-blue/5
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
          bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]
          bg-[size:4rem_4rem]
        "
      />

      {/* Decorative rings */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          top-1/3
          h-72
          w-72
          rounded-full
          border
          border-white/5
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-8
          top-[38%]
          h-48
          w-48
          rounded-full
          border
          border-dadaal-green/10
        "
      />

      {/* ============================================================
          MAIN CONTAINER
          ============================================================ */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ============================================================
            SECTION HEADER
            ============================================================ */}

        <div className="grid items-end gap-8 lg:grid-cols-12">
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
                02
              </span>

              <span className="h-px w-12 bg-white/15" />

              <span
                className="
                  font-sans
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/50
                "
              >
                Our Direction
              </span>
            </div>

            <h2
              className="
                mt-5
                max-w-4xl
                font-heading
                text-4xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              A clear purpose.
              <br />

              <span className="text-gradient">
                A bigger horizon.
              </span>
            </h2>
          </FadeUp>

          <FadeUp
            delay={0.12}
            distance={20}
            className="lg:col-span-4 lg:pb-1"
          >
            <p
              className="
                max-w-md
                font-sans
                text-body
                leading-relaxed
                text-white/55
                lg:ml-auto
              "
            >
              Our mission defines the work we do today.
              Our vision defines the future we are working
              toward together.
            </p>
          </FadeUp>
        </div>

        {/* ============================================================
            MISSION + VISION
            ============================================================ */}

        <Stagger
          staggerDelay={0.12}
          delayChildren={0.08}
          className="
            relative
            mt-16
            grid
            gap-5
            lg:mt-24
            lg:grid-cols-12
            lg:gap-6
          "
        >
          {/* ========================================================
              MISSION
              ======================================================== */}

          <StaggerItem className="lg:col-span-7">
            <article
              className="
                group
                relative
                h-full
                overflow-hidden
                rounded-[1.75rem]
                border
                border-white/10
                bg-white/[0.055]
                p-7
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-dadaal-green/30
                hover:bg-white/[0.075]
                sm:p-9
                lg:p-11
              "
            >
              {/* Card glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-56
                  w-56
                  rounded-full
                  bg-dadaal-green/10
                  blur-3xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Large number */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  right-7
                  top-3
                  font-heading
                  text-[8rem]
                  font-black
                  leading-none
                  text-white/[0.025]
                  sm:right-10
                  sm:text-[10rem]
                "
              >
                01
              </span>

              <div className="relative">

                {/* Label */}
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-dadaal-green/25
                      to-dadaal-green/5
                      text-dadaal-green
                      ring-1
                      ring-dadaal-green/20
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  >
                    <Target className="h-5 w-5" />
                  </div>

                  <div>
                    <p
                      className="
                        font-sans
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-dadaal-green
                      "
                    >
                      Our Purpose
                    </p>

                    <p className="mt-0.5 font-sans text-xs text-white/35">
                      What guides our work
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-10
                    font-heading
                    text-3xl
                    font-bold
                    tracking-tight
                    text-white
                    sm:text-4xl
                  "
                >
                  Mission
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-5
                    max-w-2xl
                    font-sans
                    text-lg
                    leading-relaxed
                    text-white/60
                    sm:text-xl
                  "
                >
                  To empower youth through accessible mentorship,
                  quality education resources, and practical leadership
                  experience.
                </p>

                {/* Bottom line */}
                <div className="mt-10 flex items-center gap-3">
                  <span
                    className="
                      h-1
                      w-10
                      rounded-full
                      bg-dadaal-green
                      transition-all
                      duration-500
                      group-hover:w-16
                    "
                  />

                  <span
                    className="
                      font-sans
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-white/35
                    "
                  >
                    Empowerment through action
                  </span>
                </div>
              </div>
            </article>
          </StaggerItem>

          {/* ========================================================
              CONNECTOR
              ======================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-20
              hidden
              -translate-x-1/2
              -translate-y-1/2
              lg:flex
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-dadaal-navy
                shadow-[0_0_40px_rgba(6,147,227,0.15)]
              "
            >
              <ArrowUpRight className="h-5 w-5 text-white/50" />
            </div>
          </div>

          {/* ========================================================
              VISION
              ======================================================== */}

          <StaggerItem className="lg:col-span-5">
            <article
              className="
                group
                relative
                h-full
                overflow-hidden
                rounded-[1.75rem]
                border
                border-white/10
                bg-gradient-to-br
                from-white/[0.08]
                to-white/[0.035]
                p-7
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-dadaal-blue/30
                hover:shadow-[0_25px_80px_rgba(6,147,227,0.08)]
                sm:p-9
                lg:p-11
              "
            >
              {/* Card glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -right-20
                  h-64
                  w-64
                  rounded-full
                  bg-dadaal-blue/15
                  blur-3xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Large number */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  right-7
                  top-3
                  font-heading
                  text-[8rem]
                  font-black
                  leading-none
                  text-white/[0.025]
                  sm:right-10
                  sm:text-[10rem]
                "
              >
                02
              </span>

              <div className="relative">

                {/* Label */}
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-dadaal-blue/30
                      to-dadaal-blue/5
                      text-dadaal-soft-blue
                      ring-1
                      ring-dadaal-blue/20
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  >
                    <Compass className="h-5 w-5" />
                  </div>

                  <div>
                    <p
                      className="
                        font-sans
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-dadaal-soft-blue
                      "
                    >
                      Our Horizon
                    </p>

                    <p className="mt-0.5 font-sans text-xs text-white/35">
                      Where we are heading
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-10
                    font-heading
                    text-3xl
                    font-bold
                    tracking-tight
                    text-white
                    sm:text-4xl
                  "
                >
                  Vision
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-5
                    font-sans
                    text-lg
                    leading-relaxed
                    text-white/60
                    sm:text-xl
                  "
                >
                  Building a thriving generation of educated,
                  skilled, and community-minded leaders shaping
                  Somalia&apos;s future.
                </p>

                {/* Bottom line */}
                <div className="mt-10 flex items-center gap-3">
                  <span
                    className="
                      h-1
                      w-10
                      rounded-full
                      bg-dadaal-blue
                      transition-all
                      duration-500
                      group-hover:w-16
                    "
                  />

                  <span
                    className="
                      font-sans
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-white/35
                    "
                  >
                    A generation ready to lead
                  </span>
                </div>
              </div>
            </article>
          </StaggerItem>
        </Stagger>

        {/* ============================================================
            BOTTOM STATEMENT
            ============================================================ */}

        <FadeUp delay={0.3} distance={20}>
          <div className="mt-20 lg:mt-28">

            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="mt-8 grid items-center gap-8 lg:grid-cols-12">

              {/* Statement */}
              <div className="lg:col-span-8">
                <div className="flex items-start gap-4">
                  <Sparkles
                    className="
                      mt-1
                      h-5
                      w-5
                      shrink-0
                      text-dadaal-green
                    "
                  />

                  <div>
                    <p
                      className="
                        font-heading
                        text-xl
                        font-semibold
                        leading-relaxed
                        text-white
                        sm:text-2xl
                        lg:text-3xl
                      "
                    >
                      From{" "}
                      <span className="text-dadaal-green">
                        purpose
                      </span>{" "}
                      to{" "}
                      <span className="text-gradient">
                        possibility.
                      </span>
                    </p>

                    <p
                      className="
                        mt-3
                        max-w-2xl
                        font-sans
                        text-sm
                        leading-relaxed
                        text-white/45
                      "
                    >
                      We turn our commitment to young people into
                      practical opportunities that help shape a
                      stronger future.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <a
                  href="#programs"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-3
                    font-sans
                    text-sm
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-dadaal-green/30
                    hover:bg-white/10
                  "
                >
                  See how we work

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
          </div>
        </FadeUp>
      </div>
    </section>
  );
}