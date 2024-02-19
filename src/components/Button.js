import Link from "next/link"

export function LinkButton({ children, className, href, type }) {
  className = className || ''
  const classes = `uppercase inline-block bg-primary text-white px-8 py-4 cursor-pointer ${className}`

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

LinkButton.defaultProps = {
  type: 'internal'
}