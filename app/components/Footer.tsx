import { Link } from "next-view-transitions";

import { ContainerInner, ContainerOuter } from "@/app/components/Container";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NavLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className="transition hover:text-violet-500 dark:hover:text-violet-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none max-w-7xl w-full  px-8 ">
      <ContainerOuter>
        <div className="border-t  dark:bg-zinc-900 border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>

                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/blog">Blog</NavLink>
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
