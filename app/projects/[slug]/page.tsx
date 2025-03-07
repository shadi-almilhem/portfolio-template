import { ArticleLayout } from "@/app/components/ArticleLayout";
import { PortableTextComponent } from "@/app/components/PortableTextComponent";
import NotFound from "@/app/not-found";
import { getProject } from "@/utils/sanity-queries";
import { PortableText } from "next-sanity";
import React from "react";
import content from "@/app/content/content.json";
export default async function ProjectPost({
  params,
}: {
  params: { slug: string };
}) {
  if (!content.enableSections.enableProjects) {
    return <NotFound />;
  }
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ArticleLayout
      article={{
        title: project.title,
      }}
    >
      <div className="space-y-6">
        {project.description && (
          <p className="text-black dark:text-white">{project.description}</p>
        )}
        {project.body && (
          <PortableText
            value={project.body}
            components={PortableTextComponent}
          />
        )}
        {project.technologies && (
          <div>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ArticleLayout>
  );
}
