import { Quotes } from "@phosphor-icons/react/dist/ssr"
import Hero from "@/components/Hero"
import Heading from "@/components/Heading"
import Cta from "@/components/Cta"
import PreHeading from "@/components/PreHeading"
import Testimonials from "@/components/Testimonials"

import heroImg from 'public/img/northbridge/northbridge-4.webp'

export const metadata = {
  title: 'Testimonials',
  description: 'See what our clients have to say about NorthEast and our exceptional work. We are ready to help you with your next home remodel project today!'
}

const Page = () => {
  return (
    <main className="text-lg">
      <Hero bgImage={heroImg} bgOverlay="dark">
        <div className="container mx-auto">
          <div className="flex flex-col min-h-[50vh] items-center justify-center text-center text-white">
            <Heading className="mb-4">Testimonials</Heading>
            <p className="lg:w-8/12 xl:w-6/12 text-balance">Don&apos;t just take our word for it, see what some of our past clients have to say about us!</p>
          </div>
        </div>
      </Hero>
      <section className="my-16">
        <div className="container mx-auto">
          <ul className="grid grid-cols-2 justify-items-center lg:grid-cols-4 gap-8 text-center lg:text-left">
            <li>
              <p className="uppercase">20+<br /> Happy<br /> Customers</p>
            </li>
            <li>
              <p className="uppercase">10+<br /> Years<br /> Experience</p>
            </li>
            <li>
              <p className="uppercase">5+<br /> Expert<br /> Partners</p>
            </li>
            <li>
              <p className="uppercase">4+<br /> Active<br /> Projects</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="mt-24 py-24 bg-gray-gradient-r">
        <div className="container mx-auto">
          <PreHeading className="text-center lg:text-left">Testimonials</PreHeading>
          <Heading level="h2" className="mb-8 text-center lg:text-left">From Our Clients</Heading>
          <Testimonials />
        </div>
      </section>
      <section className="mb-24 py-20 bg-neutral-100">
        <div className="container mx-auto">
          <Cta />
        </div>
      </section>
    </main>
  )
}

export default Page