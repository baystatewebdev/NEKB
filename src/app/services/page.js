import Image from "next/image"
import Hero from "@/components/Hero"
import Heading from "@/components/Heading"
import { LinkButton } from "@/components/Button"

import heroImg from '../../../public/img/hero-img.jpg'
import kitchenImg1 from '../../../public/img/kitchen-remodel-1.jpg'
import kitchenImg2 from '../../../public/img/kitchen-remodel-2.jpg'
import kitchenImg3 from '../../../public/img/kitchen-remodel-3.jpg'
import bathroomImg1 from '../../../public/img/bathroom-remodel-1.webp'
import bathroomImg2 from '../../../public/img/bathroom-remodel-2.webp'
import bathroomImg3 from '../../../public/img/bathroom-remodel-3.webp'
import moreImg1 from '../../../public/img/and-more-1.webp'
import moreImg2 from '../../../public/img/and-more-2.webp'
import moreImg3 from '../../../public/img/and-more-3.webp'

export const metadata = {
  title: 'Our Services'
}

const Services = () => {
  return (
    <main className="text-lg">
      <Hero bgImage={heroImg} bgOverlay="dark">
        <div className="container mx-auto">
          <div className="flex flex-col min-h-[50vh] 2xl:min-h-[35vh] items-center justify-center text-center text-white">
            <Heading className="mb-4">Our Services</Heading>
            <p className="lg:w-8/12 xl:w-6/12">NORTHEAST offers solutions for kitchens and bathrooms in a planned, functional way, with good taste and sophistication, using high-quality materials, technology, and exclusive designs.</p>
          </div>
        </div>
      </Hero>
      <section className="py-16 lg:py-32 bg-gray-gradient-l">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 items-center gap-24">
            <div className="text-center lg:text-left lg:col-span-2">
              <Heading level="h2" className="mb-4">Kitchens</Heading>
              <p>The kitchen is the heart of any home. And good times with family and friends call for a setting that is both functional and stylish. Whatever it takes to make this room better, NORTHEAST is committed to doing: total or partial remodeling with cabinets and countertops.</p>
            </div>
            <div className="grid grid-cols-2 items-center lg:grid-cols-3 gap-8 lg:col-span-3">
              <div className="contents lg:block">
                <Image src={kitchenImg2} className="lg:mb-8" alt="kitchen" />
                <Image src={kitchenImg1} className="lg:pl-4" alt="kitchen" />
              </div>
              <Image src={kitchenImg3} className="col-span-2" alt="kitchen" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-32 bg-neutral-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 items-center gap-24">
            <div className="grid grid-cols-2 items-center order-2 lg:order-none lg:grid-cols-3 gap-8 lg:col-span-3">
              <div className="contents lg:block">
                <Image src={bathroomImg1} className="lg:mb-8" alt="kitchen" />
                <Image src={bathroomImg2} className="lg:pl-4" alt="kitchen" />
              </div>
              <Image src={bathroomImg3} className="col-span-2" alt="kitchen" />
            </div>
            <div className="text-center order-1 lg:order-none lg:text-left lg:col-span-2">
              <Heading level="h2" className="mb-4">Bathrooms</Heading>
              <p>Functional and relaxing. Bathrooms should be a harmonious blend of practicality, sophistication, and exceptional materials. NORTHEAST has qualified professionals who can make your dream project come to life and guarantee your satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-32 bg-gray-gradient-r">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 items-center gap-24">
            <div className="text-center lg:text-left lg:col-span-2">
              <Heading level="h2" className="mb-4">And More...</Heading>
              <p>NORTHEAST has ideal solutions to make every room in your home both sophisticated and cozy. We do more than turn out products in each project – we deliver personalized solutions with an exclusive design and quality assurance.</p>
            </div>
            <div className="grid grid-cols-2 items-center lg:grid-cols-3 gap-8 lg:col-span-3">
              <div className="contents lg:block">
                <Image src={moreImg1} className="lg:mb-8" alt="kitchen" />
                <Image src={moreImg2} className="lg:pl-4" alt="kitchen" />
              </div>
              <Image src={moreImg3} className="col-span-2 max-h-96 lg:max-h-80 object-cover" alt="kitchen" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center py-16 gap-8 text-center lg:gap-12">
            <Heading level="h2" levelStyle="h3">Why Wait? Get Started With Your Project Today!</Heading>
            <LinkButton href="/contact">Start Now</LinkButton>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services