import { Quotes } from "@phosphor-icons/react/dist/ssr"
import Hero from "@/components/Hero"
import Heading from "@/components/Heading"
import Cta from "@/components/Cta"
import PreHeading from "@/components/PreHeading"

import heroImg from '../../../public/img/hero-img.jpg'

export const metadata = {
  title: 'Testimonials'
}

const Testimonials = () => {
  return (
    <main className="text-lg">
      <Hero bgImage={heroImg} bgOverlay="dark">
        <div className="container mx-auto">
          <div className="flex flex-col min-h-[50vh] items-center justify-center text-center text-white">
            <Heading className="mb-4">Testimonials</Heading>
            <p>Don&apos;t just take our word for it, see <br />what our past clients have to say about us!</p>
          </div>
        </div>
      </Hero>
      <section className="my-16">
        <div className="container mx-auto">
          <ul className="grid grid-cols-2 justify-items-center lg:grid-cols-4 gap-8 text-center lg:text-left">
            <li>
              <p className="uppercase">3k+<br /> Happy<br /> Customers</p>
            </li>
            <li>
              <p className="uppercase">14<br /> Years<br /> Experience</p>
            </li>
            <li>
              <p className="uppercase">24+<br /> Expert<br /> Partners</p>
            </li>
            <li>
              <p className="uppercase">18+<br /> Active<br /> Projects</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="mt-24 py-24 bg-gray-gradient-r">
        <div className="container mx-auto">
          <PreHeading className="text-center lg:text-left">Testimonials</PreHeading>
          <Heading level="h2" className="mb-8 text-center lg:text-left">From Our Clients</Heading>
          <ul className="grid lg:grid-cols-2 gap-8">
            <li className="flex flex-col items-center justify-center bg-white border border-black px-8 py-8">
              <Quotes size={80} weight="fill" className="text-neutral-300 -scale-y-100 -scale-x-100 mb-2" />
              <blockquote className="text-center">
                <p className="mb-4 text-neutral-600">NorthEast Kitchen and Bath completly transformed our outdated, disfunctional, bathroom into a luxurious space that we love to use every day. Thais was incredibly helpful through the entire process to ensure every detail was to our liking. We couldn&apos;t be happier with the results!</p>
                <footer>Kevin & Heather</footer>
              </blockquote>
            </li>
            <li className="flex flex-col items-center justify-center bg-white border border-black px-8 py-8">
              <Quotes size={80} weight="fill" className="text-neutral-300 -scale-y-100 -scale-x-100 mb-2" />
              <blockquote className="text-center">
                <p className="mb-4 text-neutral-600">Very responsive. The appt was set up done quickly and done within a week.</p>
                <footer>Eilleen DiGirolamo</footer>
              </blockquote>
            </li>
            <li className="flex flex-col items-center justify-center bg-white border border-black px-8 py-8">
              <Quotes size={80} weight="fill" className="text-neutral-300 -scale-y-100 -scale-x-100 mb-2" />
              <blockquote className="text-center">
                <p className="mb-4 text-neutral-600">It was good. I got what I wanted, I&apos;m happy the service, and they were on time.</p>
                <footer>Cliff Moylan</footer>
              </blockquote>
            </li>
            <li className="flex flex-col items-center justify-center bg-white border border-black px-8 py-8">
              <Quotes size={80} weight="fill" className="text-neutral-300 -scale-y-100 -scale-x-100 mb-2" />
              <blockquote className="text-center">
                <p className="mb-4 text-neutral-600">Thais was great to work with. Everything went smoothly and the product worked out exactly as planned. Would highly recommend!</p>
                <footer>Scott Barrows</footer>
              </blockquote>
            </li>
          </ul>
        </div>
      </section>
      <section className="mb-24 py-24 bg-neutral-100">
        <div className="container mx-auto">
          <Cta />
        </div>
      </section>
    </main>
  )
}

export default Testimonials