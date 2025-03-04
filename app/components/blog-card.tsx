"use client";

import { cn } from "@/utils/cn";
import { Button } from "./Button";
import { formatDate } from "@/lib/formatDate";

interface BlogCardProps {
  title: string;
  date: string;
  tags: string[];
  href?: string;
  className?: string;
}

export default function BlogCard({
  title,
  date,
  tags,
  href,
  className,
}: BlogCardProps) {
  return (
    <div
      className={cn(
        "relative flex border border-zinc-100 dark:border-zinc-700/40 flex-col overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-md dark:hover:shadow-black/20",
        className
      )}
    >
      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6 justify-between">
        {/* Date */}
        <div className="flex flex-col gap-2">
          <div className="mb-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
            {formatDate(date as string) as React.ReactNode}
          </div>

          {/* Title */}
          <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
            {title}
          </h2>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-light tracking-wide text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* Read More Button */}
        <div className="relative rounded-md w-full">
          <Button
            href={href}
            variant="secondary"
            className="font-semibold relative z-10 w-full bg-zinc-100 py-3 text-sm text-zinc-800 transition-all hover:bg-zinc-200 dark:bg-zinc-700/80 dark:text-zinc-200 dark:hover:bg-zinc-700"
          >
            Read Article
          </Button>
        </div>
      </div>
    </div>
  );
}
