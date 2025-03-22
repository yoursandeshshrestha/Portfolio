import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(45vh-4rem)] flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400">
        Page not found
      </p>
      <p className="text-sm text-neutral-500 dark:text-neutral-500">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-4 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition-all hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
      >
        Go back home
      </Link>
    </div>
  );
}
