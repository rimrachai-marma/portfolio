import React from "react";
import Link from "next/link";

import { GithubIcon } from "./icons/GithubIcon";
import { LinkinIcon } from "./icons/LinkedinIcon";
import { InstaIcon } from "./icons/InstaIcon";
import { WhatsappIcon } from "./icons/WhatsappIcon";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 pt-6 pb-10 border-t border-gray-200 dark:border-gray-700">
      <div className="container max-w-4xl mx-auto px-4 tablet_portrait:px-14">
        <div className="flex flex-col-reverse tablet_portrait:flex-row justify-between items-center gap-4">
          <p className="text-xs tablet:text-sm text-nowrap text-gray-500 flex items-center gap-1">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 32 32"
            >
              <path
                fill="#3d9284"
                d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"
              ></path>
              <path
                fill="#fbfbfb"
                d="M21.066 8.251c2.036 0.483 3.295 2.524 2.812 4.56s-2.524 3.295-4.56 2.812c-2.036-0.483-3.295-2.524-2.812-4.56s2.524-3.295 4.56-2.812z"
              ></path>
              <path
                fill="#fbfbfb"
                d="M12.794 25.789v0c-1.465 0-2.653-1.188-2.653-2.653v0-12.854c0-1.465 1.188-2.653 2.653-2.653v0 0c1.465 0 2.653 1.188 2.653 2.653v0 12.847c0 0.002 0 0.005 0 0.007 0 1.465-1.188 2.653-2.653 2.653 0 0 0 0 0 0v0z"
              ></path>
            </svg>
            <span className="h-5.5 w-[1.3px] mx-1 tablet:mx-3 bg-gray-400 dark:bg-gray-600"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  fill="currentColor"
                  fillOpacity=".16"
                  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.23 13.697C14.974 15.095 13.767 16 12.142 16c-2.076 0-3.373-1.535-3.373-3.992v-.01C8.77 9.534 10.062 8 12.137 8c1.61 0 2.865 1.011 3.092 2.478M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10Z"
                ></path>
              </g>
            </svg>
            {new Date().getFullYear()} Rimrachai Marma,
            <span className="highlight-text bg-linear-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text font-medium text-transparent">
              Have a good&nbsp;
              {new Date().toLocaleDateString("en-US", { weekday: "long" })}!
            </span>
          </p>
          <div className="flex justify-center gap-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/rimrachai-marma"
              aria-label="Visit my GitHub profile"
            >
              <GithubIcon className="footer-social-icon" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/rimrachai-marma"
              aria-label="Visit my Linkin profile"
            >
              <LinkinIcon className="footer-social-icon" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+8801581568089"
              aria-label="Chat with me on WhatsApp"
            >
              <WhatsappIcon className="footer-social-icon" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/_rimrachai"
              aria-label="Visit my Insta"
            >
              <InstaIcon className="footer-social-icon" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
