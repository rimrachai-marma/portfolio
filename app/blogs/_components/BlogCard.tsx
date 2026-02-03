"use client";

import { Blog } from "@/types";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

interface Props {
  blog: Blog;
  index: number;
}

const BlogCard: React.FC<Props> = ({ blog, index }) => {
  return (
    <motion.div
      className="tablet_portrait:grid grid-cols-[8rem_1fr] gap-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex tablet_portrait:flex-col gap-1 items-center tablet_portrait:items-end text-sm text-gray-500">
        <p>{blog.date}</p>
        <div className="tablet_portrait:hidden w-1 h-1 mx-1 bg-gray-500 rounded-full"></div>
        <p>{blog.timeForReading}</p>
      </div>

      <motion.div
        className="space-y-2.5"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="text-xl tablet_portrait:text-2xl font-semibold text-primary tablet_portrait:leading-none">
          {blog.title}
        </h3>
        <p className="text-secondary-foreground">{blog.description}</p>

        <ul className="flex gap-1 flex-wrap">
          {blog.tags.map((tag, i) => (
            <li
              key={i}
              className="flex items-center gap-1 text-xs font-semibold text-gray-600 dark:text-gray-400 tracking-wide px-2 py-0.5 rounded-full border border-gray-300 dark:border-gray-600"
            >
              {tag}
            </li>
          ))}
        </ul>

        <Link
          className="group text-blue-600 dark:text-blue-400 inline-flex items-center"
          href={blog.slug}
        >
          Read more
          <motion.span
            className="ml-1"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            &#8594;
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default BlogCard;
