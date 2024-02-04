import Link from "next/link"

export function LinkButton({ children, href, className }) {
  return (
    <Link
      className={`uppercase inline-block bg-primary text-white px-8 py-4 ${className}`}
      href={href}
    >
      {children}
    </Link>
  )
}