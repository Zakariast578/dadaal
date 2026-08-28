"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Handshake,
  Sparkles,
} from "lucide-react";

import { partnersData } from "@/data/partners";
import { FadeUp } from "@/components/motion/FadeUp";
import {
  Stagger,
  StaggerItem,
} from "@/components/motion/Stagger";

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="
        relative
        isolate
        overflow-hidden
        border-t
        border-dadaal-border
        bg-white
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* ============================================================
          BACKGROUND ATMOSPHERE
          ============================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-80
          w-80
          rounded-full
          bg-dadaal-soft-blue/40
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-80
          w-80
          rounded-full
          bg-dadaal-soft-green/25
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
          opacity-20
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
                05
              </span>

              <span className="h-px w-12 bg-dadaal-border" />

              <span className="eyebrow">
                Our Network
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
              Stronger{" "}
              <span className="text-gradient">
                together.
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
              We collaborate with organizations, institutions, and
              community partners who share our commitment to creating
              meaningful opportunities for young people.
            </p>
          </FadeUp>
        </div>

        {/* ============================================================
            PARTNERSHIP INTRO
            ============================================================ */}

        <FadeUp delay={0.15} distance={20}>
          <div
            className="
              relative
              mt-14
              overflow-hidden
              rounded-[1.5rem]
              border
              border-dadaal-border
              bg-dadaal-bg
              p-6
              sm:p-8
              lg:mt-16
            "
          >
            {/* Decorative glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-dadaal-soft-blue/50
                blur-3xl
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-20
                -left-20
                h-40
                w-40
                rounded-full
                bg-dadaal-soft-green/30
                blur-3xl
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                gap-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white
                    text-dadaal-blue
                    shadow-sm
                    ring-1
                    ring-dadaal-border
                  "
                >
                  <Handshake className="h-5 w-5" />
                </div>

                <div>
                  <p
                    className="
                      font-heading
                      text-base
                      font-bold
                      text-dadaal-navy
                    "
                  >
                    A growing ecosystem
                  </p>

                  <p
                    className="
                      mt-1
                      font-sans
                      text-sm
                      text-dadaal-muted
                    "
                  >
                    Building connections that create opportunities.
                  </p>
                </div>
              </div>

              {/* Right label */}
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-dadaal-green
                  "
                />

                <span
                  className="
                    font-sans
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-dadaal-muted
                  "
                >
                  Collaboration in action
                </span>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ============================================================
            PARTNER LOGOS
            ============================================================ */}

        <Stagger
          staggerDelay={0.08}
          delayChildren={0.08}
          className="
            mt-10
            grid
            grid-cols-2
            gap-x-5
            gap-y-5
            sm:grid-cols-3
            lg:grid-cols-4
          "
        >
          {partnersData.map((partner) => (
            <StaggerItem key={partner.id}>
              <a
                href={partner.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name}`}
                className="
                  group
                  relative
                  flex
                  h-32
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200/80
                  bg-white
                  px-7
                  py-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-dadaal-blue/20
                  hover:shadow-card
                  sm:h-36
                "
              >
                {/* Soft hover atmosphere */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-24
                    w-24
                    rounded-full
                    bg-dadaal-soft-blue/60
                    opacity-0
                    blur-2xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -bottom-10
                    -left-10
                    h-20
                    w-20
                    rounded-full
                    bg-dadaal-soft-green/40
                    opacity-0
                    blur-2xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Logo */}
                <div
                  className="
                    relative
                    h-20
                    w-full
                    transition-transform
                    duration-500
                    ease-[var(--ease-premium)]
                    group-hover:scale-[1.04]
                  "
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="
                      object-contain
                      opacity-90
                      transition-all
                      duration-500
                      group-hover:opacity-100
                    "
                    sizes="
                      (max-width: 640px) 42vw,
                      (max-width: 1024px) 30vw,
                      240px
                    "
                  />
                </div>

                {/* Hover arrow */}
                <span
                  className="
                    absolute
                    right-3
                    top-3
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-dadaal-bg
                    text-dadaal-muted
                    opacity-0
                    translate-y-1
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    group-hover:text-dadaal-blue
                  "
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>

                {/* Bottom accent */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-dadaal-blue
                    to-dadaal-green
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        {/* ============================================================
            PARTNERSHIP NOTE
            ============================================================ */}

        <FadeUp delay={0.2} distance={20}>
          <div className="mt-10 text-center">
            <p
              className="
                mx-auto
                max-w-2xl
                font-sans
                text-sm
                leading-relaxed
                text-dadaal-muted
              "
            >
              Our partners bring together knowledge, experience,
              resources, and opportunities that help young people
              move from potential to meaningful action.
            </p>
          </div>
        </FadeUp>

        {/* ============================================================
            BOTTOM STATEMENT
            ============================================================ */}

        <FadeUp delay={0.25} distance={20}>
          <div className="mt-20 lg:mt-24">
            <div className="divider-gradient mb-8 opacity-70" />

            <div className="grid items-center gap-8 lg:grid-cols-12">
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
                        text-dadaal-navy
                        sm:text-2xl
                        lg:text-3xl
                      "
                    >
                      Progress happens when{" "}
                      <span className="text-gradient">
                        people connect.
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
                      Our partnerships help connect young people
                      with knowledge, experience, resources, and
                      opportunities beyond what any one organization
                      can provide alone.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
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
                  Partner with Dadaal

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