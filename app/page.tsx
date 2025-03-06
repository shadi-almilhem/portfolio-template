/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "next-view-transitions";
import { Container } from "@/app/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/app/components/SocialIcons";
import content from "@/app/content/content.json";
import Certifications from "./components/Certifications";
import SwapTextCard from "./components/swap-text-card";
import BlogCard from "./components/blog-card";
import { GridBeam } from "./components/GridBeam";
import Skills from "./components/Skills";
import {
  getAllBlogs,
  getAllCertifications,
  getAllExperiences,
  getAllProjects,
} from "@/utils/sanity-queries";
import Experience from "./components/Resume";
import BlurFade from "./components/blur-fade";

function SocialLink({
  icon: Icon,
  ...props
}: {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  "aria-label": string;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}
export default async function Home() {
  const projects = await getAllProjects();
  const blogs = await getAllBlogs();
  const experiences = await getAllExperiences();
  const certifications = await getAllCertifications();
  return (
    <>
      <BlurFade>
        <Container className="pt-60">
          <GridBeam className="max-w-2xl">
            <div className="relative">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                {content.hero.jobTitle}
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {content.hero.about}
              </p>
              <div className="mt-6 flex gap-6 ">
                <SocialLink
                  href={content.hero.X}
                  aria-label="Follow on X"
                  icon={XIcon}
                />
                <SocialLink
                  href={content.hero.Instagram}
                  aria-label="Follow on Instagram"
                  icon={InstagramIcon}
                />
                <SocialLink
                  href={content.hero.GitHub}
                  aria-label="Follow on GitHub"
                  icon={GitHubIcon}
                />
                <SocialLink
                  href={content.hero.LinkedIn}
                  aria-label="Follow on LinkedIn"
                  icon={LinkedInIcon}
                />
              </div>
            </div>
          </GridBeam>
        </Container>
      </BlurFade>
      <BlurFade>
        <Container className="mt-24 md:mt-28">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-4  justify-between">
              {projects.slice(0, 3).map((project, index) => (
                <SwapTextCard
                  key={index}
                  imageSrc={
                    typeof project.thumbnail === "object"
                      ? (project.thumbnail as any)?.asset?.url
                      : project.thumbnail
                  }
                  href={"/projects/" + project.slug}
                  initialText={project.title}
                  finalText={project.description}
                />
              ))}
            </div>
            <div className="space-y-10 lg:pl-16 xl:pl-24 ">
              <Experience experiences={experiences} />
            </div>
          </div>
        </Container>
      </BlurFade>
      <BlurFade>
        <Container className="mt-24 md:mt-28">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col justify-between gap-4">
              {blogs.slice(0, 3).map((blog, index) => (
                <BlogCard
                  key={index}
                  title={blog.title}
                  date={blog.date}
                  tags={blog.tags}
                  href={"/blog/" + blog.slug}
                />
              ))}
            </div>
            <div className="space-y-10 lg:pl-16 xl:pl-24  ">
              <Certifications certifications={certifications} />
            </div>
          </div>
        </Container>
      </BlurFade>
      <BlurFade>
        <Container className="mt-24 md:mt-28">
          <Skills />
        </Container>
      </BlurFade>
    </>
  );
}
