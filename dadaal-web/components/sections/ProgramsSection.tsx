"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FolderX,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { FadeUp } from "@/components/motion/FadeUp";
import {
  Stagger,
  StaggerItem,
} from "@/components/motion/Stagger";

import { Modal } from "@/components/ui/Modal";
import { programsData } from "@/data/programs";

import {
  ProgramCard,
  Program,
} from "@/components/cards/ProgramCard";

export function ProgramsSection() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedProgram, setSelectedProgram] =
    useState<Program | null>(null);

  /* ================================================================
     PROGRAM TAGS
     ================================================================ */

  const availableTags = useMemo(() => {
    const tags = new Set<string>();

    programsData.forEach((program) => {
      program.tags?.forEach((tag) => tags.add(tag));
    });

    return ["All", ...Array.from(tags)];
  }, []);

  /* ================================================================
     FILTER PROGRAMS
     ================================================================ */

  const filteredPrograms = useMemo(() => {
    if (selectedTag === "All") {
      return programsData;
    }

    return programsData.filter((program) =>
      program.tags?.includes(selectedTag)
    );
  }, [selectedTag]);

  return (
    <section
      id="programs"
      className="
        surface-gradient-soft
        relative
        isolate
        overflow-hidden
        border-t
        border-dadaal-border
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
          top-24
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
          -right-40
          bottom-20
          h-96
          w-96
          rounded-full
          bg-dadaal-soft-green/40
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          left-1/2
          top-1/2
          -z-10
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-dadaal-soft-blue/20
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
                02
              </span>

              <span className="h-px w-12 bg-dadaal-border" />

              <span className="eyebrow">
                What We Do
              </span>
            </div>

            <h2 className="heading-section mt-5 max-w-4xl">
              Programs designed to turn{" "}
              <span className="text-gradient">
                potential into progress.
              </span>
            </h2>
          </FadeUp>

          <FadeUp
            delay={0.12}
            distance={20}
            className="lg:col-span-4 lg:pb-1"
          >
            <p className="max-w-md font-sans text-body leading-relaxed text-dadaal-muted lg:ml-auto">
              Practical learning, mentorship, leadership development,
              and opportunities designed to help young people move
              from ambition to meaningful action.
            </p>
          </FadeUp>
        </div>

        {/* ============================================================
            PROGRAM PHILOSOPHY STRIP
            ============================================================ */}

        <FadeUp delay={0.16} distance={16}>
          <div
            className="
              mt-10
              flex
              flex-col
              gap-4
              rounded-card
              border
              border-dadaal-border
              bg-white/60
              p-4
              shadow-sm
              backdrop-blur-md
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:p-5
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-dadaal-soft-blue
                  text-dadaal-blue
                "
              >
                <Target className="h-4.5 w-4.5" />
              </div>

              <div>
                <p className="font-heading text-caption font-bold text-dadaal-navy">
                  Built for practical growth
                </p>

                <p className="mt-0.5 font-sans text-[11px] text-dadaal-muted">
                  Learn → Connect → Practice → Lead
                </p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-dadaal-border sm:block" />

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-dadaal-green" />

              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-dadaal-muted">
                {filteredPrograms.length}{" "}
                {filteredPrograms.length === 1
                  ? "program"
                  : "programs"}{" "}
                available
              </span>
            </div>
          </div>
        </FadeUp>

        {/* ============================================================
            FILTERS
            ============================================================ */}

        <FadeUp delay={0.22} distance={18}>
          <div className="mt-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-heading text-sm font-bold text-dadaal-navy">
                  Explore our programs
                </p>

                <p className="mt-1 font-sans text-[11px] text-dadaal-muted">
                  Find the opportunity that fits your goals.
                </p>
              </div>

              <div
                className="
                  inline-flex
                  max-w-full
                  flex-wrap
                  items-center
                  gap-1
                  overflow-x-auto
                  rounded-badge
                  border
                  border-dadaal-border
                  bg-white/80
                  p-1.5
                  shadow-sm
                  backdrop-blur-md
                  sm:max-w-fit
                "
                role="tablist"
                aria-label="Filter programs"
              >
                {availableTags.map((tag) => {
                  const isActive = selectedTag === tag;

                  return (
                    <button
                      key={tag}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedTag(tag)}
                      className={`
                        relative
                        whitespace-nowrap
                        rounded-badge
                        px-4
                        py-2.5
                        font-heading
                        text-caption
                        font-semibold
                        transition-colors
                        duration-200
                        ${
                          isActive
                            ? "text-white"
                            : "text-dadaal-muted hover:text-dadaal-navy"
                        }
                      `}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="program-filter-pill"
                          className="
                            absolute
                            inset-0
                            -z-10
                            rounded-badge
                            bg-dadaal-navy
                            shadow-md
                          "
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}

                      <span className="relative z-10">
                        {tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ============================================================
            PROGRAM GRID
            ============================================================ */}

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {filteredPrograms.length > 0 ? (
              <Stagger
                key={selectedTag}
                staggerDelay={0.08}
                delayChildren={0.04}
                className="
                  grid
                  grid-cols-1
                  gap-6
                  md:grid-cols-2
                  lg:gap-8
                "
              >
                {filteredPrograms.map((program, index) => (
                  <StaggerItem key={program.id}>
                    <div className="relative h-full">
                      {/* Program number */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          left-5
                          top-5
                          z-20
                          flex
                          h-8
                          min-w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/30
                          bg-black/10
                          px-2
                          font-heading
                          text-[10px]
                          font-bold
                          tracking-[0.12em]
                          text-white
                          backdrop-blur-md
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <ProgramCard
                        program={program}
                        onClick={() => setSelectedProgram(program)}
                      />
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            ) : (
              <motion.div
                key="empty"
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -16,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mx-auto
                  max-w-lg
                  rounded-card
                  border
                  border-dashed
                  border-dadaal-border
                  bg-white/70
                  px-6
                  py-16
                  text-center
                  backdrop-blur-sm
                "
              >
                <div
                  className="
                    mx-auto
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-slate-100
                    text-slate-400
                  "
                >
                  <FolderX className="h-6 w-6" />
                </div>

                <h3 className="font-heading text-lg font-bold text-dadaal-navy">
                  No programs found
                </h3>

                <p className="mt-2 font-sans text-caption leading-relaxed text-dadaal-muted">
                  We couldn't find a program matching{" "}
                  <span className="font-semibold text-dadaal-navy">
                    "{selectedTag}"
                  </span>
                  .
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedTag("All")}
                  className="
                    mt-5
                    font-heading
                    text-caption
                    font-semibold
                    text-dadaal-blue
                    transition-colors
                    hover:text-dadaal-navy
                  "
                >
                  View all programs
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ============================================================
            BOTTOM VALUE STATEMENT
            ============================================================ */}

        <FadeUp delay={0.3} distance={20}>
          <div className="mt-20 lg:mt-28">
            <div className="divider-gradient mb-8 opacity-70" />

            <div className="grid items-center gap-8 lg:grid-cols-12">
              {/* Statement */}
              <div className="lg:col-span-8">
                <div className="flex items-start gap-4">
                  <div
                    className="
                      hidden
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-dadaal-soft-blue
                      text-dadaal-blue
                      sm:flex
                    "
                  >
                    <Sparkles className="h-4 w-4" />
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
                      "
                    >
                      More than programs.
                      <span className="text-gradient">
                        {" "}
                        Pathways to progress.
                      </span>
                    </p>

                    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-dadaal-muted">
                      Every program is designed to move young people
                      closer to the skills, relationships, and
                      opportunities they need.
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
                  Get involved

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

        {/* ============================================================
            PROGRAM MODAL
            ============================================================ */}

        <Modal
          isOpen={Boolean(selectedProgram)}
          onClose={() => setSelectedProgram(null)}
          title={selectedProgram?.title || "Program Overview"}
        >
          {selectedProgram && (
            <div className="space-y-7">
              {/* ======================================================
                  COVER IMAGE
                  ====================================================== */}

              <div
                className="
                  group
                  relative
                  aspect-video
                  overflow-hidden
                  rounded-card-lg
                  border
                  border-dadaal-border
                  bg-slate-100
                "
              >
                <Image
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-[var(--ease-premium)]
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-dadaal-navy/60
                    via-transparent
                    to-transparent
                  "
                />

                {/* Program tags */}
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {selectedProgram.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-badge
                        border
                        border-white/30
                        bg-white/90
                        px-3
                        py-1
                        font-heading
                        text-caption
                        font-semibold
                        text-dadaal-navy
                        backdrop-blur-md
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Program label */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className="
                      font-heading
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-white/80
                    "
                  >
                    Dadaal Program
                  </span>
                </div>
              </div>

              {/* ======================================================
                  OVERVIEW
                  ====================================================== */}

              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-dadaal-blue" />

                  <h4
                    className="
                      font-heading
                      text-caption
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-dadaal-navy
                    "
                  >
                    Program Overview
                  </h4>
                </div>

                <p
                  className="
                    mt-3
                    font-sans
                    text-body
                    leading-relaxed
                    text-dadaal-muted
                  "
                >
                  {selectedProgram.description}
                </p>
              </div>

              {/* ======================================================
                  FEATURES
                  ====================================================== */}

              {selectedProgram.features &&
                selectedProgram.features.length > 0 && (
                  <div
                    className="
                      rounded-card
                      border
                      border-dadaal-border
                      bg-slate-50/80
                      p-5
                    "
                  >
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-dadaal-green" />

                      <h4
                        className="
                          font-heading
                          text-caption
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-dadaal-navy
                        "
                      >
                        Key Deliverables
                      </h4>
                    </div>

                    <ul className="mt-4 space-y-3">
                      {selectedProgram.features.map((feature) => (
                        <li
                          key={feature}
                          className="
                            flex
                            items-start
                            gap-3
                            font-sans
                            text-caption
                            leading-relaxed
                            text-slate-700
                          "
                        >
                          <CheckCircle2
                            className="
                              mt-0.5
                              h-4
                              w-4
                              shrink-0
                              text-dadaal-green
                            "
                          />

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* ======================================================
                  ACTIONS
                  ====================================================== */}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-dadaal-border
                  pt-5
                  sm:flex-row
                "
              >
                <button
                  type="button"
                  className="btn-primary flex-1"
                >
                  Apply / Enroll Now

                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="btn-secondary flex-1"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}