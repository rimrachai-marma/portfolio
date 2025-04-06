import BlogCard from "./_components/BlogCard";

export default async function Blogs() {
  return (
    <section id="blogs" className="space-y-6">
      <h2 className="text-5xl font-bold text-primary">Blogs</h2>

      <p className="tablet_portrait:text-xl text-secondary-foreground">
        Here&apos;s a collection of my thoughts and ideas. I enjoy writing about
        various topics, and I hope you find them interesting. Feel free to
        explore.
      </p>

      <div className="space-y-8 tablet_portrait:space-y-12 pt-12 border-t border-gray-200 dark:border-gray-700">
        <BlogCard
          title="How to create a blog using Next.js"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac odio tempus, ultricies nunc nec, tincidunt nunc. Donec ac odio tempus, ultricies nunc nec, tincidunt nunc."
          date="July 12, 2021"
          timeForReading="5 min read"
          tags={["#next.js", "#react", "#javascript"]}
          slug="how-to-create-a-blog-using-next-js"
        />

        <BlogCard
          title="How to create a blog using Next.js"
          description="A step-by-step guide to creating a blog using Next.js. This is a long description to see how it looks on the page. This is a long description to see how it looks on the page. This is a long description to see how it looks on the page. This is a long description to see how it looks on the page."
          date="February 6, 2025"
          timeForReading="5 min read"
          tags={["#next.js", "#react", "#javascript"]}
          slug="how-to-create-a-blog-using-next-js"
        />

        <BlogCard
          title="How to create a blog using Next.js"
          description="A step-by-step guide to creating a blog using Next.js."
          date="December 12, 2021"
          timeForReading="5 min read"
          tags={["#next.js", "#react", "#javascript"]}
          slug="how-to-create-a-blog-using-next-js"
        />

        <BlogCard
          title="How to create a blog using Next.js"
          description="A step-by-step guide to creating a blog using Next.js. This is a long description to see how it looks on the page. This is a long description to see how it looks on the page. This is a long description to see how it looks on the page."
          date="September 6, 2025"
          timeForReading="5 min read"
          tags={["#next.js", "#react", "#javascript"]}
          slug="how-to-create-a-blog-using-next-js"
        />
      </div>
    </section>
  );
}
