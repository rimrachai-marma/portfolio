import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const ExternalLinkButton: React.FC<Props> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-primary tracking-wide px-2 py-0.5 rounded-full border border-gray-300 dark:border-gray-600"
    >
      <span>{children}</span>
      <svg
        className="-rotate-45 w-2.5 h-2.5 stroke-current ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all ease-in-out duration-200 transform"
        viewBox="0 0 13 15"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke="none"
          strokeWidth="1"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g
            transform="translate(0.666667, 2.333333)"
            stroke="currentColor"
            strokeWidth="2.4"
          >
            <g>
              <polyline points="5.33333333 0 10.8333333 5.5 5.33333333 11"></polyline>
              <line
                x1="10.8333333"
                y1="5.5"
                x2="0.833333333"
                y2="5.16666667"
              ></line>
            </g>
          </g>
        </g>
      </svg>
    </a>
  );
};

export default ExternalLinkButton;
