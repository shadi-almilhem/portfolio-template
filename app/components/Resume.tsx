/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowDownIcon, BriefcaseIcon } from "lucide-react";
import Role from "./Role";
import { Button } from "./Button";

export default function Experience({ experiences }: any) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-8 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="flex items-center text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none text-indigo-500 dark:text-indigo-400" />
        <span className="ml-3">Professional Experience</span>
      </h2>
      <ol className="mt-8 space-y-6">
        {experiences.map((role: any, roleIndex: any) => (
          <Role key={roleIndex} role={role} index={roleIndex} />
        ))}
      </ol>
      <Button
        href="#"
        variant="secondary"
        className="group font-semibold mt-8 w-full bg-zinc-100 py-3 text-sm  text-zinc-800 transition-all hover:bg-zinc-200 dark:bg-zinc-700/80 dark:text-zinc-200 dark:hover:bg-zinc-700"
      >
        Download CV
        <ArrowDownIcon className="ml-2 h-4 w-4 stroke-zinc-500 transition group-hover:translate-y-0.5 dark:stroke-zinc-400" />
      </Button>
    </div>
  );
}
