"use client";

import { motion } from "motion/react";

import { GithubIcon } from "@/components/icons/GithubIcon";
import { InstaIcon } from "@/components/icons/InstaIcon";
import { LinkinIcon } from "@/components/icons/LinkedinIcon";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="hidden tablet_portrait:flex fixed left-6 bottom-4 z-40 flex-col items-center gap-5"
      >
        <div className="flex flex-col gap-4">
          {[
            {
              icon: GithubIcon,
              href: "https://github.com/rimrachai-marma",
              label: "GitHub",
            },
            {
              icon: LinkinIcon,
              href: "https://www.linkedin.com/in/rimrachai-marma",
              label: "LinkedIn",
            },
            {
              icon: InstaIcon,
              href: "https://www.instagram.com/_rimrachai",
              label: "Instagram",
            },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
            >
              <Icon className="size-5 fill-current" />
            </motion.a>
          ))}
        </div>

        <div className="w-px h-24 bg-gray-400 dark:bg-gray-600" />
      </motion.div>
    </motion.div>
  );
}
