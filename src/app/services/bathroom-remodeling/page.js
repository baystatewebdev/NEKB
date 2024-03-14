import Image from "next/image"
import Hero from "@/components/Hero"
import Heading from "@/components/Heading"
import { ArrowCircleRight, CalendarCheck, PencilLine, Swatches } from "@phosphor-icons/react/dist/ssr"
import Cta from "@/components/Cta"
import PreHeading from "@/components/PreHeading"
import Dropdown from "@/components/Dropdown"
import { LinkButton } from "@/components/Button"
import { InternalLink } from "@/components/Link"

import heroImg from 'public/img/northbridge/northbridge-4.webp'
import bathroomImg1 from 'public/img/northbridge/northbridge-8.webp'
import bathroomImg2 from 'public/img/northbridge/northbridge-6.webp'
import bathroomImg3 from 'public/img/bathroom-remodel-1.webp'
import bathroomImg4 from 'public/img/ashland-bathroom.jpg'
import bathroomImg5 from 'public/img/ashland-bathroom-2.jpg'
import bathroomImg6 from 'public/img/bathroom-remodel-2.webp'
import bathroomImg7 from 'public/img/bathroom-remodel-3.webp'

export const metadata = {
  title: 'Bathroom Remodeling',
  description: 'Elevate your bathroom with NorthEast - expert remodels for a stunning oasis. Experience superior craftsmanship and a free consultation today!'
}

const BathroomRemodeling = () => {
  return (
    <main className="text-lg">
      <Hero bgImage={heroImg} bgOverlay="dark">
        <div className="container mx-auto">
          <div className="flex flex-col min-h-[50vh] 2xl:min-h-[35vh] items-center justify-center text-center text-white">
            <Heading className="mb-4">Bathroom Remodeling</Heading>
            <p className="lg:w-8/12 xl:w-6/12 text-balance">NorthEast offers solutions for bathrooms in a planned, functional way, with good taste and sophistication, using high-quality materials, technology, and exclusive designs.</p>
          </div>
        </div>
      </Hero>
      <section className="py-16 lg:py-32 bg-gray-gradient-l">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 items-center gap-24">
            <div className="text-center lg:text-left lg:col-span-2">
              <Heading level="h2" className="mb-4">Full Bathroom Remodels</Heading>
              <p className="mb-4">We excel in delivering bathroom remodel services that elevate your space, mixing luxury and functionality. From start to finish, our team works closely with you to bring your vision to life, offering expertise in space optimization, fixture selection, and quality craftsmanship. Whether it&apos;s a simple upgrade or a complete renovation, we&apos;re dedicated to delivering results that transform your bathroom into a stunning oasis. Choose NorthEast for your remodel needs and experience the difference of our passion and expertise firsthand.</p>
              <InternalLink href="/work" className="inline-flex items-center gap-2 uppercase text-sm group">See Our Work<ArrowCircleRight className="relative group-hover:translate-x-2 transition-transform" size="1.25em" /></InternalLink>
            </div>
            <div className="grid grid-cols-2 items-center lg:grid-cols-3 gap-8 lg:col-span-3">
              <div className="contents lg:block">
                <Image src={bathroomImg2} className="lg:mb-8" alt="kitchen" />
                <Image src={bathroomImg3} className="lg:pl-4" alt="kitchen" />
              </div>
              <Image src={bathroomImg1} className="col-span-2" alt="modern bathroom vanity remodel" />
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
              <p className="mb-4">Our experienced team collaborates closely with you to understand your vision and preferences. Whether it&apos;s a residential or commercial property, our bathroom remodeling services are designed to deliver a stunning transformation. Let us revitalize your bathroom space into the room of your dreams and increase the value of your property.</p>
              <ul className="pl-4 columns-2 mb-8 lg:list-disc">
                <li>Vanities</li>
                <li>Showers</li>
                <li>Storage</li>
                <li>Fixtures</li>
                <li>Tile Work</li>
                <li>Much more...</li>
              </ul>
              <LinkButton href="/contact" className="capitalize">Free Consultation</LinkButton>
            </div>
            <div className="lg:col-span-2">
              <div className="min-h-[35em] relative md:min-h-[39.25em] text-[min(2.959vw,_.745em)] md:text-[min(1.959vw,_1.745em)] lg:text-[min(0.9vw,_0.8em)]">
                <Image src={bathroomImg5} className="w-[25em] h-[80%] top-0 right-0 absolute object-cover" alt="kitchen" />
                <Image src={bathroomImg4} className="w-[25em] h-[45%] bottom-0 left-0 absolute object-cover" alt="kitchen" />
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
                <Image src={bathroomImg7} className="w-[25em] h-[80%] top-0 left-0 absolute object-cover" alt="kitchen" />
                <Image src={bathroomImg6} className="w-[25em] h-[45%] bottom-0 right-0 absolute object-cover" alt="kitchen" />
              </div>
            </div>
            <div className="lg:col-span-3">
              <PreHeading>Still Not Sure?</PreHeading>
              <Heading level="h2" className="mb-8">Frequently Asked Questions</Heading>
              <div className="flex flex-col gap-4">
                <Dropdown title="How long does the bathroom remodeling process take?">
                  <p>The timeline for a bathroom remodel can vary depending on the scope of the project. Generally, smaller projects such as updating fixtures or refreshing the paint can be completed in a matter of days to a week. More extensive renovations involving structural changes or complete overhauls may take several weeks to a few months. During our initial consultation, we&apos;ll provide you with a detailed timeline based on your specific project requirements.</p>
                </Dropdown>
                <Dropdown title="What is the typical cost of a bathroom remodel?">
                  <p>The cost of a bathroom remodel depends on various factors, including the size of the space, the materials used, the extent of the renovation, and any additional features or customizations. We offer personalized quotes based on your individual needs and budget. During the consultation process, we&apos;ll discuss your priorities and provide you with a transparent breakdown of costs to ensure there are no surprises along the way.</p>
                </Dropdown>
                <Dropdown title="How do I choose the right materials for my kitchen remodel?">
                  <p>Whether permits are required for your bathroom remodel depends on the scope of the project and local building codes and regulations. In many cases, minor cosmetic updates may not necessitate permits, but major renovations involving structural changes or plumbing/electrical work typically do. As part of our services, we handle all necessary permits and ensure that your remodel complies with local regulations, giving you peace of mind throughout the process.</p>
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

export default BathroomRemodeling