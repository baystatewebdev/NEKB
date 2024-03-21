import Image from "next/image"
import Hero from "@/components/Hero"
import Heading from "@/components/Heading"
import { CalendarCheck, PencilLine, Swatches, ArrowCircleRight } from "@phosphor-icons/react/dist/ssr"
import Cta from "@/components/Cta"
import PreHeading from "@/components/PreHeading"
import Dropdown from "@/components/Dropdown"
import { LinkButton } from "@/components/Button"
import { InternalLink } from "@/components/Link"

import heroImg from 'public/img/hero-img.jpg'
import kitchenImg1 from 'public/img/grafton/grafton-10.webp'
import kitchenImg2 from 'public/img/kitchen-remodel-2.jpg'
import kitchenImg3 from 'public/img/grafton/grafton-3.webp'
import kitchenImg4 from 'public/img/grafton/grafton-12.webp'
import kitchenImg5 from 'public/img/asylum/asylum-1.webp'
import kitchenImg6 from 'public/img/asylum/asylum-5.webp'

export const metadata = {
  title: 'Massachusetts Kitchen Remodeling',
  description: 'Elevate your kitchen with NorthEast - expert remodels for a stunning culinary space. Experience superior craftsmanship and a free consultation today!'
}

const KitchenRemodeling = () => {
  return (
    <main className="text-lg">
      <Hero bgImage={heroImg} bgOverlay="dark">
        <div className="container mx-auto">
          <div className="flex flex-col min-h-[50vh] 2xl:min-h-[35vh] items-center justify-center text-center text-white">
            <Heading className="mb-4">Kitchen Remodeling</Heading>
            <p className="lg:w-8/12 xl:w-6/12 text-balance">NORTHEAST offers solutions for kitchens in a planned, functional way, with good taste and sophistication, using high-quality materials, technology, and exclusive designs.</p>
          </div>
        </div>
      </Hero>
      <section className="py-16 lg:py-32 bg-gray-gradient-l">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 items-center gap-24">
            <div className="text-center lg:text-left lg:col-span-2">
              <Heading level="h2" className="mb-4">Full Kitchen Remodels</Heading>
              <p className="mb-4">Our kitchen remodel services are designed to cater to the unique needs of homeowners seeking to revitalize their living spaces. With a keen eye for design and functionality, our experienced team guides clients through every stage of the remodeling process, from initial consultation to final installation. We offer a comprehensive range of services, including design planning, fixture and appliance installation, cabinetry, countertops, flooring, lighting, and more.</p>
              <InternalLink href="/work" className="inline-flex items-center gap-2 uppercase text-sm group">See Our Work<ArrowCircleRight className="relative group-hover:translate-x-2 transition-transform" size="1.25em" /></InternalLink>
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
              <p className="mb-4">Our dedicated professionals work closely with you to understand your vision and preferences. Whether it&apos;s a single-family home, multi-family residence, or commercial property, our kitchen remodel services are tailored to deliver a stunning transformation. Let us to breathe new life into your kitchen space and increase your home&apos;s value.</p>
              <ul className="pl-4 columns-2 mb-8 lg:list-disc">
                <li>Islands</li>
                <li>Shelving</li>
                <li>Storage</li>
                <li>Accents</li>
                <li>Built-ins</li>
                <li>And more...</li>
              </ul>
              <LinkButton href="/contact" className="capitalize">Free Consultation</LinkButton>
            </div>
            <div className="lg:col-span-2">
              <div className="min-h-[35em] relative md:min-h-[39.25em] text-[min(2.959vw,_.745em)] md:text-[min(1.959vw,_1.745em)] lg:text-[min(0.9vw,_0.8em)]">
                <Image src={kitchenImg4} className="w-[25em] h-[80%] top-0 right-0 absolute object-cover" alt="kitchen" />
                <Image src={kitchenImg1} className="w-[25em] h-[45%] bottom-0 left-0 absolute object-cover" alt="kitchen" />
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
                <Image src={kitchenImg5} className="w-[25em] h-[80%] top-0 left-0 absolute object-cover" alt="kitchen" />
                <Image src={kitchenImg6} className="w-[25em] h-[45%] bottom-0 right-0 absolute object-cover" alt="kitchen" />
              </div>
            </div>
            <div className="lg:col-span-3">
              <PreHeading>Still Not Sure?</PreHeading>
              <Heading level="h2" className="mb-8">Frequently Asked Questions</Heading>
              <div className="flex flex-col gap-4">
                <Dropdown title="Do I need permits for my kitchen remodel?">
                  <p>The need for permits varies depending on the scope of work and local building codes. Generally, cosmetic upgrades like replacing cabinets or countertops may not require permits, but structural changes such as moving walls or changing plumbing and electrical systems typically do. As part of our service, we assist clients in obtaining the necessary permits and ensure that all work is compliant with local regulations.</p>
                </Dropdown>
                <Dropdown title="How long does a typical kitchen remodel take?">
                  <p>The duration of a kitchen remodel depends on various factors, including the scope of work, size of the kitchen, and any unforeseen challenges encountered during the process. On average, a minor remodel may take around 4-6 weeks, while a more extensive renovation could range from 8-12 weeks or longer. We provide detailed timelines during the initial consultation based on your specific project requirements.</p>
                </Dropdown>
                <Dropdown title="How do I choose the right materials for my kitchen remodel?">
                  <p>Selecting materials for your kitchen remodel is an important decision that can significantly impact the overall look, feel, and functionality of the space. Our experienced designers offer guidance and recommendations based on your preferences, budget, and lifestyle. We provide access to a wide range of high-quality materials, including cabinetry, countertops, flooring, and fixtures, and assist you in selecting options that meet your needs and aesthetic goals.</p>
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

export default KitchenRemodeling