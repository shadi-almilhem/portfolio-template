/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "next-view-transitions";

import { ContainerInner, ContainerOuter } from "@/app/components/Container";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NavLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className="transition hover:text-emerald-500 dark:hover:text-emerald-400"
    >
      {children}
    </Link>
  );
}

export function Footer({ enableSections }: any) {
  return (
    <footer className="mt-32 flex-none  w-full  px-8 ">
      <ContainerOuter>
        <div className="  dark:bg-zinc-900 bg-white  pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                {enableSections?.enableProjects && (
                  <NavLink href="/projects">Projects</NavLink>
                )}
                {enableSections?.enableBlog && (
                  <NavLink href="/blog">Blog</NavLink>
                )}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Name. All rights reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
