"use client";

import React from "react";
import Link from "next/link";
import Typed from "typed.js";
import { usePathname } from "next/navigation";

import { ChevronIcon } from "./icons/ChevronIcon";
import { FolderOpenIcon } from "./icons/FolderOpenIcon";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkinIcon } from "./icons/LinkedinIcon";
import { InstaIcon } from "./icons/InstaIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { useTheme } from "./providers/ThemeProvider";

const Header: React.FC = () => {
  const pathname = usePathname();
  const ref = React.useRef<HTMLSpanElement>(null);
  const menuRef = React.useRef<HTMLInputElement>(null);

  const { theme, toggleTheme } = useTheme();

  const handleNavClick = () => {
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
    <header className="sticky top-0 mt-4 pt-4 z-50">
      <div className="container max-w-5xl mx-auto px-2 tablet_portrait:px-12 group">
        <nav className="bg-white/5 px-5 border border-gray-400 dark:border-gray-600 rounded-2xl shadow-md shadow-black/5 backdrop-blur-xl">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center justify-between gap-1">
              <Link
                className="font-jetbrains-mono font-bold text-lg text-primary tracking-wider hover:text-secondary outline-hidden hover:scale-105 transition-all duration-300 ease-out"
                href="/"
              >
                rimrachai&#64;
              </Link>
              <ChevronIcon className="hidden tablet_portrait:block h-5.5 w-auto fill-current" />
              {pathname === "/" ? (
                <HomeIcon className="hidden tablet_portrait:block h-6 w-auto fill-current" />
              ) : (
                <FolderOpenIcon className="hidden tablet_portrait:block h-6 w-auto fill-current" />
              )}
              <div className="inline-flex items-center font-bold tracking-wide capitalize font-jetbrains-mono">
                <span>&nbsp;~/</span>
                <span ref={ref} />
              </div>
            </div>

            <div className="peer-checked: flex items-center justify-between gap-8">
              <ul className="hidden tablet_portrait:flex justify-center items-center gap-4 font-medium tracking-wide">
                <li>
                  <Link className="nav-link" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/blogs">
                    Blogs
                  </Link>
                </li>
              </ul>

              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={toggleTheme}
                  aria-label={
                    theme === "dark"
                      ? "Switch to light mode"
                      : "Switch to dark mode"
                  }
                  className="flex justify-center items-center h-8 w-8 border border-gray-400 dark:border-gray-600 rounded-md hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
                >
                  <MoonIcon
                    className="dark:hidden h-4 w-auto fill-current"
                    aria-hidden="true"
                  />
                  <SunIcon
                    className="hidden dark:block h-4 w-auto fill-current"
                    aria-hidden="true"
                  />
                </button>

                <label
                  htmlFor="menu"
                  className="flex tablet_portrait:hidden justify-center items-center h-8 w-8 border border-gray-400 dark:border-gray-600 rounded-md hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
                >
                  <input
                    ref={menuRef}
                    id="menu"
                    type="checkbox"
                    className="peer"
                    hidden
                  />
                  <span className="w-5 h-1 bg-current rounded-2xs transition-transform before:bg-current after:bg-current before:content-[''] after:content-[''] before:absolute after:absolute before:w-5 after:w-5 before:h-1 after:h-1 before:-translate-y-[0.45rem] after:translate-y-[0.45rem] before:rounded-2xs after:rounded-2xs before:transition-transform after:transition-transform peer-checked:before:translate-y-0 peer-checked:after:translate-y-0 peer-checked:before:rotate-45 peer-checked:after:-rotate-45 peer-checked:bg-transparent"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="hidden tablet_portrait:group-has-[input:checked]:hidden group-has-[input:checked]:flex h-[75vh] border-t border-gray-400 dark:border-gray-600 pt-10 pb-4 flex-col justify-between">
            <ul className="flex flex-col items-center gap-5 text-xl font-semibold tracking-wider">
              <li>
                <Link href="/about" onClick={handleNavClick}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={handleNavClick}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blogs" onClick={handleNavClick}>
                  Blogs
                </Link>
              </li>
            </ul>

            <div className="flex justify-center gap-4">
              <Link href="#">
                <GithubIcon className="fill-gray-700 dark:fill-gray-300 h-6 w-auto" />
              </Link>
              <Link href="#">
                <LinkinIcon className="fill-gray-700 dark:fill-gray-300 h-6 w-auto" />
              </Link>
              <Link href="#">
                <InstaIcon className="fill-current h-6 w-auto" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
