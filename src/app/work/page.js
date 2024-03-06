import Hero from "@/components/Hero"
import Heading from "@/components/Heading"
import Image from "next/image"
import PreHeading from "@/components/PreHeading"
import { LinkButton } from "@/components/Button"
import ModalSlider from "@/components/ModalSlider"

import images from '@/helpers/work'

import heroImg from 'public/img/hero-img.jpg'
import kitchenImg from 'public/img/kitchen-remodel-1.jpg'
import kitchenImg2 from 'public/img/kitchen-remodel.jpg'
import bathroomImg1 from 'public/img/bathroom-remodel-1.webp'
import bathroomImg3 from 'public/img/bathroom-remodel-3.webp'

export const metadata = {
  title: 'Our Work',
  description: 'See some of the amazing kitchen and bathroom remodels we have completed over the past 10+ years in business. Get started with your next project today.'
}

const Work = () => {
  return (
    <main className="text-lg">
      <Hero bgImage={heroImg} bgOverlay="dark">
        <div className="container mx-auto">
          <div className="flex flex-col min-h-[50vh] 2xl:min-h-[35vh] items-center justify-center text-center text-white">
            <Heading className="mb-4">Our Work</Heading>
            <p>Check out some of our past projects<br /> and see what we can do for you.</p>
          </div>
        </div>
      </Hero>
      <section className="py-24 bg-gray-gradient-r">
        <div className="container mx-auto">
          <div className="grid gap-24 lg:grid-cols-2">
            <div className="order-2 relative lg:order-none">
              <Image src={kitchenImg} className="" alt="kitchen remodel" />
              <div className="bg-white p-8 absolute bottom-16 right-0">
                <Heading level="h3" levelStyle="h5" className="mb-4">Solutions for Any Need:</Heading>
                <ul className="list-disc pl-8">
                  <li>Kitchens</li>
                  <li>Bathrooms</li>
                  <li>And More...</li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-none">
              <PreHeading>10 Years of Experience</PreHeading>
              <Heading level="h2" className="mb-4">Turn Your Vision Into Reality</Heading>
              <p className="text-neutral-600 mb-8">Our qualified professionals understand what you want, what you are looking for, and plan environments that incorporate all the comfort and elegance your home deserves.</p>
              <ModalSlider>
                <Image src={kitchenImg} className="h-full object-contain" alt="kitchen remodel" />
                <Image src={kitchenImg2} className="h-full object-contain" alt="kitchen remodel" />
                <Image src={bathroomImg1} className="h-full object-contain" alt="kitchen remodel" />
                <Image src={bathroomImg3} className="h-full object-contain" alt="kitchen remodel" />
              </ModalSlider>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-neutral-100">
        <div className="container mx-auto text-center lg:text-left">
          <PreHeading>Our Portfolio</PreHeading>
          <Heading level="h2" className="mb-8">Some of Our Latest Work</Heading>
          <ul className="grid gap-8 md:grid-cols-2">
            {images.map((image, index) => (
              <li key={index}>
                <Image src={image.src} className="w-full h-full object-cover" alt={image.alt} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-24">
        <div className="flex flex-wrap justify-center items-center gap-8 text-center lg:gap-12">
          <Heading level="h2" levelStyle="h3">Why Wait? Get Started With Your Project Today!</Heading>
          <LinkButton href="/contact">Start Now</LinkButton>
        </div>
      </section>
    </main>
  )
}

export default Work