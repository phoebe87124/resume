import clsx from "clsx"

export default function BaseCard({ children, className = '' }) {
  return (
    <div className={clsx(
      'group relative px-4 py-8 border border-lime-700/50 rounded-2xl',
      className
    )}>
      <div
        className={clsx(
          'absolute bg-green-100/70 w-full h-full left-0 top-0 rounded-2xl animate',
          'opacity-0 group-hover:opacity-100 group-hover:translate-3'
        )}
      />
      <div className="relative z-1 flex flex-col items-center gap-4">
        {children}
      </div>
    </div>
  )
}