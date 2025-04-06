import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-[calc(100vh-17.75rem)]">
      <div className="flex items-center justify-center h-full">
        <div className="felx items-center justify-center flex-col">
          <div className="flex flex-col items-center justify-center ">
            <Image
              className="h-12 w-12"
              src="icons/r-animate-logo.svg"
              width={32}
              height={32}
              alt="Loading..."
            />
            <p className="text-lg font-light text-gray-700 dark:text-gray-300">
              Loading...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
