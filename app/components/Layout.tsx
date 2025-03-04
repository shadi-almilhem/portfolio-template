"use client";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { usePathname } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Layout({ children }: any) {
  const isStudioRoute = usePathname().startsWith("/studio");
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        {!isStudioRoute ? (
          <>
            <Header />
            <main className="flex-auto">{children}</main>
            <Footer />
          </>
        ) : (
          <main className="flex-auto">{children}</main>
        )}
      </div>
    </>
  );
}
