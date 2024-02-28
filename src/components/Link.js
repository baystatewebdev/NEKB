import NextLink from "next/link"

const commonLinkClasses = 'text-black hover:text-primary font-medium transition-colors'

export const ExternalLink = ({ className = '', children, href, target = '' }) => {
  return (
    <a href={href} className={`${commonLinkClasses} ${className}`} target={target}>{children}</a>
  )
}

export const InternalLink = ({ className = '', children, href }) => {
  return (
    <NextLink href={href} className={`${commonLinkClasses} ${className}`}>{children}</NextLink>
  )
}
