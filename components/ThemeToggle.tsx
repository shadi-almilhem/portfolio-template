"use client";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      className="group rounded-full bg-white/90 px-2 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <Sun className="h-6 w-6  transition  dark:hidden fill-emerald-50 stroke-emerald-500 group-hover:fill-emerald-50 group-hover:stroke-emerald-600" />
      <MoonStar className="hidden h-6 w-6 group-hover:stroke-emerald-400  transition dark:block stroke-emerald-500 fill-emerald-400/10 " />
    </button>
  );
}
