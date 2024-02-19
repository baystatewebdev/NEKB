const PreHeading = ({ className, children }) => {
  className = className || ''
  return <span className={`uppercase text-primary block mb-4 ${className}`}>{children}</span>
}

export default PreHeading