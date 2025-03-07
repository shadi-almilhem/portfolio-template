/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import content from "@/app/content/content.json";
import clsx from "clsx";

import { Container } from "@/app/components/Container";
import Avatar from "./Avatar";
import { MobileNavigation } from "./mobile-nav";
import { ThemeToggle } from "./ThemeToggle";

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition-all duration-300",
          isActive
            ? "text-emerald-500 dark:text-emerald-400"
            : "hover:text-emerald-500 dark:hover:text-emerald-400"
        )}
      >
        {children}
        {isActive && (
          <>
            <span className="absolute inset-x-2 -bottom-px h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/40  to-emerald-500/0 dark:from-emerald-400/0 dark:via-emerald-400/40 dark:to-emerald-400/0 blur-[1px]" />
            <span className="absolute inset-x-2 blur-[6px] top-2 h-[2px] bg-gradient-to-r from-emerald-600/0 via-emerald-600/60  to-emerald-600/0 dark:from-emerald-400/0 dark:via-emerald-400/50 dark:to-emerald-400/0" />
          </>
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation({
  enableSections,
  ...props
}: {
  enableSections?: any;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full gap-2 bg-white/90 py-1 px-1 text-sm font-medium text-zinc-800 shadow-sm shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/about">About</NavItem>
        {enableSections?.enableProjects && (
          <NavItem href="/projects">Projects</NavItem>
        )}
        {enableSections?.enableBlog && <NavItem href="/blog">Blog</NavItem>}

        <a
          href={"mailto:" + content.hero.email}
          className="text-zinc-800 flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100  dark:text-zinc-200 dark:bg-zinc-700  bg-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-600/80 transition-all duration-300 rounded-full px-4 py1 font-semibold"
        >
          Get Contact
        </a>
      </ul>
    </nav>
  );
}

export function Header({ enableSections }: { enableSections: any }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we're scrolled past threshold
      setIsScrolled(currentScrollY > 50);
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 250) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    handleScroll(); // Check initial scroll position
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-transform duration-300 ${
        !isVisible ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Container className="py-6">
        <div
          className={clsx(
            "flex items-center justify-between gap-4 px-0  py-1 rounded-full transition-all duration-300",
            isScrolled
              ? "bg-white/60 dark:bg-zinc-900/80 backdrop-blur-sm shadow-sm border border-zinc-200/50 dark:border-zinc-700/50 md:px-2 px-1"
              : "border border-transparent"
          )}
        >
          <div className="flex items-center">
            <Avatar />
          </div>

          <div className="flex flex-1 justify-end md:justify-center">
            <MobileNavigation
              enableSections={enableSections}
              className="pointer-events-auto md:hidden"
            />
            <DesktopNavigation
              enableSections={enableSections}
              className="pointer-events-auto hidden md:block"
            />
          </div>

          <div className="flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
