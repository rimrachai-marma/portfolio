import { Blog } from "@/types/index";
import BlogCard from "./_components/BlogCard";

export default async function Blogs() {
  const blogs: Blog[] = [];

  return (
    <section id="blogs" className="space-y-6">
      <h2 className="text-5xl font-bold text-primary">Blogs</h2>

      <p className="tablet_portrait:text-xl text-secondary-foreground">
        Here&apos;s a collection of my thoughts and ideas. I enjoy writing about
        various topics, and I hope you find them interesting. Feel free to
        explore.
      </p>

      <div className="space-y-8 tablet_portrait:space-y-12 pt-12 border-t border-gray-200 dark:border-gray-700">
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              slug={blog.slug}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              timeForReading={blog.timeForReading}
              tags={blog.tags}
            />
          ))}

        {blogs.length === 0 && (
          <p className="text-secondary-foreground font-light text-lg">
            No blogs available yet. Stay tuned for updates!
          </p>
        )}
      </div>
    </section>
  );
}
