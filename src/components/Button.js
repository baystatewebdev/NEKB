import Link from "next/link"
import { twMerge } from "tailwind-merge"

export function LinkButton({ children, className, href, type = 'internal' }) {
  className = className || ''
  const classes = twMerge(`uppercase inline-block bg-primary text-white px-8 py-4 cursor-pointer transition-colors hover:bg-primary-darker ${className}`)

  if (type === 'internal') {
    return (
      <Link
        className={classes}
        href={href}
      >
        {children}
      </Link>
    )
  }

  return (
    <a
      className={classes}
      href={href}
      target='_blank'
    >
      {children}
    </a>
  )

}
