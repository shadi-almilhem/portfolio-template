/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function CertificationItem({ certification, index = 0 }: any) {
  const [isHovered, setIsHovered] = useState(false);

  const colors = [
    "before:bg-emerald-500 dark:before:bg-emerald-400",
    "before:bg-indigo-500 dark:before:bg-indigo-400",
    "before:bg-amber-500 dark:before:bg-amber-400",
    "before:bg-teal-500 dark:before:bg-teal-400",
    "before:bg-violet-500 dark:before:bg-violet-400",
    "before:bg-cyan-500 dark:before:bg-cyan-400",
    "before:bg-pink-500 dark:before:bg-pink-400",
    "before:bg-sky-500 dark:before:bg-sky-400",
    "before:bg-blue-500 dark:before:bg-blue-400",

    "before:bg-red-500 dark:before:bg-red-400",
    "before:bg-orange-500 dark:before:bg-orange-400",

    "before:bg-yellow-500 dark:before:bg-yellow-400",
    "before:bg-lime-500 dark:before:bg-lime-400",
    "before:bg-green-500 dark:before:bg-green-400",

    "before:bg-purple-500 dark:before:bg-purple-400",
    "before:bg-fuchsia-500 dark:before:bg-fuchsia-400",

    "before:bg-rose-500 dark:before:bg-rose-400",
  ];

  // Get color based on index or some property of the role
  const dotColor = colors[index % colors.length];

  return (
    <li
      className="relative flex gap-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline dot - centered in its container */}
      <div className="relative flex h-6 w-6 flex-none items-center justify-center">
        <div
          className={`h-2.5 w-2.5  before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full rounded-full ${dotColor}`}
          suppressHydrationWarning
        />
      </div>
      <div className="flex-auto">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
            {certification.name}
          </h3>
          <a
            href={certification.credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <ArrowUpRight className="h-4 w-4 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200" />
          </a>
        </div>
        <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          <span className="font-medium">{certification.issuer}</span>
          <span className="mx-2 text-zinc-400 dark:text-zinc-500">·</span>
          <span>{certification.date}</span>
        </div>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {certification.description}
        </p>
      </div>
    </li>
  );
}
