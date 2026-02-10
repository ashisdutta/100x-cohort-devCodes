import Link from "next/link";

export default function Unauthorized() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-neutral-950 px-4">
      <div className="text-center">
        {/* Large Background Text */}
        <h1 className="text-9xl font-black text-neutral-900">403</h1>

        <div className="-mt-12">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Access Denied
          </h2>
          <p className="mt-3 text-neutral-400">
            You do not have permission to view this page.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/login"
            className="rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-black hover:bg-neutral-200 transition-colors"
          >
            Go back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
