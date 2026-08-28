"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CalendarCheck2,
  CalendarX2,
  MapPin,
  Sparkles,
  Tag,
} from "lucide-react";

import {
  EventItem,
  EventCard,
} from "@/components/cards/EventCard";

import { Modal } from "@/components/ui/Modal";

import {
  Stagger,
  StaggerItem,
} from "@/components/motion/Stagger";

import { FadeUp } from "@/components/motion/FadeUp";

interface EventsSectionProps {
  events: EventItem[];
}

type FilterTab = "All" | "Upcoming" | "Completed";

export function EventsSection({
  events,
}: EventsSectionProps) {
  const [filter, setFilter] =
    useState<FilterTab>("All");

  const [selectedEvent, setSelectedEvent] =
    useState<EventItem | null>(null);

  /* ================================================================
     FILTER EVENTS
     ================================================================ */

  const filteredEvents = events.filter((event) => {
    if (filter === "Upcoming") {
      return (
        event.status === "Upcoming" ||
        event.status === "Registration Open"
      );
    }

    if (filter === "Completed") {
      return event.status === "Completed";
    }

    return true;
  });

  /* ================================================================
     EVENT COUNTS
     ================================================================ */

  const upcomingCount = events.filter(
    (event) =>
      event.status === "Upcoming" ||
      event.status === "Registration Open"
  ).length;

  const completedCount = events.filter(
    (event) => event.status === "Completed"
  ).length;

  return (
    <section
      id="events"
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
          -right-48
          top-20
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
          absolute
          -left-40
          bottom-0
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
          absolute
          left-1/2
          top-1/2
          -z-10
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-dadaal-soft-green/20
          blur-3xl
        "
      />

      {/* Subtle editorial grid */}
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
                03
              </span>

              <span className="h-px w-12 bg-dadaal-border" />

              <span className="eyebrow">
                Life at Dadaal
              </span>
            </div>

            <h2 className="heading-section mt-5 max-w-4xl">
              Moments that bring{" "}
              <span className="text-gradient">
                people together.
              </span>
            </h2>
          </FadeUp>

          <FadeUp
            delay={0.12}
            distance={20}
            className="lg:col-span-4"
          >
            <p className="max-w-md font-sans text-body leading-relaxed text-dadaal-muted lg:ml-auto">
              From mentorship sessions to community gatherings,
              our events create spaces for learning, connection,
              collaboration, and action.
            </p>
          </FadeUp>
        </div>

        {/* ============================================================
            EVENT STATUS STRIP
            ============================================================ */}

        <FadeUp delay={0.16} distance={16}>
          <div
            className="
              mt-10
              flex
              flex-col
              gap-5
              rounded-card
              border
              border-dadaal-border
              bg-white/65
              p-4
              shadow-sm
              backdrop-blur-md
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:p-5
            "
          >
            {/* Left */}
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
                <CalendarCheck2 className="h-4.5 w-4.5" />
              </div>

              <div>
                <p className="font-heading text-caption font-bold text-dadaal-navy">
                  Stay connected
                </p>

                <p className="mt-0.5 font-sans text-[11px] text-dadaal-muted">
                  Discover what's happening at Dadaal.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden h-8 w-px bg-dadaal-border sm:block" />

            {/* Stats */}
            <div className="flex items-center gap-5">
              <div>
                <p className="font-heading text-lg font-bold text-dadaal-navy">
                  {upcomingCount}
                </p>

                <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-dadaal-muted">
                  Upcoming
                </p>
              </div>

              <div className="h-8 w-px bg-dadaal-border" />

              <div>
                <p className="font-heading text-lg font-bold text-dadaal-navy">
                  {completedCount}
                </p>

                <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-dadaal-muted">
                  Completed
                </p>
              </div>

              <div className="h-8 w-px bg-dadaal-border" />

              <div>
                <p className="font-heading text-lg font-bold text-dadaal-navy">
                  {events.length}
                </p>

                <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-dadaal-muted">
                  Total events
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ============================================================
            FILTER / TOOLBAR
            ============================================================ */}

        <FadeUp delay={0.21} distance={18}>
          <div className="mt-10">
            <div
              className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <p className="font-heading text-sm font-bold text-dadaal-navy">
                  Explore events
                </p>

                <p className="mt-1 font-sans text-[11px] text-dadaal-muted">
                  Browse recent and upcoming Dadaal activities.
                </p>
              </div>

              {/* Filter */}
              <div
                className="
                  inline-flex
                  w-fit
                  max-w-full
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
                "
                role="tablist"
                aria-label="Filter events"
              >
                {(
                  [
                    "All",
                    "Upcoming",
                    "Completed",
                  ] as FilterTab[]
                ).map((tab) => {
                  const isActive = filter === tab;

                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setFilter(tab)}
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
                          layoutId="events-filter-pill"
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
                        {tab}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ============================================================
            RESULT COUNT
            ============================================================ */}

        <FadeUp delay={0.25} distance={14}>
          <div className="mt-7 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-dadaal-green" />

            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-dadaal-muted">
              Showing {filteredEvents.length}{" "}
              {filteredEvents.length === 1
                ? "event"
                : "events"}
            </span>
          </div>
        </FadeUp>

        {/* ============================================================
            EVENTS GRID
            ============================================================ */}

        <div className="mt-7">
          <AnimatePresence mode="wait">
            {filteredEvents.length > 0 ? (
              <Stagger
                key={filter}
                staggerDelay={0.08}
                delayChildren={0.04}
                className="
                  grid
                  grid-cols-1
                  gap-6
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                "
              >
                {filteredEvents.map((event, index) => (
                  <StaggerItem key={event.id}>
                    <motion.div
                      whileHover={{
                        y: -5,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="relative h-full"
                    >
                      {/* Number */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          left-4
                          top-4
                          z-20
                          flex
                          h-8
                          min-w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/30
                          bg-black/15
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

                      {/* Clickable card */}
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedEvent(event)
                        }
                        className="
                          block
                          h-full
                          w-full
                          cursor-pointer
                          text-left
                          focus:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-dadaal-blue
                          focus-visible:ring-offset-4
                          rounded-card
                        "
                        aria-label={`View details for ${event.title}`}
                      >
                        <EventCard event={event} />
                      </button>
                    </motion.div>
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
                  max-w-xl
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
                  <CalendarX2 className="h-6 w-6" />
                </div>

                <h3 className="font-heading text-lg font-bold text-dadaal-navy">
                  No events found
                </h3>

                <p className="mx-auto mt-2 max-w-sm font-sans text-caption leading-relaxed text-dadaal-muted">
                  There are currently no events listed
                  under the{" "}
                  <span className="font-semibold text-dadaal-navy">
                    "{filter}"
                  </span>{" "}
                  filter.
                </p>

                <button
                  type="button"
                  onClick={() => setFilter("All")}
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
                  View all events
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ============================================================
            BOTTOM STATEMENT
            ============================================================ */}

        <FadeUp delay={0.3} distance={20}>
          <div className="mt-20 lg:mt-28">
            <div className="divider-gradient mb-8 opacity-70" />

            <div className="grid items-center gap-8 lg:grid-cols-12">
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
                      bg-dadaal-soft-green
                      text-dadaal-green
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
                      Every gathering creates a{" "}
                      <span className="text-gradient">
                        new connection.
                      </span>
                    </p>

                    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-dadaal-muted">
                      Events are more than moments on a calendar.
                      They are opportunities to meet people, exchange
                      ideas, build relationships, and create impact.
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
            EVENT DETAIL MODAL
            ============================================================ */}

        <Modal
          isOpen={Boolean(selectedEvent)}
          onClose={() => setSelectedEvent(null)}
          title={
            selectedEvent?.title ||
            "Event Details"
          }
        >
          {selectedEvent && (
            <div className="space-y-7">
              {/* ======================================================
                  COVER
                  ====================================================== */}

              <div
                className="
                  group
                  relative
                  aspect-video
                  w-full
                  overflow-hidden
                  rounded-card-lg
                  border
                  border-dadaal-border
                  bg-slate-100
                "
              >
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 760px"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-[var(--ease-premium)]
                    group-hover:scale-105
                  "
                />

                {/* Image gradient */}
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

                {/* Status */}
                <div className="absolute right-4 top-4">
                  <span
                    className={`
                      rounded-badge
                      border
                      px-3
                      py-1.5
                      font-heading
                      text-caption
                      font-semibold
                      shadow-sm
                      backdrop-blur-md
                      ${
                        selectedEvent.status ===
                          "Registration Open" ||
                        selectedEvent.status ===
                          "Upcoming"
                          ? `
                            border-dadaal-green/30
                            bg-dadaal-soft-green/95
                            text-dadaal-green
                          `
                          : `
                            border-white/30
                            bg-white/95
                            text-slate-600
                          `
                      }
                    `}
                  >
                    {selectedEvent.status}
                  </span>
                </div>

                {/* Bottom label */}
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
                    Dadaal Event
                  </span>
                </div>
              </div>

              {/* ======================================================
                  EVENT META
                  ====================================================== */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >
                {/* Date */}
                <div
                  className="
                    rounded-card
                    border
                    border-dadaal-border
                    bg-slate-50/80
                    p-4
                  "
                >
                  <div className="flex items-center gap-3">
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
                      <Calendar className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-dadaal-muted">
                        Date
                      </p>

                      <p className="mt-0.5 font-heading text-sm font-bold text-dadaal-navy">
                        {selectedEvent.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div
                  className="
                    rounded-card
                    border
                    border-dadaal-border
                    bg-slate-50/80
                    p-4
                  "
                >
                  <div className="flex items-center gap-3">
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

                    <div className="min-w-0">
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-dadaal-muted">
                        Location
                      </p>

                      <p className="mt-0.5 truncate font-heading text-sm font-bold text-dadaal-navy">
                        {selectedEvent.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ======================================================
                  CATEGORY
                  ====================================================== */}

              {selectedEvent.type && (
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-card
                    border
                    border-dadaal-border
                    bg-white
                    p-4
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
                      bg-slate-100
                      text-slate-600
                    "
                  >
                    <Tag className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-dadaal-muted">
                      Category
                    </p>

                    <p className="mt-0.5 font-heading text-sm font-bold text-dadaal-navy">
                      {selectedEvent.type}
                    </p>
                  </div>
                </div>
              )}

              {/* ======================================================
                  DESCRIPTION
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
                    About This Event
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
                  Join us for{" "}
                  <span className="font-semibold text-dadaal-navy">
                    {selectedEvent.title}
                  </span>{" "}
                  in{" "}
                  <span className="font-semibold text-dadaal-navy">
                    {selectedEvent.location}
                  </span>
                  . This session brings together community
                  members, mentors, and leaders to drive impact
                  and collaborative growth.
                </p>
              </div>

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
                {selectedEvent.status ===
                  "Registration Open" && (
                  <button
                    type="button"
                    className="btn-primary flex-1"
                  >
                    Register Now

                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={() =>
                    setSelectedEvent(null)
                  }
                  className="btn-secondary flex-1"
                >
                  Close Details
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}