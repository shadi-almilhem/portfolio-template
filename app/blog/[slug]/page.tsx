import { ArticleLayout } from "@/components/ArticleLayout";
import { PortableTextComponent } from "@/components/PortableTextComponent";
import { getBlog } from "@/utils/sanity-queries";
import { PortableText } from "@portabletext/react";
import React from "react";
import content from "@/app/content/content.json";
import NotFound from "@/app/not-found";
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const blogPage = content.enableSections.enableBlog;

  if (!blogPage) {
    return <NotFound />;
  }
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <ArticleLayout
      article={{
        title: blog.title,
        date: blog.date,
      }}
    >
      <div className="space-y-6">
        {blog.body && (
          <PortableText value={blog.body} components={PortableTextComponent} />
        )}
        {blog.tags && (
          <div>
            <ul className="mt-2 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ArticleLayout>
  );
}
