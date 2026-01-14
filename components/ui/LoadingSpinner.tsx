import Image from "next/image";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Image
          className="size-12"
          src="/icons/r-animate-logo.svg"
          width={48}
          height={48}
          alt="Loading..."
        />
        <p className="text-lg font-light text-gray-700 dark:text-gray-300">
          Loading...
        </p>
      </div>
    </div>
  );
}
