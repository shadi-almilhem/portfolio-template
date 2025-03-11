/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import clsx from "clsx";
import content from "@/app/content/content.json";
import { Container } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/SocialIcons";
import BlurFade from "../../components/blur-fade";
function SocialLink({ className, href, children, icon: Icon }: any) {
  return (
    <li
      className={clsx(
        className,
        "group flex items-center transition-all duration-300"
      )}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className="flex items-center text-sm font-medium text-zinc-600 transition-colors duration-300 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-500"
      >
        <Icon className="h-5 w-5 flex-none fill-zinc-500 transition-colors duration-300 group-hover:fill-emerald-500" />
        <span className="ml-3">{children}</span>
      </a>
    </li>
  );
}

function MailIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata = {
  title: `About | ${content.name}`,
  description: `Learn more about ${content.name}, a ${content.roleDescription}. Discover their background and story.`,
  keywords: `about, biography, ${content.name}, ${content.roleDescription}`,
  openGraph: {
    title: `About | ${content.name}`,
    description: `Learn more about ${content.name}, a ${content.roleDescription}. Discover their background and story.`,
  },
  twitter: {
    title: `About | ${content.name}`,
    description: `Learn more about ${content.name}, a ${content.roleDescription}. Discover their background and story.`,
  },
};

export default function About() {
  return (
    <BlurFade>
      <Container className=" mb-24 pt-60">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-12 border-b-2 border-zinc-100 pb-16 dark:border-zinc-700/40">
            <div className="flex items-center flex-col md:flex-row md:items-end gap-8">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
                {content.about.heading}
              </h1>
              <picture>
                <source srcSet="/portrait.webp" type="image/webp" />
                <source srcSet="/portrait.jpg" type="image/jpeg" />

                <source srcSet="/portrait.png" type="image/png" />
                <Image
                  src="/portrait.jpg"
                  alt="portrait picture"
                  width={500}
                  height={500}
                  className="relative max-w-full aspect-square rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </picture>
            </div>
          </div>

          {/* Content section - spans 7 columns on large screens */}
          <div className="lg:col-span-7">
            <div className="mt-8 space-y-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {Object.values(content.about.paragraph).map(
                (paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </div>
          </div>

          {/* Image and social links - spans 5 columns on large screens */}
          <div className="lg:col-span-5">
            <div className="flex flex-col items-center lg:items-start space-y-12">
              {/* Image container with subtle shadow and no rotation */}
              <div className="relative w-full max-w-xs"></div>

              {/* Social links with simplified design */}
              <div className="w-full">
                <ul role="list" className="flex flex-col space-y-3">
                  {content.hero.X && (
                    <SocialLink href={content.hero.X} icon={XIcon}>
                      Follow on X
                    </SocialLink>
                  )}
                  {content.hero.Instagram && (
                    <SocialLink
                      href={content.hero.Instagram}
                      icon={InstagramIcon}
                    >
                      Follow on Instagram
                    </SocialLink>
                  )}
                  {content.hero.GitHub && (
                    <SocialLink href={content.hero.GitHub} icon={GitHubIcon}>
                      Follow on GitHub
                    </SocialLink>
                  )}
                  {content.hero.LinkedIn && (
                    <SocialLink
                      href={content.hero.LinkedIn}
                      icon={LinkedInIcon}
                    >
                      Follow on LinkedIn
                    </SocialLink>
                  )}
                  <li className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <a
                      href={`mailto:${content.hero.email}`}
                      className="group flex items-center text-sm font-medium text-zinc-600 transition-colors duration-300 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-500"
                    >
                      <MailIcon className="h-5 w-5 flex-none fill-zinc-500 transition-colors duration-300 group-hover:fill-emerald-500" />
                      <span className="ml-3">{content.hero.email}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </BlurFade>
  );
}
