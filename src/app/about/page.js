import Hero from "@/components/Hero"
import Heading from "@/components/Heading"
import Image from "next/image"
import heroImg from '../../../public/img/hero-img.jpg'

export const metadata = {
  title: 'About Us'
}

const About = () => {
  return (
    <main className="text-lg">
      <Hero bgImage={heroImg} bgColor="black" bgOpacity="50">
        <div className="container mx-auto">
          <div className="flex flex-col min-h-[50vh] items-center justify-center text-center text-white">
            <Heading className="mb-4">About Us</Heading>
            <p>Learn more about NorthEast and our <br />personalized approach to design.</p>
          </div>
        </div>
      </Hero>
      <section className="my-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 items-center gap-24">
            <div className="text-center lg:text-left lg:col-span-2">
              <span className="uppercase text-primary inline-block mb-4">Who We Are</span>
              <Heading level="h2" className="mb-4">About NorthEast</Heading>
              <p className="text-neutral-600">Since 2014, we have been working with the highest standards of excellence when it comes to developing each project, using high quality materials and different types of finishes in order to make your dreams come true. We endeavor to develop more than kitchens and bathrooms, but rather, a unique experience. Our qualified professionals understand what you want, what you are looking for, and plan environments that incorporate all the comfort and elegance your home deserves. We serve residential homes, businesses, and contractors.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3">
              <div className="contents lg:block">
                <Image src={heroImg} className="lg:mb-8" alt="kitchen" />
                <Image src={heroImg} className="lg:pl-4" alt="kitchen" />
              </div>
              <Image src={heroImg} className="col-span-2" alt="kitchen" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About