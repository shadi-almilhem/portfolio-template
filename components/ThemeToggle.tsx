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
      className="group rounded-full bg-gradient-to-br bg-white/90 px-2 py-2 shadow-xl  ring-1 ring-zinc-900/5 backdrop-blur  dark:bg-zinc-800/90 transition-all duration-300 dark:shadow-emerald-500/30 shadow-emerald-500/10  dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <Sun className="size-6  transition-all duration-300  dark:hidden fill-emerald-100 stroke-emerald-500 group-hover:fill-emerald-50 group-hover:stroke-emerald-500/80" />
      <MoonStar className="hidden size-6 group-hover:stroke-emerald-400   transition-all duration-300 dark:block stroke-emerald-500 !fill-emerald-400/20 " />
    </button>
  );
}
