"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { ImageOff } from "lucide-react";

interface FallbackImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export function FallbackImage({
  src,
  alt,
  fallbackSrc = "/images/placeholder.jpeg",
  ...props
}: FallbackImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center p-4 text-slate-400">
        <ImageOff className="w-8 h-8 mb-2" />
        <span className="text-caption text-center font-medium">Image unavailable</span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      onError={() => setError(true)}
    />
  );
}