import Image from "next/image"
import heroImg from '../../public/img/hero-img.jpg'
import { LinkButton } from "./Button"

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 my-24 gap-8">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-5xl lg:text-7xl mb-8">Premier Kitchen<br /> & Bathroom<wbr /> Remodeling Solutions</h1>
            <p className="mb-8">NORTHEAST offers solutions for kitchens and bathrooms in a planned, functional way, with good taste and sophistication, using high-quality materials, technology, and exclusive designs.</p>
            <LinkButton href="/work">Explore</LinkButton>
          </div>
          <div className="flex flex-col justify-center">
            <Image src={heroImg} className="aspect-[3/2] object-cover" alt="remodeled high end kitchen" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero