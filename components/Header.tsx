"use client";

import React from "react";
import Link from "next/link";
import Typed from "typed.js";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { ChevronIcon } from "./icons/ChevronIcon";
import { FolderOpenIcon } from "./icons/FolderOpenIcon";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkinIcon } from "./icons/LinkedinIcon";
import { InstaIcon } from "./icons/InstaIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { useTheme } from "./providers/ThemeProvider";
import { WhatsappIcon } from "./icons/WhatsappIcon";

const Header: React.FC = () => {
  const pathname = usePathname();
  const ref = React.useRef<HTMLSpanElement>(null);
  const menuRef = React.useRef<HTMLInputElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { theme, toggleTheme } = useTheme();

  const handleNavClick = () => {
    setIsMenuOpen(false);
    if (menuRef.current) {
      menuRef.current.checked = false;
    }
  };

  React.useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: [pathname.split("/").pop() as string],
      cursorChar: "",
      typeSpeed: 30,
    });

    return () => {
      typed.destroy();
    };
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 mt-4 pt-4 z-50"
    >
      <div className="container max-w-5xl mx-auto px-2 tablet_portrait:px-12 group">
        <motion.nav
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 px-5 border border-gray-400 dark:border-gray-600 rounded-2xl shadow-md shadow-black/5 backdrop-blur-xl"
        >
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center justify-between gap-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="font-jetbrains-mono font-bold text-lg text-primary tracking-wider hover:text-secondary outline-hidden transition-colors duration-300"
                  href="/"
                >
                  rimrachai&#64;
                </Link>
              </motion.div>

              <ChevronIcon className="hidden tablet_portrait:block h-5.5 w-auto fill-current" />

              <AnimatePresence mode="wait">
                {pathname === "/" ? (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HomeIcon className="hidden tablet_portrait:block h-6 w-auto fill-current" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="folder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FolderOpenIcon className="hidden tablet_portrait:block h-6 w-auto fill-current" />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="inline-flex items-center font-bold tracking-wide capitalize font-jetbrains-mono">
                <span>&nbsp;~/</span>
                <span ref={ref} />
              </div>
            </div>

            <div className="flex items-center justify-between gap-8">
              <ul className="hidden tablet_portrait:flex justify-center items-center gap-4 font-medium tracking-wide">
                {[
                  { label: "About", href: "/about" },
                  { label: "Projects", href: "/projects" },
                  { label: "Blogs", href: "/blogs" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ y: -2 }}
                  >
                    <Link className="nav-link" href={item.href}>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center justify-between gap-3">
                <motion.button
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={
                    theme === "dark"
                      ? "Switch to light mode"
                      : "Switch to dark mode"
                  }
                  className="flex justify-center items-center h-8 w-8 border border-gray-400 dark:border-gray-600 rounded-md hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
                >
                  <AnimatePresence mode="wait">
                    {theme === "light" ? (
                      <motion.div
                        key="moon"
                        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <MoonIcon className="h-4 w-auto fill-current" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sun"
                        initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <SunIcon className="h-4 w-auto fill-current" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                <motion.label
                  htmlFor="menu"
                  whileTap={{ scale: 0.9 }}
                  className="flex tablet_portrait:hidden justify-center items-center h-8 w-8 border border-gray-400 dark:border-gray-600 rounded-md hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
                >
                  <input
                    ref={menuRef}
                    id="menu"
                    type="checkbox"
                    className="peer"
                    hidden
                    onChange={(e) => setIsMenuOpen(e.target.checked)}
                  />
                  <span className="w-5 h-1 bg-current rounded-2xs transition-transform before:bg-current after:bg-current before:content-[''] after:content-[''] before:absolute after:absolute before:w-5 after:w-5 before:h-1 after:h-1 before:-translate-y-[0.45rem] after:translate-y-[0.45rem] before:rounded-2xs after:rounded-2xs before:transition-transform after:transition-transform peer-checked:before:translate-y-0 peer-checked:after:translate-y-0 peer-checked:before:rotate-45 peer-checked:after:-rotate-45 peer-checked:bg-transparent"></span>
                </motion.label>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "75vh", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="tablet_portrait:hidden overflow-hidden border-t border-gray-400 dark:border-gray-600"
              >
                <motion.div
                  className="pt-10 pb-4 flex flex-col justify-between h-full"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                >
                  <ul className="flex flex-col items-center gap-5 text-xl font-semibold tracking-wider">
                    {[
                      { label: "About", href: "/about" },
                      { label: "Projects", href: "/projects" },
                      { label: "Blogs", href: "/blogs" },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={{
                          open: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              y: { stiffness: 1000, velocity: -100 },
                            },
                          },
                          closed: {
                            y: 50,
                            opacity: 0,
                            transition: {
                              y: { stiffness: 1000 },
                            },
                          },
                        }}
                        whileHover={{ scale: 1.1, color: "var(--primary)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link href={item.href} onClick={handleNavClick}>
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    className="flex justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 }}
                  >
                    {[
                      {
                        Icon: GithubIcon,
                        href: "https://github.com/rimrachai-marma",
                        label: "GitHub",
                      },
                      {
                        Icon: LinkinIcon,
                        href: "https://www.linkedin.com/in/rimrachai-marma",
                        label: "LinkedIn",
                      },
                      {
                        Icon: WhatsappIcon,
                        href: "https://wa.me/+8801581568089",
                        label: "WhatsApp",
                      },
                      {
                        Icon: InstaIcon,
                        href: "https://www.instagram.com/_rimrachai",
                        label: "Instagram",
                      },
                    ].map(({ Icon, href, label }, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Link href={href} aria-label={label}>
                          <Icon className="fill-gray-700 dark:fill-gray-300 h-6 w-auto" />
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
