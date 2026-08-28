"use client";

import Image from "next/image";
import { Calendar, MapPin, Tag } from "lucide-react";

export interface EventItem {
  id: string;
  type?: string;
  title: string;
  date: string;
  location: string;
  image: string;
  status: "Upcoming" | "Completed" | "Registration Open";
}

interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  const isUpcoming = event.status === "Registration Open" || event.status === "Upcoming";

  return (
    <div className="group rounded-card bg-white border border-slate-200/80 overflow-hidden shadow-soft hover:shadow-hover hover:border-dadaal-green/40 transition-all duration-300 flex flex-col h-full">
      
      {/* Event Image & Badges */}
      <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dadaal-navy/70 via-dadaal-navy/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
        
        {/* Type Badge (Left) */}
        {event.type && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-badge text-caption font-semibold bg-dadaal-navy/80 text-white backdrop-blur-md border border-white/20">
              {event.type}
            </span>
          </div>
        )}

        {/* Status Pill Badge (Right) */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-badge text-caption font-semibold backdrop-blur-md shadow-sm ${
              isUpcoming
                ? "bg-dadaal-soft-green/95 text-dadaal-green-dark border border-dadaal-green/30"
                : "bg-white/90 text-slate-600 border border-slate-200"
            }`}
          >
            {event.status}
          </span>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-heading text-lg font-bold text-dadaal-navy mb-3 group-hover:text-dadaal-blue transition-colors line-clamp-2 leading-snug">
            {event.title}
          </h3>
        </div>

        {/* Event Meta Info */}
        <div className="space-y-2 pt-4 border-t border-slate-100 text-caption font-sans text-slate-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-dadaal-blue shrink-0" />
            <span className="font-medium text-slate-700">{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-dadaal-blue shrink-0" />
            <span className="truncate font-medium text-slate-700">{event.location}</span>
          </div>
        </div>
      </div>

    </div>
  );
}