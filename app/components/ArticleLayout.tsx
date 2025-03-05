/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import { AppContext } from "@/app/providers";
import { Container } from "@/app/components/Container";
import { Prose } from "@/app/components/Prose";
import { formatDate } from "@/lib/formatDate";

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArticleLayout({ article, children }: any) {
  const router = useRouter();
  const { previousPathname = "" } = useContext(AppContext) as {
    previousPathname?: string;
  };

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-4xl pt-16">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition  dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 md:text-5xl dark:text-zinc-100">
                {article.title}
              </h1>
              {article.date && (
                <time
                  dateTime={article.date}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">
                    {formatDate(article.date as string) as React.ReactNode}
                  </span>
                </time>
              )}
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  );
}
