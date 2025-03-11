/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from "@portabletext/react";

export default function Role({ role, index = 0 }: any) {
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
  const dotColor = colors[(index * 2 + 1) % colors.length];
  return (
    <li
      className={`relative pl-5 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full ${dotColor}`}
    >
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-base font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {role.jobTitle}
        </dd>
        {role.description && (
          <>
            <dt className="sr-only">Description</dt>
            <dd className="mt-2 w-full text-sm text-zinc-500 dark:text-zinc-400">
              <PortableText value={role.description} />
            </dd>
          </>
        )}
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto mt-1 text-xs font-medium text-zinc-400 dark:text-zinc-500"
          aria-label={`${role.startDate} until ${role.isCurrentPosition ? "present" : role.endDate}`}
        >
          <time dateTime={role.startDate}>{role.startDate}</time>
          {"  "}
          <span aria-hidden="true"> — </span>
          {"  "}
          {role.isCurrentPosition ? (
            <span>Present</span>
          ) : (
            <time dateTime={role.endDate}>{role.endDate}</time>
          )}
        </dd>
      </dl>
    </li>
  );
}
