"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Sparkles,
  Users,
  Target,
} from "lucide-react";

import { FadeUp } from "@/components/motion/FadeUp";
import { Reveal } from "@/components/motion/Reveal";
import {
  Stagger,
  StaggerItem,
} from "@/components/motion/Stagger";

export function Hero() {
  return (
    <section
      id="hero"
      className="
        surface-gradient-soft
        relative
        isolate
        min-h-[100svh]
        overflow-hidden
      "
    >
      {/* ============================================================
          ATMOSPHERE
          ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        {/* Premium grid */}
        <div
          className="
            absolute
            inset-0
            opacity-70
            bg-[linear-gradient(to_right,#0b5cab08_1px,transparent_1px),linear-gradient(to_bottom,#0b5cab08_1px,transparent_1px)]
            bg-[size:4rem_4rem]
          "
        />

        {/* Top blue atmosphere */}
        <div
          className="
            absolute
            -right-32
            -top-40
            h-[620px]
            w-[620px]
            rounded-full
            bg-dadaal-blue/10
            blur-3xl
          "
        />

        {/* Bottom green atmosphere */}
        <div
          className="
            absolute
            -bottom-48
            -left-40
            h-[520px]
            w-[520px]
            rounded-full
            bg-dadaal-green/10
            blur-3xl
          "
        />

        {/* Center light */}
        <div
          className="
            absolute
            left-[45%]
            top-[35%]
            h-[280px]
            w-[280px]
            rounded-full
            bg-white/70
            blur-3xl
          "
        />
      </div>

      {/* ============================================================
          DECORATIVE ELEMENTS
          ============================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          top-28
          -z-10
          h-72
          w-72
          rounded-full
          border-[18px]
          border-dadaal-blue/5
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          left-[-5rem]
          -z-10
          h-64
          w-64
          rounded-full
          border-[16px]
          border-dadaal-green/5
        "
      />

      {/* ============================================================
          MAIN CONTAINER
          ============================================================ */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[100svh]
          max-w-7xl
          items-center
          px-6
          pb-24
          pt-32
          sm:px-8
          lg:px-8
          lg:pb-28
          lg:pt-36
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-16
            lg:grid-cols-12
            lg:gap-14
          "
        >
          {/* ========================================================
              LEFT — EDITORIAL CONTENT
              ======================================================== */}

          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <FadeUp delay={0.04} distance={16}>
              <div className="eyebrow">
                <Sparkles className="h-3.5 w-3.5" />

                <span>Youth • Leadership • Opportunity</span>
              </div>
            </FadeUp>

            {/* Heading */}
            <FadeUp delay={0.10} distance={26}>
              <h1
                className="
                  heading-hero
                  mt-6
                  max-w-4xl
                "
              >
                Empowering the next generation of{" "}
                <span className="text-gradient">
                  Somali leaders.
                </span>
              </h1>
            </FadeUp>

            {/* Accent */}
            <FadeUp delay={0.16} distance={18}>
              <div className="mt-7 flex items-center gap-3">
                <span className="h-[3px] w-16 rounded-full bg-dadaal-blue" />

                <span className="h-[3px] w-8 rounded-full bg-dadaal-green" />

                <span className="ml-1 text-[10px] font-bold uppercase tracking-[0.2em] text-dadaal-muted">
                  Dadaal
                </span>
              </div>
            </FadeUp>

            {/* Description */}
            <FadeUp delay={0.22} distance={20}>
              <p
                className="
                  mt-7
                  max-w-2xl
                  font-sans
                  text-body-lg
                  leading-relaxed
                  text-dadaal-muted
                "
              >
                We connect ambitious young Somalis with mentorship,
                practical skills, meaningful networks, and real-world
                opportunities to turn potential into lasting impact.
              </p>
            </FadeUp>

            {/* ======================================================
                CTA
                ====================================================== */}

            <FadeUp delay={0.30} distance={20}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#programs"
                  className="btn-primary group inline-flex items-center justify-center gap-2"
                >
                  Explore Programs

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                <Link
                  href="#about"
                  className="btn-secondary group inline-flex items-center justify-center gap-2"
                >
                  Discover Dadaal

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
                </Link>
              </div>
            </FadeUp>

            {/* ======================================================
                TRUST / STATS
                ====================================================== */}

            <FadeUp delay={0.40} distance={18}>
              <div
                className="
                  mt-12
                  max-w-2xl
                  border-t
                  border-dadaal-border
                  pt-7
                "
              >
                <Stagger
                  staggerDelay={0.08}
                  delayChildren={0.05}
                  className="grid grid-cols-3 divide-x divide-dadaal-border"
                >
                  {/* Stat */}
                  <StaggerItem>
                    <div className="pr-4">
                      <p className="font-heading text-card font-extrabold text-dadaal-navy">
                        500+
                      </p>

                      <p className="mt-1 font-sans text-caption text-dadaal-muted">
                        Young people reached
                      </p>
                    </div>
                  </StaggerItem>

                  {/* Stat */}
                  <StaggerItem>
                    <div className="px-4">
                      <p className="font-heading text-card font-extrabold text-dadaal-blue">
                        100%
                      </p>

                      <p className="mt-1 font-sans text-caption text-dadaal-muted">
                        Practical learning
                      </p>
                    </div>
                  </StaggerItem>

                  {/* Stat */}
                  <StaggerItem>
                    <div className="pl-4">
                      <p className="font-heading text-card font-extrabold text-dadaal-green">
                        2026
                      </p>

                      <p className="mt-1 font-sans text-caption text-dadaal-muted">
                        Active community
                      </p>
                    </div>
                  </StaggerItem>
                </Stagger>
              </div>
            </FadeUp>
          </div>

          {/* ========================================================
              RIGHT — HERO PHOTOGRAPHY
              ======================================================== */}

          <div className="lg:col-span-5">
            <Reveal delay={0.18}>
              <div className="relative mx-auto max-w-lg">
                {/* ==================================================
                    OUTER VISUAL FRAME
                    ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -inset-4
                    -z-10
                    rounded-card-lg
                    bg-gradient-to-br
                    from-dadaal-blue/20
                    via-transparent
                    to-dadaal-green/20
                    blur-sm
                  "
                />

                {/* ==================================================
                    MAIN PHOTO
                    ================================================== */}

                <div
                  className="
                    group
                    relative
                    aspect-[4/5]
                    overflow-hidden
                    rounded-card-lg
                    border-4
                    border-white
                    bg-slate-100
                    shadow-card
                  "
                >
                  <Image
                    src="/images/hero/dadaal-event-01.jpeg"
                    alt="Young people participating in a Dadaal event"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-[var(--ease-premium)]
                      group-hover:scale-[1.04]
                    "
                  />

                  {/* Cinematic overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-dadaal-navy/80
                      via-dadaal-navy/15
                      to-transparent
                    "
                  />

                  {/* Top photo label */}
                  <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                    <span
                      className="
                        rounded-full
                        border
                        border-white/20
                        bg-black/10
                        px-3
                        py-1.5
                        font-sans
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-white
                        backdrop-blur-md
                      "
                    >
                      Dadaal Community
                    </span>
                  </div>

                  {/* Photo caption */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <span className="badge-gradient">
                      Community in action
                    </span>

                    <p
                      className="
                        mt-3
                        max-w-md
                        font-heading
                        text-lg
                        font-bold
                        leading-snug
                        text-white
                        sm:text-xl
                      "
                    >
                      Creating spaces where young people can learn,
                      connect, and lead.
                    </p>
                  </div>
                </div>

                {/* ==================================================
                    FLOATING MISSION CARD
                    ================================================== */}

                <FadeUp delay={0.42} distance={20}>
                  <div
                    className="
                      absolute
                      -bottom-8
                      -left-4
                      z-20
                      w-[min(88%,21rem)]
                      sm:-left-10
                    "
                  >
                    <div className="card-glass p-4 sm:p-5">
                      <div className="flex items-start gap-3.5">
                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-gradient-to-br
                            from-dadaal-blue
                            to-dadaal-green
                            text-white
                            shadow-glow-blue
                          "
                        >
                          <Users className="h-5 w-5" />
                        </div>

                        <div>
                          <p
                            className="
                              font-heading
                              text-sm
                              font-bold
                              text-dadaal-navy
                            "
                          >
                            Youth-led. Impact-focused.
                          </p>

                          <p
                            className="
                              mt-0.5
                              font-sans
                              text-caption
                              leading-relaxed
                              text-dadaal-muted
                            "
                          >
                            Education • Mentorship • Leadership
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>

                {/* ==================================================
                    FLOATING COHORT CARD
                    ================================================== */}

                <FadeUp delay={0.50} distance={18}>
                  <div
                    className="
                      absolute
                      -right-4
                      -top-6
                      z-20
                      hidden
                      sm:block
                    "
                  >
                    <div
                      className="
                        card-glass
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                      "
                    >
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-dadaal-soft-green
                          text-dadaal-green
                        "
                      >
                        <Award className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="font-heading text-caption font-bold text-dadaal-navy">
                          Active Cohort
                        </p>

                        <p className="font-sans text-[11px] text-dadaal-muted">
                          Mogadishu, Somalia
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>

                {/* ==================================================
                    SMALL IMPACT BADGE
                    ================================================== */}

                <div
                  className="
                    absolute
                    -right-3
                    bottom-14
                    z-20
                    hidden
                    lg:block
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/70
                      bg-white/90
                      px-3
                      py-2
                      shadow-card
                      backdrop-blur-md
                    "
                  >
                    <Target className="h-3.5 w-3.5 text-dadaal-green" />

                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-dadaal-navy">
                      Impact first
                    </span>
                  </div>
                </div>

                {/* ==================================================
                    DECORATIVE RING
                    ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-8
                    -top-8
                    -z-10
                    h-32
                    w-32
                    rounded-full
                    border-[10px]
                    border-dadaal-green/10
                  "
                />

                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-14
                    -right-14
                    -z-10
                    h-48
                    w-48
                    rounded-full
                    bg-gradient-to-br
                    from-dadaal-blue/10
                    to-dadaal-green/10
                    blur-2xl
                  "
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ============================================================
          BOTTOM DIVIDER / SCROLL
          ============================================================ */}

      <FadeUp delay={0.75} distance={12}>
        <div
          className="
            absolute
            bottom-6
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            lg:flex
          "
        >
          <span
            className="
              font-heading
              text-[10px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-dadaal-muted
            "
          >
            Explore
          </span>

          <span
            className="
              h-9
              w-px
              bg-gradient-to-b
              from-dadaal-blue
              to-transparent
            "
          />
        </div>
      </FadeUp>
    </section>
  );
}