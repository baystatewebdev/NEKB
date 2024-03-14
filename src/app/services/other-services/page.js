import Image from "next/image"
import Hero from "@/components/Hero"
import Heading from "@/components/Heading"
import { ArrowCircleRight, CalendarCheck, PencilLine, Swatches } from "@phosphor-icons/react/dist/ssr"
import Cta from "@/components/Cta"
import PreHeading from "@/components/PreHeading"
import Dropdown from "@/components/Dropdown"
import { LinkButton } from "@/components/Button"
import { InternalLink } from "@/components/Link"

import otherImg1 from 'public/img/grafton/grafton-8.webp'
import otherImg2 from 'public/img/and-more-2.webp'
import otherImg3 from 'public/img/ashland-other.jpg'
import otherImg4 from 'public/img/and-more-1.webp'
import otherImg5 from 'public/img/and-more-3.webp'
import otherImg6 from 'public/img/marblehead-other.jpg'
import otherImg7 from 'public/img/marblehead-other-3.jpg'

export const metadata = {
  title: 'Other Remodeling & Renovation Services',
  description: 'Redefine your space with custom remodeling and renovation services for your Massachusetts home. Get a free consultation with NorthEast today!'
}

const Page = () => {
  return (
    <main className="text-lg">
      <Hero bgImage={otherImg1} bgOverlay="dark">
        <div className="container mx-auto">
          <div className="flex flex-col min-h-[50vh] 2xl:min-h-[35vh] items-center justify-center text-center text-white">
            <Heading className="mb-4">Other Remodeling & Renovation Services</Heading>
            <p className="lg:w-8/12 xl:w-6/12 text-balance">NorthEast offers solutions for a variety of other services in a planned, functional way, with good taste and sophistication, using high-quality materials, technology, and exclusive designs.</p>
          </div>
        </div>
      </Hero>
      <section className="py-16 lg:py-32 bg-gray-gradient-l">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 items-center gap-24">
            <div className="text-center lg:text-left lg:col-span-2">
              <Heading level="h2" className="mb-4">Other Custom Services</Heading>
              <p className="mb-4">We specialize in providing tailored custom remodel and renovation services to meet the unique needs and preferences of our clients. Whether it&apos;s a kitchen renovation to accommodate a growing family, adding built-ins to a living space, or a complete room makeover, our experienced team is dedicated to exceeding expectations at every step of the process. From initial design consultations to the final touches, we collaborate closely with you to ensure that your vision is realized down to the smallest details. With NorthEast, you can trust that your project will be executed flawlessly, creating a house that truly feels like home.</p>
              <InternalLink href="/work" className="inline-flex items-center gap-2 uppercase text-sm group">See Our Work<ArrowCircleRight className="relative group-hover:translate-x-2 transition-transform" size="1.25em" /></InternalLink>
            </div>
            <div className="grid grid-cols-2 items-center lg:grid-cols-3 gap-8 lg:col-span-3">
              <div className="contents lg:block">
                <Image src={otherImg3} className="lg:mb-8" alt="kitchen" />
                <Image src={otherImg2} className="lg:pl-4" alt="kitchen" />
              </div>
              <Image src={otherImg1} className="col-span-2" alt="kitchen" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-neutral-100">
        <div className="container mx-auto">
          <PreHeading>Why Choose Us</PreHeading>
          <Heading level="h2" className="mb-8">What We Offer</Heading>
          <ul className="grid gap-8 lg:grid-cols-3">
            <li className="p-4 bg-white border border-black flex flex-col gap-4 items-center text-center lg:text-left lg:items-start">
              <PencilLine size="3.5rem" className="text-primary" />
              <Heading level="h3" levelStyle="h4" className="text-balance">Expertly Designed</Heading>
              <p className="text-balance">Each project features an expertly crafted design and presentation.</p>
            </li>
            <li className="p-4 bg-white border border-black flex flex-col gap-4 items-center text-center lg:text-left lg:items-start">
              <Swatches size="3.5rem" className="text-primary" />
              <Heading level="h3" levelStyle="h4" className="text-balance">Completely Customizable</Heading>
              <p className="text-balance">We offer fully customizable solutions - if you can dream it, we can do it!</p>
            </li>
            <li className="p-4 bg-white border border-black flex flex-col gap-4 items-center text-center lg:text-left lg:items-start">
              <CalendarCheck size="3.5rem" className="text-primary" />
              <Heading level="h3" levelStyle="h4" className="text-balance">Timely Project Completion</Heading>
              <p className="text-balance">NorthEast delivers your project on schedule, without disruptions!</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-16 lg:py-32 bg-gray-gradient-r">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 items-center gap-24">
            <div className="text-center lg:text-left lg:col-span-3">
              <PreHeading>What We Do</PreHeading>
              <Heading level="h2" className="mb-4">We Do It All</Heading>
              <p className="mb-4">Our experienced team collaborates closely with you to understand your needs and tastes. Whether it&apos;s a residential or commercial property, our renovating and remodeling services deliver stunning transformations. Let us help you redesign and redefine your space into the area you&apos;ve been waiting for.</p>
              <ul className="pl-4 columns-2 mb-8 lg:list-disc">
                <li>Cabinetry</li>
                <li>Shelving</li>
                <li>Storage</li>
                <li>Flooring</li>
                <li>Custom designs</li>
                <li>Much more...</li>
              </ul>
              <LinkButton href="/contact" className="capitalize">Free Consultation</LinkButton>
            </div>
            <div className="lg:col-span-2">
              <div className="min-h-[35em] relative md:min-h-[39.25em] text-[min(2.959vw,_.745em)] md:text-[min(1.959vw,_1.745em)] lg:text-[min(0.9vw,_0.8em)]">
                <Image src={otherImg5} className="w-[25em] h-[80%] top-0 right-0 absolute object-cover" alt="kitchen" />
                <Image src={otherImg4} className="w-[25em] h-[45%] brightness-125 bottom-0 left-0 absolute object-cover" alt="kitchen" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-32 bg-neutral-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 items-center gap-24">
            <div className="lg:col-span-2">
              <div className="min-h-[35em] relative md:min-h-[39.25em] text-[min(2.959vw,_.745em)] md:text-[min(1.959vw,_1.745em)] lg:text-[min(0.9vw,_0.8em)]">
                <Image src={otherImg7} className="w-[25em] h-[80%] top-0 left-0 absolute object-cover" alt="kitchen" />
                <Image src={otherImg6} className="w-[25em] h-[45%] bottom-0 right-0 absolute object-cover" alt="kitchen" />
              </div>
            </div>
            <div className="lg:col-span-3">
              <PreHeading>Still Not Sure?</PreHeading>
              <Heading level="h2" className="mb-8">Frequently Asked Questions</Heading>
              <div className="flex flex-col gap-4">
                <Dropdown title="Can you help with the design process of my renovation?">
                  <p>Absolutely! Our team includes experienced designers who can assist you with every aspect of the design process, from conceptualizing layouts to selecting materials and finishes. We collaborate closely with you to ensure that your vision is realized, creating a customized plan that reflects your style and preferences.</p>
                </Dropdown>
                <Dropdown title="What types of home renovation projects do you specialize in?">
                  <p>We specialize in a wide range of home renovation projects, including kitchen and bathroom remodels, basement finishing, room additions, and other renovations. Whether you&apos;re looking to update a single area or transform your entire home, our team has the expertise and resources to bring your vision to life.</p>
                </Dropdown>
                <Dropdown title="Are your renovation services customizable to fit my specific needs and budget?">
                  <p>We pride ourselves on offering flexible renovation solutions tailored to each client&apos;s unique requirements and financial considerations. Whether you&apos;re looking for a complete overhaul or targeted updates, we work closely with you to create a personalized plan that aligns with your vision and budget constraints. Our goal is to deliver exceptional results that exceed your expectations while staying within your desired investment range.</p>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <Cta />
        </div>
      </section>
    </main>
  )
}

export default Page