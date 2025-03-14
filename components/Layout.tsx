"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { usePathname } from "next/navigation";
import content from "@/app/content/content.json";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Layout({ children }: any) {
  const enableSections = content.enableSections;
  const isStudioRoute = usePathname().startsWith("/studio");
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-[90rem] lg:px-8">
          <div
            suppressHydrationWarning
            className="w-full -z-50 bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 
  bg-[length:200px_200px] 
  [background-image:linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]
  dark:[background-image:linear-gradient(to_right,rgba(212,212,216,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,212,216,0.015)_1px,transparent_1px)]"
          />
        </div>
      </div>
      <div className="relative  items-center z-50 flex w-full flex-col">
        {!isStudioRoute ? (
          <>
            <Header enableSections={enableSections} />
            <main className="flex-auto">{children}</main>
            <Footer enableSections={enableSections} />
          </>
        ) : (
          <main className="flex-auto">{children}</main>
        )}
      </div>
    </>
  );
}
