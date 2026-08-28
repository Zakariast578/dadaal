import Link from "next/link";
import {
  ArrowUpRight,
  Heart,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { footerNavigation } from "@/data/footer";
import { FadeUp } from "@/components/motion/FadeUp";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        isolate
        overflow-hidden
        border-t
        border-white/10
        bg-dadaal-navy
        text-white
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
          -right-48
          -top-48
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-dadaal-blue/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-48
          -left-48
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-dadaal-green/10
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
          bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]
          bg-[size:4rem_4rem]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ============================================================
            CLOSING CTA
            ============================================================ */}

        <FadeUp delay={0.05} distance={24}>
          <div
            className="
              relative
              overflow-hidden
              border-b
              border-white/10
              py-20
              sm:py-24
              lg:py-28
            "
          >
            {/* CTA glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-72
                w-72
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-dadaal-blue/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                grid
                items-end
                gap-10
                lg:grid-cols-12
              "
            >
              {/* CTA Text */}
              <div className="lg:col-span-8">
                <div className="mb-5 flex items-center gap-4">
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
                    Keep Moving
                  </span>

                  <span className="h-px w-12 bg-white/15" />
                </div>

                <h2
                  className="
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
                  Your potential can become{" "}
                  <span className="text-gradient">
                    something bigger.
                  </span>
                </h2>

                <p
                  className="
                    mt-6
                    max-w-2xl
                    font-sans
                    text-base
                    leading-relaxed
                    text-white/50
                    sm:text-lg
                  "
                >
                  Whether you want to learn, mentor, collaborate,
                  or create opportunities for young people, there is
                  a place for you in the Dadaal community.
                </p>
              </div>

              {/* CTA Button */}
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Link
                  href="#get-involved"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-dadaal-green
                    px-6
                    py-3.5
                    font-sans
                    text-sm
                    font-bold
                    text-dadaal-navy
                    shadow-[0_12px_40px_rgba(34,197,94,0.15)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-dadaal-soft-green
                    hover:shadow-[0_16px_50px_rgba(34,197,94,0.2)]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-dadaal-green
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-dadaal-navy
                  "
                >
                  Get Involved

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

        {/* ============================================================
            MAIN FOOTER
            ============================================================ */}

        <div
          className="
            grid
            gap-12
            py-16
            sm:py-20
            lg:grid-cols-12
            lg:gap-10
          "
        >

          {/* ========================================================
              BRAND
              ======================================================== */}

          <div className="lg:col-span-4">
            <FadeUp delay={0.1} distance={18}>
              <Link
                href="/"
                aria-label="Dadaal home"
                className="inline-flex items-center"
              >
                <span
                  className="
                    font-heading
                    text-3xl
                    font-bold
                    tracking-tight
                    text-white
                  "
                >
                  DADAAL
                </span>

                <span className="text-3xl font-bold text-dadaal-green">
                  .
                </span>
              </Link>

              <p
                className="
                  mt-5
                  max-w-sm
                  font-sans
                  text-sm
                  leading-relaxed
                  text-white/45
                "
              >
                An independent youth initiative committed to
                empowering young Somalis through mentorship,
                leadership development, and actionable growth
                pathways.
              </p>

              {/* ==================================================
                  CONTACT DETAILS
                  ================================================== */}

              <div className="mt-8 space-y-3">

                {/* Location */}
                <a
                  href="https://maps.google.com/?q=Mogadishu,Somalia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    font-sans
                    text-sm
                    text-white/45
                    transition-colors
                    hover:text-white
                  "
                  aria-label="View Dadaal location in Mogadishu"
                >
                  <MapPin
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-dadaal-green
                    "
                  />

                  <span>Mogadishu, Somalia</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@dadaal.org"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    font-sans
                    text-sm
                    text-white/45
                    transition-colors
                    hover:text-white
                  "
                  aria-label="Email Dadaal"
                >
                  <Mail
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-dadaal-blue
                    "
                  />

                  <span>info@dadaal.org</span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+25261XXXXXXX"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    font-sans
                    text-sm
                    text-white/45
                    transition-colors
                    hover:text-white
                  "
                  aria-label="Call Dadaal"
                >
                  <Phone
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-dadaal-blue
                    "
                  />

                  <span>+252 61 XXX XXXX</span>
                </a>
              </div>
            </FadeUp>
          </div>

          {/* ========================================================
              NAVIGATION
              ======================================================== */}

          <div
            className="
              grid
              gap-10
              sm:grid-cols-2
              lg:col-span-5
              lg:grid-cols-2
            "
          >
            {footerNavigation.map((column, columnIndex) => (
              <FadeUp
                key={`footer-column-${column.title}-${columnIndex}`}
                delay={0.12 + columnIndex * 0.05}
                distance={18}
              >
                <div>
                  <h3
                    className="
                      font-sans
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-white/80
                    "
                  >
                    {column.title}
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {column.links.map((link, linkIndex) => (
                      <li
                        key={`
                          footer-link-
                          ${column.title}-
                          ${link.label}-
                          ${link.href}-
                          ${linkIndex}
                        `}
                      >
                        <Link
                          href={link.href}
                          className="
                            group
                            inline-flex
                            items-center
                            gap-1.5
                            font-sans
                            text-sm
                            text-white/40
                            transition-colors
                            duration-200
                            hover:text-white
                            focus:outline-none
                            focus-visible:text-white
                          "
                        >
                          <span>{link.label}</span>

                          <ArrowUpRight
                            className="
                              h-3
                              w-3
                              opacity-0
                              transition-all
                              duration-200
                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5
                              group-hover:opacity-60
                            "
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* ========================================================
              JOIN THE MOVEMENT
              ======================================================== */}

          <FadeUp
            delay={0.2}
            distance={18}
            className="lg:col-span-3"
          >
            <div
              className="
                rounded-[1.5rem]
                border
                border-white/10
                bg-white/[0.04]
                p-6
                backdrop-blur-sm
              "
            >
              <span
                className="
                  inline-flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-dadaal-green/10
                  text-dadaal-green
                "
              >
                <Heart className="h-4 w-4" />
              </span>

              <h3
                className="
                  mt-5
                  font-heading
                  text-xl
                  font-bold
                  text-white
                "
              >
                Join the movement
              </h3>

              <p
                className="
                  mt-3
                  font-sans
                  text-sm
                  leading-relaxed
                  text-white/45
                "
              >
                Learn, mentor, collaborate, or help create new
                opportunities for young people.
              </p>

              <Link
                href="#get-involved"
                className="
                  group
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  font-sans
                  text-sm
                  font-semibold
                  text-dadaal-green
                  transition-colors
                  hover:text-dadaal-soft-green
                  focus:outline-none
                  focus-visible:text-dadaal-soft-green
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
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ============================================================
          BOTTOM BAR
          ============================================================ */}

      <div className="border-t border-white/10 bg-black/10">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-4
            px-6
            py-6
            text-[11px]
            text-white/30
            sm:flex-row
            sm:items-center
            sm:justify-between
            lg:px-8
          "
        >
        

          {/* Legal */}
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="
                transition-colors
                hover:text-white/60
                focus:outline-none
                focus-visible:text-white
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="
                transition-colors
                hover:text-white/60
                focus:outline-none
                focus-visible:text-white
              "
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}