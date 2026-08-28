"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  features?: string[];
}

interface ProgramCardProps {
  program: Program;
  onClick?: () => void;
  href?: string;
}

export function ProgramCard({ program, onClick, href }: ProgramCardProps) {
  const cardContent = (
    <div className="group relative rounded-card bg-white border border-slate-200/80 p-6 shadow-soft hover:shadow-hover hover:border-dadaal-blue/40 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer">
      <div>
        {/* Card Image Container */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 mb-6">
          <Image
            src={program.image}
            alt={program.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dadaal-navy/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Tag Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
            {program.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-badge bg-white/95 backdrop-blur-md text-caption font-semibold text-dadaal-navy shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <h3 className="font-heading text-card font-bold text-dadaal-navy mb-3 group-hover:text-dadaal-blue transition-colors leading-snug">
          {program.title}
        </h3>
        <p className="font-sans text-body text-slate-600 mb-6 leading-relaxed line-clamp-3">
          {program.description}
        </p>

        {/* Highlighted Features List */}
        {program.features && program.features.length > 0 && (
          <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
            {program.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-caption font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-dadaal-green shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer Action */}
      <div className="pt-4 border-t border-slate-100/80 flex items-center justify-between">
        <span className="text-caption font-semibold text-dadaal-blue group-hover:translate-x-0.5 transition-transform">
          View Program Details
        </span>
        <div className="p-2 rounded-full bg-dadaal-soft-blue text-dadaal-blue group-hover:bg-dadaal-blue group-hover:text-white transition-colors">
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{cardContent}</Link>;
  }

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      className="h-full outline-none focus-visible:ring-2 focus-visible:ring-dadaal-blue rounded-card"
    >
      {cardContent}
    </div>
  );
}