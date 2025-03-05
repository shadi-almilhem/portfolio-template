import { Award } from "lucide-react";
import CertificationItem from "./CertificationItem";
import { Certification } from "@/sanity/lib/client";

export default function Certifications({
  certifications,
}: {
  certifications: Certification[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-8 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="flex items-center text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        <Award className="h-6 w-6 flex-none text-teal-500 dark:text-teal-400" />
        <span className="ml-3">Certifications</span>
      </h2>
      <div className="relative mt-8">
        {/* Timeline line - adjusted position to match dots */}
        <ol className="relative space-y-6">
          {certifications.map((cert, certIndex) => (
            <CertificationItem
              key={certIndex}
              certification={cert}
              index={certIndex}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
