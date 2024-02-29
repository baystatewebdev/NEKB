import Hero from "@/components/Hero"
import Heading from "@/components/Heading"
import Image from "next/image"
import heroImg from 'public/img/hero-img.jpg'
import kitchenImg from 'public/img/kitchen-remodel-1.jpg'
import kitchenImg2 from 'public/img/kitchen-remodel.jpg'
import bathroomImg from 'public/img/bathroom-remodel-3.webp'
import PreHeading from "@/components/PreHeading"
import Card from "@/components/Card"
import Cta from "@/components/Cta"
import { InternalLink } from "@/components/Link"

export const metadata = {
  title: 'About Us'
}

const About = () => {
  return (
    <main className="text-lg">
      <Hero bgImage={heroImg} bgOverlay="dark">
        <div className="container mx-auto">
          <div className="flex flex-col min-h-[50vh] 2xl:min-h-[35vh] items-center justify-center text-center text-white">
            <Heading className="mb-4">About Us</Heading>
            <p>Learn more about NorthEast and our <br />personalized approach to design.</p>
          </div>
        </div>
      </Hero>
      <section className="py-24 bg-gray-gradient-l">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 items-center gap-24">
            <div className="text-center lg:text-left lg:col-span-2">
              <PreHeading>Who We Are</PreHeading>
              <Heading level="h2" className="mb-4">About NorthEast</Heading>
              <p className="text-neutral-600">Since 2014, we have been working with the highest standards of excellence when it comes to developing each project, using high quality materials and different types of finishes in order to make your dreams come true. We endeavor to develop more than kitchens and bathrooms, but rather, a unique experience. Our qualified professionals understand what you want, what you are looking for, and plan environments that incorporate all the comfort and elegance your home deserves. We serve residential homes, businesses, and contractors.</p>
            </div>
            <div className="grid grid-cols-2 items-center lg:grid-cols-3 gap-8 lg:col-span-3">
              <div className="contents lg:block">
                <Image src={kitchenImg} className="lg:mb-8" alt="kitchen" />
                <Image src={bathroomImg} className="lg:pl-4" alt="kitchen" />
              </div>
              <Image src={kitchenImg2} className="col-span-2" alt="kitchen" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-gradient-r">
        <div className="container mx-auto">
          <PreHeading className="text-center lg:text-left">What We Do</PreHeading>
          <Heading level="h2" className="mb-8 text-center lg:text-left">Our Services</Heading>
          <ul className="grid lg:grid-cols-2 gap-8">
            <Card type="li">
              <Image
                src={kitchenImg}
                alt="photo of a beautiful and modern remodeled bathroom"
                className="w-24 h-24 object-cover rounded-full"
              />
              <div className="text-center lg:text-left">
                <Heading level="h3" levelStyle="h5" className="mb-1">Kitchen Remodels</Heading>
                <p className="text-neutral-600">Whatever it takes to make this room better, NorthEast is committed to doing: total or partial remodeling with cabinets and countertops.</p>
              </div>
            </Card>
            <Card type="li">
              <Image
                src={kitchenImg}
                alt="photo of a beautiful and modern remodeled bathroom"
                className="w-24 h-24 object-cover rounded-full"
              />
              <div className="text-center lg:text-left">
                <Heading level="h3" levelStyle="h5" className="mb-1">Bathroom Remodels</Heading>
                <p className="text-neutral-600">Functional and relaxing. Bathrooms should be a harmonious blend of practicality, sophistication, and exceptional materials.</p>
              </div>
            </Card>
            <Card type="li">
              <Image
                src={kitchenImg}
                alt="photo of a beautiful and modern remodeled bathroom"
                className="w-24 h-24 object-cover rounded-full"
              />
              <div className="text-center lg:text-left">
                <Heading level="h3" levelStyle="h5" className="mb-1">And More...</Heading>
                <p className="text-neutral-600">NorthEast has ideal solutions to make every room in your home both sophisticated and cozy.</p>
              </div>
            </Card>
            <Card type="li">
              <Image
                src={kitchenImg}
                alt="photo of a beautiful and modern remodeled bathroom"
                className="w-24 h-24 object-cover rounded-full"
              />
              <div className="text-center lg:text-left">
                <Heading level="h3" levelStyle="h5" className="mb-1">Thinking of Something Else?</Heading>
                <p className="text-neutral-600">NorthEast has qualified professionals who can make your dream project come to life and guarantee your satisfaction.</p>
              </div>
            </Card>
          </ul>
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

export default About