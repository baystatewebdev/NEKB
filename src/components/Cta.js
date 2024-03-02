import { LinkButton } from "./Button"
import Heading from "./Heading"

const Cta = ({ href = '/contact' }) => {
  return (
    <div className="flex flex-wrap justify-center items-center py-16 gap-8 text-center lg:gap-12">
      <Heading level="h2" levelStyle="h3">Why Wait? Get Started With Your Project Today!</Heading>
      <LinkButton href={href}>Start Now</LinkButton>
    </div>
  )
}

export default Cta