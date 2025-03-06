"use client";
import { ArrowUpRight } from "lucide-react";
import SwapText from "./swap-text";
import Image from "next/image";
import { Link } from "next-view-transitions";

interface FlipTextCardProps {
  initialText: string; // This will be the project name
  finalText: string; // This will be the project description
  imageSrc?: string;
  href?: string;
  slug?: string;
  technologies?: string[];
}

export default function SwapTextCard({
  initialText,
  finalText,
  imageSrc = "/api/placeholder/500/400", // Default placeholder if no image is provided
  href,
  slug,
}: FlipTextCardProps) {
  return (
    <Link
      href={href ? href : `/projects/${slug}`}
      className="group relative flex min-h-64 w-full flex-col justify-end  overflow-hidden md:max-w-[500px] duration-400 hover:scale-[1.01]  focus:outline-none focus:ring-2 focus:ring-white  rounded-2xl border-2 border-zinc-100 p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-700/40 dark:bg-zinc-800/20"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={`${initialText} background`}
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Gradient overlay for better text readability - stronger at bottom */}
        <div className="absolute inset-0  bg-gradient-to-t from-black/80  to-transparent" />
      </div>

      {/* Card Content - Now positioned at the bottom with padding */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col md:min-w-72">
          <div className="md:hidden">
            <div className="text-xl font-semibold text-white">
              {initialText}
            </div>
            <div className="text-sm font-medium text-gray-200">{finalText}</div>
          </div>
          <SwapText
            initialText={initialText}
            finalText={finalText}
            disableClick
            className="-mb-8 hidden min-h-20 w-full transition-all duration-400 group-hover:mb-0 md:flex md:flex-col"
            initialTextClassName="text-xl group-hover:opacity-0 h-full duration-400 font-semibold text-white"
            finalTextClassName="text-sm h-full duration-400 font-medium text-gray-200"
          />
        </div>
      </div>

      {/* Subtle hover indicator */}
      <div className="absolute bottom-4 right-4  ">
        <ArrowUpRight className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:-translate-y-1  group-hover:translate-x-1  group-hover:opacity-100 rotate-0" />
      </div>
    </Link>
  );
}
