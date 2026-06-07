import clsx from "clsx"

export default function BaseDecoTitle({ className = "", content = "" }) {
  return (
    <div className={clsx(
      'relative p-10 whitespace-pre-wrap',
      className
    )}>
      <div className="absolute bg-green-100/70 w-full h-full left-0 top-0 translate-3" />
      <div className="absolute border border-lime-700/50 w-full h-full left-0 top-0 -translate-3" />
      <h2 className="relative z-1 text-2xl font-bold text-center text-lime-800">{content}</h2>
    </div>
  )
}