import Image from "next/image"

import Hero from "@/components/Hero"
import Heading from "@/components/Heading"
import PreHeading from "@/components/PreHeading"
import { LinkButton } from "@/components/Button"
import partners from "@/helpers/partners"
import heroImg from 'public/img/hero-img.jpg'

export const metadata = {
  title: 'Our Partner Brands',
  description: 'NorthEast works with some of the best partners. Learn more about who we work with and how we choose only top-notch suppliers to get you the best quality!'
}

const Partners = () => {
  return (
    <main className="text-lg">
      <Hero bgImage={heroImg} bgOverlay="dark">
        <div className="container mx-auto">
          <div className="flex flex-col min-h-[50vh] 2xl:min-h-[35vh] items-center justify-center text-center text-white">
            <Heading className="mb-4">Our Partners</Heading>
            <p className="lg:w-8/12 xl:w-6/12 text-balance">Northeast has excellent partners to help us fulfill our commitment to offering quality furniture.</p>
          </div>
        </div>
      </Hero>
      <section className="py-24 bg-gray-gradient-r">
        <div className="container mx-auto text-center lg:text-left">
          <PreHeading>Who We Work With</PreHeading>
          <Heading level="h2" className="mb-4">Discover Our Partner Brands</Heading>
          <p>We work with the best suppliers of raw materials, slides, handles, and accessories to ensure a product that meets our company&apos;s quality control. The choice of suppliers makes all the difference in our products, which stand out for their beauty and functionality. In addition, we are always up to date in the market, presenting our customers with the latest in technologies and trends. We actively go sleuthing for news to keep up with the needs and desires of those who entrust their home or business to Northeast.</p>
          <ul className="flex flex-col gap-12 mt-12">

            {partners.map((partner) => (
              <li className="flex flex-col items-center gap-4 bg-white border border-black px-8 py-8 text-center lg:gap-8 lg:text-left lg:flex-row" key={partner.name}>
                <Image src={partner.logo} alt="Cubitac Cabinetry Logo" className="w-80 shrink-0 object-contain" />
                <div className="flex flex-col gap-4 items-center lg:items-start">
                  <Heading level="h3">{partner.name}</Heading>
                  <p>{partner.description}</p>
                  <LinkButton href={partner.href} type="external" className="capitalize">View Their Products</LinkButton>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </section>
    </main>
  )
}

export default Partners