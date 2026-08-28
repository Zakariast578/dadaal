"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Compass,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { FadeUp } from "@/components/motion/FadeUp";
import { Reveal } from "@/components/motion/Reveal";
import {
  Stagger,
  StaggerItem,
} from "@/components/motion/Stagger";

export function AboutSection() {
  return (
    <section
      id="about"
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
          opacity-50
          sm:h-96
          sm:w-96
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
          bg-dadaal-soft-blue/50
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          left-[42%]
          top-[30%]
          -z-10
          h-72
          w-72
          rounded-full
          bg-dadaal-soft-green/20
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
          -z-20
          opacity-40
          bg-[linear-gradient(to_right,#0b5cab06_1px,transparent_1px),linear-gradient(to_bottom,#0b5cab06_1px,transparent_1px)]
          bg-[size:4rem_4rem]
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
                  text-dadaal-blue
                "
              >
                01
              </span>

              <span className="h-px w-12 bg-dadaal-border" />

              <span className="eyebrow">
                Who We Are
              </span>
            </div>

            <h2 className="heading-section mt-5 max-w-4xl">
              Building a stronger foundation for{" "}
              <span className="text-gradient">
                future leaders.
              </span>
            </h2>
          </FadeUp>

          <FadeUp
            delay={0.12}
            distance={20}
            className="lg:col-span-4 lg:pb-1"
          >
            <p className="max-w-md font-sans text-body leading-relaxed text-dadaal-muted lg:ml-auto">
              Dadaal creates practical pathways for young Somalis to
              learn, connect, lead, and turn their potential into
              meaningful community impact.
            </p>
          </FadeUp>
        </div>

        {/* ============================================================
            MAIN STORY
            ============================================================ */}

        <div className="mt-16 grid items-start gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-16">
          {/* ========================================================
              LEFT — STORY
              ======================================================== */}

          <div className="lg:col-span-5">
            <FadeUp delay={0.1} distance={24}>
              <div className="max-w-xl">
                {/* Editorial quote */}
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -left-2
                      -top-7
                      font-heading
                      text-7xl
                      font-black
                      leading-none
                      text-dadaal-blue/10
                    "
                  >
                    “
                  </span>

                  <div className="border-l-2 border-dadaal-green pl-6">
                    <p
                      className="
                        font-heading
                        text-xl
                        font-semibold
                        leading-relaxed
                        text-dadaal-navy
                        sm:text-2xl
                        lg:text-[1.65rem]
                      "
                    >
                      We believe young people should have the knowledge,
                      networks, and support to shape the future they want
                      to see.
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="mt-8 space-y-5">
                  <p className="font-sans text-body leading-relaxed text-dadaal-muted">
                    Dadaal is an independent youth initiative committed
                    to unlocking the potential of young Somalis through
                    meaningful mentorship, practical skills, and
                    opportunities for growth.
                  </p>

                  <p className="font-sans text-body leading-relaxed text-slate-500">
                    We create spaces where young people can gain
                    practical experience, build relationships, develop
                    leadership capacity, and take meaningful steps
                    toward their goals.
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-9">
                  <Link
                    href="#programs"
                    className="btn-primary group inline-flex items-center gap-2"
                  >
                    Discover our work

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
              </div>
            </FadeUp>

            {/* ======================================================
                PRINCIPLES
                ====================================================== */}

            <Stagger
              staggerDelay={0.1}
              delayChildren={0.08}
              className="mt-12 grid gap-4 sm:grid-cols-2"
            >
              {/* Youth Driven */}
              <StaggerItem>
                <article
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-card
                    border
                    border-dadaal-border
                    bg-white/70
                    p-5
                    shadow-sm
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-dadaal-blue/20
                    hover:shadow-card
                  "
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      -right-8
                      -top-8
                      h-24
                      w-24
                      rounded-full
                      bg-dadaal-soft-blue
                      opacity-0
                      blur-2xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative">
                    <div
                      className="
                        mb-5
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
                      <Users className="h-5 w-5" />
                    </div>

                    <h3 className="font-heading text-lg font-bold text-dadaal-navy">
                      Youth-Driven
                    </h3>

                    <p className="mt-2 font-sans text-caption leading-relaxed text-dadaal-muted">
                      Built with young people, for young people, and
                      shaped around their ambitions.
                    </p>

                    <div className="mt-5 flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-dadaal-blue" />

                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-dadaal-muted">
                        People at the center
                      </span>
                    </div>
                  </div>
                </article>
              </StaggerItem>

              {/* Impact First */}
              <StaggerItem>
                <article
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-card
                    border
                    border-dadaal-border
                    bg-white/70
                    p-5
                    shadow-sm
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-dadaal-green/20
                    hover:shadow-card
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      -right-8
                      -top-8
                      h-24
                      w-24
                      rounded-full
                      bg-dadaal-soft-green
                      opacity-0
                      blur-2xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative">
                    <div
                      className="
                        mb-5
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-dadaal-soft-green
                        text-dadaal-green
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    >
                      <Target className="h-5 w-5" />
                    </div>

                    <h3 className="font-heading text-lg font-bold text-dadaal-navy">
                      Impact-First
                    </h3>

                    <p className="mt-2 font-sans text-caption leading-relaxed text-dadaal-muted">
                      Focused on practical learning, meaningful
                      opportunities, and outcomes that matter.
                    </p>

                    <div className="mt-5 flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-dadaal-green" />

                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-dadaal-muted">
                        Outcomes that matter
                      </span>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            </Stagger>
          </div>

          {/* ========================================================
              RIGHT — VISUAL STORY
              ======================================================== */}

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="relative mx-auto max-w-2xl">
                {/* Outer frame */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -inset-4
                    -z-10
                    rounded-[2rem]
                    bg-gradient-to-br
                    from-dadaal-blue/15
                    via-transparent
                    to-dadaal-green/15
                    blur-sm
                  "
                />

                {/* Main image */}
                <div
                  className="
                    group
                    relative
                    aspect-[4/3]
                    overflow-hidden
                    rounded-[1.75rem]
                    border-4
                    border-white
                    bg-slate-100
                    shadow-card
                  "
                >
                  <Image
                    src="/images/events/community-event.jpeg"
                    alt="Young people participating in a Dadaal community event"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
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
                      from-dadaal-navy/75
                      via-dadaal-navy/5
                      to-transparent
                    "
                  />

                  {/* Top metadata */}
                  <div
                    className="
                      absolute
                      left-5
                      right-5
                      top-5
                      flex
                      items-center
                      justify-between
                      sm:left-6
                      sm:right-6
                      sm:top-6
                    "
                  >
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

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-black/10
                        text-white
                        backdrop-blur-md
                      "
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Caption */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <span className="badge-gradient">
                      Community in action
                    </span>

                    <p
                      className="
                        mt-3
                        max-w-lg
                        font-heading
                        text-xl
                        font-bold
                        leading-snug
                        text-white
                        sm:text-2xl
                      "
                    >
                      Creating spaces where young people can learn,
                      connect, and lead.
                    </p>
                  </div>
                </div>

                {/* ==================================================
                    MISSION CARD
                    ================================================== */}

                <FadeUp delay={0.35} distance={22}>
                  <div
                    className="
                      absolute
                      -bottom-9
                      -left-4
                      z-20
                      w-[min(88%,22rem)]
                      sm:-left-8
                    "
                  >
                    <div className="card-glass p-5 sm:p-6">
                      <div className="flex items-start gap-4">
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
                          <Sparkles className="h-5 w-5" />
                        </div>

                        <div>
                          <p
                            className="
                              font-heading
                              text-[10px]
                              font-bold
                              uppercase
                              tracking-[0.16em]
                              text-dadaal-blue
                            "
                          >
                            Our Mission
                          </p>

                          <p
                            className="
                              mt-1.5
                              font-sans
                              text-sm
                              leading-relaxed
                              text-dadaal-muted
                            "
                          >
                            Creating pathways for young people to learn,
                            lead, and make an impact.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>

                {/* ==================================================
                    IMPACT CARD
                    ================================================== */}

                <FadeUp delay={0.48} distance={18}>
                  <div
                    className="
                      absolute
                      -right-3
                      -top-6
                      z-20
                      hidden
                      sm:block
                    "
                  >
                    <div className="card-glass px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-dadaal-soft-green
                            text-dadaal-green
                          "
                        >
                          <Compass className="h-4 w-4" />
                        </div>

                        <div>
                          <p className="font-heading text-xs font-bold text-dadaal-navy">
                            Purpose → Action
                          </p>

                          <p className="mt-0.5 font-sans text-[10px] text-dadaal-muted">
                            Turning potential into progress
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>

                {/* ==================================================
                    DECORATIVE RING
                    ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-7
                    -top-7
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
                    -bottom-16
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

        {/* ============================================================
            BOTTOM STATEMENT
            ============================================================ */}

        <FadeUp delay={0.25} distance={20}>
          <div className="mt-24 lg:mt-32">
            <div className="divider-gradient mb-8 opacity-70" />

            <div className="grid items-center gap-8 lg:grid-cols-12">
              {/* Statement */}
              <div className="lg:col-span-8">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="
                      mt-2
                      hidden
                      h-10
                      w-1
                      rounded-full
                      bg-gradient-to-b
                      from-dadaal-blue
                      to-dadaal-green
                      sm:block
                    "
                  />

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
                      Young people are not just the future.
                      <span className="text-gradient">
                        {" "}
                        They are the present.
                      </span>
                    </p>

                    <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-dadaal-muted">
                      The work starts by giving young people the tools,
                      relationships, and confidence to act today.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Link
                  href="#programs"
                  className="
                    btn-ghost
                    group
                    inline-flex
                    items-center
                    gap-2
                  "
                >
                  Explore Dadaal

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
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}