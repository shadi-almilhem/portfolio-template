import { SimpleLayout } from "@/app/components/SimpleLayout";
import BlogCard from "@/app/components/blog-card";
import { getAllBlogs } from "@/utils/sanity-queries";
import BlurFade from "../components/blur-fade";
import Pagination from "@/app/components/pagination";
import { Suspense } from "react";
import content from "@/app/content/content.json";
export const metadata = {
  title: `Blog | ${content.name} - ${content.roleDescription}`,
  description: `Explore the blog of ${content.name}, a ${content.roleDescription}. Discover articles and insights.`,
  keywords: `blog, articles, ${content.name}, ${content.roleDescription}`,
  openGraph: {
    title: `Blog | ${content.name} - ${content.roleDescription}`,
    description: `Explore the blog of ${content.name}, a ${content.roleDescription}. Discover articles and insights.`,
  },
  twitter: {
    title: `Blog | ${content.name} - ${content.roleDescription}`,
    description: `Explore the blog of ${content.name}, a ${content.roleDescription}. Discover articles and insights.`,
  },
};

export default async function Blog({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const postsPerPage = 6;

  const blogs = await getAllBlogs();

  // Calculate pagination values
  const totalPosts = blogs.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Get current page posts
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogs.slice(startIndex, endIndex);

  return (
    <BlurFade>
      <SimpleLayout title="Blog">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-10">
          {currentPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              date={post.date}
              tags={post.tags}
              href={"/blog/" + post.slug}
            />
          ))}
        </div>

        <Suspense
          fallback={
            <div className="h-10 w-full bg-gray-100 animate-pulse rounded-md"></div>
          }
        >
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            baseUrl="/blog"
          />
        </Suspense>
      </SimpleLayout>
    </BlurFade>
  );
}
