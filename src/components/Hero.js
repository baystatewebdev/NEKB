import Image from "next/image"
import heroImg from '../../public/img/hero-img.jpg'
import { LinkButton } from "./Button"

const Hero = () => {
  return (
    <section className="pt-16 pb-24 bg-gray-gradient-l lg:py-32">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8">Premier Kitchen<br /> & Bathroom<wbr /> Remodeling Solutions</h1>
            <p className="mb-8 text-neutral-600">NORTHEAST offers solutions for kitchens and bathrooms in a planned, functional way, with good taste and sophistication, using high-quality materials, technology, and exclusive designs.</p>
            <LinkButton href="/contact">Get Started</LinkButton>
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