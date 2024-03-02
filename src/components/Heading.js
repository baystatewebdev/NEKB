const Heading = ({ level = 'h1', levelStyle, className = '', children }) => {

  const headingLevels = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    span: 'span'
  }

  const headingLevelStyles = {
    h1: 'text-4xl md:text-5xl lg:text-6xl',
    h2: 'text-3xl md:text-4xl lg:text-5xl',
    h3: 'text-2xl md:text-3xl lg:text-4xl',
    h4: 'text-xl md:text-2xl lg:text-3xl',
    h5: 'text-lg md:text-xl lg:text-2xl',
    h6: 'md:text-lg lg:text-xl',
  }

  const CustomHeadingElement = headingLevels[level] || 'h1'
  let headingClasses = headingLevelStyles[levelStyle] || headingLevelStyles[level] || 'h1'
  if (level === 'span') {
    headingClasses += ' block'
  }

  return <CustomHeadingElement className={`text-balance ${headingClasses} ${className}`}>{children}</CustomHeadingElement>
}

export default Heading