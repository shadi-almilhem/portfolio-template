/* eslint-disable @typescript-eslint/no-explicit-any */
import { BriefcaseIcon } from "lucide-react";
import Role from "./Role";

export default function Experience({ experiences }: any) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-[hsl(0,0%,100%)] p-8 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="flex items-center text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none text-indigo-500 dark:text-indigo-400" />
        <span className="ml-3">Professional Experience</span>
      </h2>
      <ol className="mt-8 space-y-6">
        {experiences.map((role: any, roleIndex: any) => (
          <Role key={roleIndex} role={role} index={roleIndex} />
        ))}
      </ol>
    </div>
  );
}
