import { SimpleLayout } from "@/app/components/SimpleLayout";
import BlogCard from "@/app/components/blog-card";
import { getAllBlogs } from "@/utils/sanity-queries";
import BlurFade from "../components/blur-fade";

export const metadata = {
  title: "Blog",
  description: "Thoughts on programming, design, and more.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  return (
    <BlurFade>
      <SimpleLayout title="Blog">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 ">
          {blogs.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              date={post.date}
              tags={post.tags}
              href={"/blog/" + post.slug}
            />
          ))}
        </div>
      </SimpleLayout>
    </BlurFade>
  );
}
