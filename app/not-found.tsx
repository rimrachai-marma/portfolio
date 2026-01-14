import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-[calc(73.5vh-10rem)]">
      <div className="h-full flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
          <p className="font-light text-gray-700 dark:text-gray-300">
            Sorry, the page you are looking for does not exist or has been
            removed.
          </p>
          <Link
            className="text-primary dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-xs py-2.5 px-3.5 transition hover:text-secondary"
            href="/"
          >
            <span aria-hidden="true">&larr; </span>
            homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
