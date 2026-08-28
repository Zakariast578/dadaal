"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Users } from "lucide-react";

import { FadeUp } from "@/components/motion/FadeUp";
import { teamData } from "@/data/teams";

export function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const totalMembers = teamData.length;

  const nextMember = () => {
    setDirection(1);

    setActiveIndex((current) =>
      current === totalMembers - 1 ? 0 : current + 1
    );
  };

  const previousMember = () => {
    setDirection(-1);

    setActiveIndex((current) =>
      current === 0 ? totalMembers - 1 : current - 1
    );
  };

  /* ================================================================
     AUTO ROTATION
     ================================================================= */

  useEffect(() => {
    if (isPaused || totalMembers <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setDirection(1);

      setActiveIndex((current) =>
        current === totalMembers - 1 ? 0 : current + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, totalMembers]);

  if (!teamData.length) {
    return null;
  }

  const activeMember = teamData[activeIndex];

  const previousIndex =
    activeIndex === 0 ? totalMembers - 1 : activeIndex - 1;

  const nextIndex =
    activeIndex === totalMembers - 1 ? 0 : activeIndex + 1;

  const previousMemberData = teamData[previousIndex];
  const nextMemberData = teamData[nextIndex];

  return (
    <section
      id="team"
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
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
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
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-px
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-dadaal-blue/10
          to-transparent
        "
      />

      {/* ============================================================
          MAIN CONTAINER
          ============================================================ */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ============================================================
            HEADER
            ============================================================ */}

        <FadeUp className="mx-auto max-w-3xl text-center">
          <span className="eyebrow inline-flex items-center gap-2">
            <Users className="h-3.5 w-3.5" />
            Leadership
          </span>

          <h2 className="heading-section mt-5">
            Meet the people{" "}
            <span className="text-gradient">
              behind Dadaal.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-sans text-body-lg leading-relaxed text-dadaal-muted">
            A growing team of young leaders working together to create
            meaningful opportunities, build capacity, and help communities
            move forward.
          </p>
        </FadeUp>

        {/* ============================================================
            TEAM CAROUSEL
            ============================================================ */}

        <div
          className="relative mx-auto mt-16 max-w-6xl sm:mt-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* ========================================================
              ORBIT DECORATION
              ======================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[28rem]
              w-[28rem]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dadaal-blue/10
              sm:h-[34rem]
              sm:w-[34rem]
            "
          />

          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[22rem]
              w-[22rem]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dadaal-green/10
              sm:h-[28rem]
              sm:w-[28rem]
            "
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* ========================================================
              SIDE MEMBER — PREVIOUS
              ======================================================== */}

          {totalMembers > 1 && (
            <motion.button
              type="button"
              onClick={previousMember}
              aria-label={`Previous: ${previousMemberData.name}`}
              className="
                absolute
                left-0
                top-1/2
                z-10
                hidden
                -translate-y-1/2
                md:block
              "
              animate={{
                x: [-10, 0],
                opacity: [0.45, 0.7],
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <div
                className="
                  group
                  relative
                  h-52
                  w-40
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-dadaal-border
                  bg-white/60
                  p-3
                  shadow-soft
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-dadaal-blue/30
                  hover:shadow-card
                "
              >
                <div className="relative h-full overflow-hidden rounded-[1.1rem] bg-slate-100">
                  <Image
                    src={previousMemberData.image}
                    alt={previousMemberData.name}
                    fill
                    sizes="160px"
                    className="
                      object-cover
                      grayscale
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:grayscale-0
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-dadaal-navy/70
                      via-transparent
                      to-transparent
                    "
                  />

                  <div className="absolute inset-x-3 bottom-3 text-left">
                    <p className="font-heading text-sm font-bold text-white">
                      {previousMemberData.name}
                    </p>

                    <p className="mt-0.5 line-clamp-1 font-sans text-[10px] text-white/70">
                      {previousMemberData.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.button>
          )}

          {/* ========================================================
              SIDE MEMBER — NEXT
              ======================================================== */}

          {totalMembers > 1 && (
            <motion.button
              type="button"
              onClick={nextMember}
              aria-label={`Next: ${nextMemberData.name}`}
              className="
                absolute
                right-0
                top-1/2
                z-10
                hidden
                -translate-y-1/2
                md:block
              "
              animate={{
                x: [10, 0],
                opacity: [0.45, 0.7],
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <div
                className="
                  group
                  relative
                  h-52
                  w-40
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-dadaal-border
                  bg-white/60
                  p-3
                  shadow-soft
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-dadaal-green/30
                  hover:shadow-card
                "
              >
                <div className="relative h-full overflow-hidden rounded-[1.1rem] bg-slate-100">
                  <Image
                    src={nextMemberData.image}
                    alt={nextMemberData.name}
                    fill
                    sizes="160px"
                    className="
                      object-cover
                      grayscale
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:grayscale-0
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-dadaal-navy/70
                      via-transparent
                      to-transparent
                    "
                  />

                  <div className="absolute inset-x-3 bottom-3 text-left">
                    <p className="font-heading text-sm font-bold text-white">
                      {nextMemberData.name}
                    </p>

                    <p className="mt-0.5 line-clamp-1 font-sans text-[10px] text-white/70">
                      {nextMemberData.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.button>
          )}

          {/* ========================================================
              CENTER STAGE
              ======================================================== */}

          <div
            className="
              relative
              mx-auto
              flex
              min-h-[31rem]
              max-w-md
              items-center
              justify-center
              sm:min-h-[34rem]
            "
          >
            {/* Rotating orbit */}
            <motion.div
              aria-hidden="true"
              className="
                absolute
                h-[18rem]
                w-[18rem]
                rounded-full
                border
                border-dashed
                border-dadaal-blue/15
                sm:h-[21rem]
                sm:w-[21rem]
              "
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span
                className="
                  absolute
                  left-1/2
                  top-0
                  h-2.5
                  w-2.5
                  -translate-x-1/2
                  rounded-full
                  bg-dadaal-green
                  shadow-[0_0_18px_rgba(34,197,94,0.5)]
                "
              />
            </motion.div>

            {/* ======================================================
                ACTIVE MEMBER
                ====================================================== */}

            <AnimatePresence
              initial={false}
              custom={direction}
              mode="wait"
            >
              <motion.article
                key={activeMember.id}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 180 : -180,
                  scale: 0.82,
                  rotate: direction > 0 ? 8 : -8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -180 : 180,
                  scale: 0.82,
                  rotate: direction > 0 ? -8 : 8,
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  relative
                  z-20
                  w-full
                  max-w-sm
                "
              >
                {/* Glow */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -inset-5
                    -z-10
                    rounded-[2.5rem]
                    bg-gradient-to-br
                    from-dadaal-blue/15
                    via-transparent
                    to-dadaal-green/15
                    blur-2xl
                  "
                />

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-dadaal-border
                    bg-white
                    p-6
                    text-center
                    shadow-card
                    sm:p-8
                  "
                >
                  {/* Top accent */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-x-12
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-dadaal-blue
                      to-transparent
                    "
                  />

                  {/* ==================================================
                      PORTRAIT
                      ================================================== */}

                  <div className="relative mx-auto mb-7 h-40 w-40 sm:h-44 sm:w-44">

                    {/* Outer orbit */}
                    <motion.div
                      aria-hidden="true"
                      className="
                        absolute
                        -inset-3
                        rounded-full
                        border
                        border-dadaal-blue/15
                      "
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Green ring */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        -inset-5
                        rounded-full
                        border
                        border-dadaal-green/10
                      "
                    />

                    {/* Image */}
                    <div
                      className="
                        relative
                        h-full
                        w-full
                        overflow-hidden
                        rounded-full
                        border-4
                        border-white
                        bg-slate-100
                        shadow-card
                      "
                    >
                      <Image
                        src={activeMember.image}
                        alt={activeMember.name}
                        fill
                        priority
                        sizes="176px"
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          ease-[var(--ease-premium)]
                          hover:scale-105
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-dadaal-navy/20
                          via-transparent
                          to-transparent
                        "
                      />
                    </div>

                    {/* Status */}
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        bottom-1
                        right-1
                        h-5
                        w-5
                        rounded-full
                        border-4
                        border-white
                        bg-dadaal-green
                        shadow-[0_0_15px_rgba(34,197,94,0.45)]
                      "
                    />
                  </div>

                  {/* ==================================================
                      CONTENT
                      ================================================== */}

                  <div>
                    <p
                      className="
                        font-sans
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-dadaal-blue
                      "
                    >
                      Dadaal Leadership
                    </p>

                    <h3
                      className="
                        mt-2
                        font-heading
                        text-2xl
                        font-bold
                        tracking-tight
                        text-dadaal-navy
                        sm:text-3xl
                      "
                    >
                      {activeMember.name}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        font-sans
                        text-sm
                        font-semibold
                        text-dadaal-green
                      "
                    >
                      {activeMember.role}
                    </p>

                    <div
                      className="
                        mx-auto
                        my-5
                        h-px
                        w-12
                        bg-gradient-to-r
                        from-dadaal-blue
                        to-dadaal-green
                      "
                    />

                    <p
                      className="
                        font-sans
                        text-sm
                        leading-relaxed
                        text-dadaal-muted
                      "
                    >
                      Helping build the next generation of Somali
                      leaders through mentorship, collaboration, and
                      meaningful community action.
                    </p>

                    <div className="mt-6">
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2
                          font-heading
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          text-dadaal-muted
                        "
                      >
                        Meet the team

                        <ArrowUpRight className="h-3.5 w-3.5 text-dadaal-blue" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* ========================================================
              CONTROLS
              ======================================================== */}

          <div className="relative z-30 mt-4 flex items-center justify-center gap-5">

            {/* Previous */}
            <button
              type="button"
              onClick={previousMember}
              aria-label="Previous team member"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-dadaal-border
                bg-white
                text-dadaal-navy
                shadow-soft
                transition-all
                duration-300
                hover:-translate-x-0.5
                hover:border-dadaal-blue/30
                hover:text-dadaal-blue
                hover:shadow-card
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-dadaal-blue
              "
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {teamData.map((member, index) => (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  aria-label={`Show ${member.name}`}
                  aria-current={
                    index === activeIndex ? "true" : undefined
                  }
                  className="
                    group
                    flex
                    h-6
                    items-center
                    justify-center
                  "
                >
                  <span
                    className={`
                      block
                      h-1.5
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        index === activeIndex
                          ? "w-8 bg-dadaal-blue"
                          : "w-1.5 bg-dadaal-border group-hover:bg-dadaal-green"
                      }
                    `}
                  />
                </button>
              ))}
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={nextMember}
              aria-label="Next team member"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-dadaal-border
                bg-white
                text-dadaal-navy
                shadow-soft
                transition-all
                duration-300
                hover:translate-x-0.5
                hover:border-dadaal-green/30
                hover:text-dadaal-green
                hover:shadow-card
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-dadaal-green
              "
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ============================================================
            BOTTOM STATEMENT
            ============================================================ */}

        <FadeUp delay={0.4}>
          <div className="mx-auto mt-20 max-w-3xl text-center sm:mt-24">
            <div className="divider-gradient mb-8 opacity-70" />

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
              Strong communities are built by{" "}
              <span className="text-gradient">
                people who choose to lead.
              </span>
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}