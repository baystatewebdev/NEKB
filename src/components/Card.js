const Card = ({ type, className, children }) => {

  const elements = {
    'li': 'li',
    'div': 'div'
  }

  const CardElementTag = elements[type] || 'div'

  return (
    <CardElementTag className={`flex flex-col items-center gap-8 bg-white border border-black px-8 py-8 lg:flex-row ${className}`}>
      {children}
    </CardElementTag>
  )
}

Card.defaultProps = {
  type: 'div',
  className: ''
}

export default Card