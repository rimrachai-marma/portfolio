import { Blog } from "@/types";
import Link from "next/link";
import React from "react";

interface Props {
  blog: Blog;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <div className="tablet_portrait:grid grid-cols-[8rem_1fr] gap-12">
      <div className="flex tablet_portrait:flex-col gap-1 items-center tablet_portrait:items-end text-sm text-gray-500">
        <p>{blog.date}</p>
        <div className="tablet_portrait:hidden w-1 h-1 mx-1 bg-gray-500 rounded-full"></div>
        <p>{blog.timeForReading}</p>
      </div>
      <div className="space-y-2.5">
        <h3 className="text-xl tablet_portrait:text-2xl font-semibold text-primary tablet_portrait:leading-none">
          {blog.title}
        </h3>
        <p className="text-secondary-foreground">{blog.description}</p>
        <ul className="flex gap-1 flex-wrap">
          {blog.tags.map((tag, index) => (
            <li
              key={index}
              className="flex items-center gap-1 text-xs font-semibold text-gray-600 dark:text-gray-400 tracking-wide px-2 py-0.5 rounded-full border border-gray-300 dark:border-gray-600"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Link
          className="group text-blue-600 dark:text-blue-400"
          href={`#/${blog.slug}`}
        >
          Read more
          <span className="ml-1 group-hover:ml-2 transition-all duration-200 ease-out">
            &#8594;
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
