import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/app/providers";
import { Layout } from "@/app/components/Layout";
import { DM_Sans } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import content from "@/app/content/content.json";
const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  adjustFontFallback: true,
  preload: true,
});

export const metadata: Metadata = {
  title: content.name,
  description: content.roleDescription,
  openGraph: {
    title: `${content.name}`,
    description: content.roleDescription,
    siteName: `${content.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: `${content.name}`,
    card: "summary_large_image",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`h-full tracking-tight antialiased `}
        suppressHydrationWarning
      >
        <body
          className={`flex h-full bg-zinc-50 dark:bg-black ${dm_sans.className}`}
        >
          <Providers>
            <div className="flex w-full">
              <Layout>{children}</Layout>
            </div>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
