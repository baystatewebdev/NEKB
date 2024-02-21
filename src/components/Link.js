const Link = ({ className, children, href, target }) => {
  return (
    <a href={href} className={`text-black hover:text-primary ${className}`} target={target}>{children}</a>
  )
}

Link.defaultProps = {
  className: '',
  target: ''
}

export default Link