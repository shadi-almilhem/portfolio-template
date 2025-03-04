import { SimpleLayout } from "@/app/components/SimpleLayout";

import SwapTextCard from "../components/swap-text-card";
import { getAllProjects } from "@/lib/sanity-queries";

export const metadata = {
  title: "Projects",
  description: "",
};

export default async function Projects() {
  const projects = await getAllProjects();
  return (
    <SimpleLayout title="My Projects">
      <ul
        role="list"
        className="grid grid-cols-1 gap-16  place-items-center justify-between  sm:grid-cols-2 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <SwapTextCard
            imageSrc={project.thumbnail}
            href={"/projects/" + project.slug}
            key={project.title}
            initialText={project.title}
            finalText={project.description}
          />
        ))}
      </ul>
    </SimpleLayout>
  );
}
