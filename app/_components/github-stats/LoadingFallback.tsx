const LoadingFallback: React.FC = () => {
  return (
    <div className="flex items-start gap-3 py-4 px-5 bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#30363d] rounded-lg shadow-sm">
      <div className="relative size-4.5 shrink-0 mt-0.5">
        <div className="absolute inset-0 border-2 border-gray-300 dark:border-[#30363d] rounded-full"></div>
        <div className="absolute inset-0 border-2 border-transparent border-t-blue-500 dark:border-t-[#58a6ff] rounded-full animate-spin"></div>
      </div>

      <p className="text-gray-600 dark:text-[#8b949e] text-sm">
        Fetching GitHub Stats...
      </p>
    </div>
  );
};

export default LoadingFallback;
