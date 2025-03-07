import { SimpleLayout } from "@/app/components/SimpleLayout";
import SwapTextCard from "../components/swap-text-card";
import { getAllProjects } from "@/utils/sanity-queries";
import BlurFade from "../components/blur-fade";
import Pagination from "@/app/components/pagination";
import { Suspense } from "react";
import content from "@/app/content/content.json";
import NotFound from "../not-found";
export const metadata = {
  title: `Projects | ${content.name} - Portfolio`,
  description: `View the portfolio of ${content.name}, showcasing their work and skills.`,
  keywords: `projects, portfolio, ${content.name}`,
  openGraph: {
    title: `Projects | ${content.name} - Portfolio`,
    description: `View the portfolio of ${content.name}, showcasing their work and skills.`,
  },
  twitter: {
    title: `Projects | ${content.name} - Portfolio`,
    description: `View the portfolio of ${content.name}, showcasing their work and skills.`,
  },
};

export default async function Projects({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  if (!content.enableSections.enableProjects) {
    return <NotFound />;
  }
  const awaitedSearchParams = await searchParams;

  const currentPage = Number(awaitedSearchParams.page) || 1;
  const projectsPerPage = 6;

  const projects = await getAllProjects();

  // Calculate pagination values
  const totalProjects = projects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  // Get current page projects
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  return (
    <BlurFade>
      <SimpleLayout title="My Projects">
        <ul
          role="list"
          className="grid grid-cols-1 gap-16 place-items-center justify-between sm:grid-cols-2 lg:grid-cols-2 mb-10"
        >
          {currentProjects.map((project) => (
            <SwapTextCard
              imageSrc={project.thumbnail}
              href={"/projects/" + project.slug}
              key={project.title}
              initialText={project.title}
              finalText={project.description}
            />
          ))}
        </ul>

        <Suspense
          fallback={
            <div className="h-10 w-full bg-gray-100 animate-pulse rounded-md"></div>
          }
        >
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            baseUrl="/projects"
          />
        </Suspense>
      </SimpleLayout>
    </BlurFade>
  );
}
