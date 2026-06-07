import clsx from 'clsx'
import Link from 'next/link'
import { FaceFrownIcon } from '@heroicons/react/24/outline'
 
export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 h-full">
      <div className="flex gap-3 items-center text-5xl font-bold text-lime-700">
        4
        <FaceFrownIcon className="w-16 text-lime-700" />
        4
      </div>

      <p className="text-center mb-5">Page Not Found</p>

      <Link
        href="/"
        className={clsx(
          'rounded-full border border-lime-700 text-lime-700 px-8 py-2 mx-auto',
          'relative before:absolute before:z-0 before:-inset-1 before:block before:bg-green-100/70 before:left-0 before:top-0 before:rounded-full',
          'before:opacity-0 before:translate-0 hover:before:translate-2 hover:before:opacity-100 before:transition-all before:duration-500'
        )}
      >
        <span className="relative z-1">Go Back</span>
      </Link>
    </main>
  );
}