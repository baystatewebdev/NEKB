import NextLink from "next/link"

const commonLinkClasses = 'text-black hover:text-primary font-medium'

export const ExternalLink = ({ className, children, href, target }) => {
  return (
    <a href={href} className={`${commonLinkClasses} ${className}`} target={target}>{children}</a>
  )
}

ExternalLink.defaultProps = {
  className: '',
  target: ''
}

export const InternalLink = ({ className, children, href }) => {
  return (
    <NextLink href={href} className={`${commonLinkClasses} ${className}`}>{children}</NextLink>
  )
}

InternalLink.defaultProps = {
  className: ''
}
