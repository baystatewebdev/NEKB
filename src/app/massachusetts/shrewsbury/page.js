import Hero from "@/components/Hero"
import Heading from "@/components/Heading"
import Image from "next/image"
import PreHeading from "@/components/PreHeading"
import Gallery from "@/components/ImageGallery"
import { ExternalLink, InternalLink } from "@/components/Link"
import { primaryPhoneNumber } from '@/helpers/constants'
import { ArrowCircleRight, Quotes } from "@phosphor-icons/react/dist/ssr"
import Dropdown from "@/components/Dropdown"
import ContactForm from "@/components/ContactForm"

import heroImg from 'public/img/hero-img.jpg'
import kitchenImg from 'public/img/kitchen-remodel-1.jpg'
import kitchenImg2 from 'public/img/grafton/grafton-6.webp'
import bathroomImg from 'public/img/northbridge/northbridge-1.webp'
import bathroomImg2 from 'public/img/wrentham/wrentham-3.webp'

export const metadata = {
  title: 'Shrewsbury, MA Kitchen & Bath Remodeling',
  description: 'NorthEast is Shrewsbury, MA\'s leading kitchen and bathroom remodeling contractors. Get started with your next project today.'
}

const Page = () => {
  return (
    <main className="text-lg">
      <Hero bgImage={heroImg} bgOverlay="dark">
        <div className="container mx-auto">
          <div className="flex flex-col min-h-[50vh] 2xl:min-h-[35vh] items-center justify-center text-center text-white">
            <Heading className="mb-4">Shrewsbury, Massachusetts Kitchen & Bathroom Remodeling</Heading>
            <p className="text-balance">NorthEast&apos;s showroom is proudly located in Shrewsbury, MA. Call or stop by to see how we can help you reinvision your kitchen or bathroom today!</p>
          </div>
        </div>
      </Hero>
      <section className="pb-24 pt-16 bg-gray-gradient-r">
        <div className="container mx-auto">
          <p className="mb-16">NorthEast is Shrewsbury, Massachusetts&apos; premier renovation solution for kitchen, bathroom, and other remodel services. With over 10 years of experience, we work with the highest standards of excellence when it comes to developing each project, using high quality materials and different types of finishes in order to make your design dreams come true. Our qualified professionals understand what you want, what you are looking for, and plan down to the finest details to incorporate all the comfort and elegance your home deserves. We serve residential homes, businesses, and contractors. <InternalLink href="/contact">Contact us</InternalLink> or give us a call today at <ExternalLink href={`tel:${primaryPhoneNumber}`}>{primaryPhoneNumber}</ExternalLink>.</p>
          <div className="grid gap-24 lg:grid-cols-2">
            <div className="order-2 lg:order-none">
              <div className="relative">
                <Image src={kitchenImg} className="" alt="kitchen remodel" />
                <div className="bg-white p-8 absolute -bottom-4 right-0">
                  <Heading level="h3" levelStyle="h5" className="mb-4">Solutions for Any Need:</Heading>
                  <ul className="list-disc pl-8">
                    <li>Kitchens</li>
                    <li>Bathrooms</li>
                    <li>And More...</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-none">
              <PreHeading>10 Years of Experience</PreHeading>
              <Heading level="h2" className="mb-4">Turn Your Vision Into Reality</Heading>
              <p className="text-neutral-600 mb-8">Our experienced designers are ready to help you create the room you&apos;ve been dreaming of.</p>
              <Image src={bathroomImg} alt="modern bathroom remodel with wooden vanity and white tile" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-neutral-100">
        <div className="container mx-auto">
          <PreHeading>Portfolio</PreHeading>
          <Heading level="h2" className="mb-8">Our Work</Heading>
          <Gallery />
        </div>
      </section>
      <section className="pb-24 pt-16 bg-gray-gradient-l">
        <div className="container mx-auto">
          <div className="grid gap-8 mb-12 md:grid-cols-2">
            <div>
              <Image src={kitchenImg2} alt="modern kitchen renovation northeast" />
            </div>
            <div>
              <Heading level="h2" className="mb-4">Shrewsbury Kitchen Renovation Services</Heading>
              <p>At NorthEast, our kitchen renovation services stand out for their personalized design, high-quality materials, and exceptional craftsmanship. We understand that the kitchen is the heart of the home, where families come together to cook, dine, and share moments. That's why our approach starts with understanding your vision and needs. Whether you're looking for a modern, sleek kitchen with smart appliances and space-saving solutions or a traditional design that exudes warmth and comfort, we have the expertise to bring your dream kitchen to life.</p>
              <InternalLink href="/contact" className="inline-flex items-center gap-2 uppercase text-sm group">
                Get Started
                <ArrowCircleRight className="relative group-hover:translate-x-2 transition-transform" size="1.25em" />
              </InternalLink>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="md:order-2">
              <Image src={bathroomImg2} alt="modern kitchen renovation northeast" />
            </div>
            <div>
              <Heading level="h2" className="mb-4">Bathroom Design Services in Shrewsbury</Heading>
              <p className="mb-4">The bathroom, a private sanctuary for relaxation and rejuvenation, demands a design that reflects tranquility and practicality. NorthEast's bathroom renovation services in Shrewsbury prioritize creating a space that aligns with your personal style while ensuring comfort and convenience. Whether you envision a luxurious spa-like bathroom with a freestanding tub and rainfall showerhead or a compact, efficiently designed space, our team is skilled at executing your vision with precision and care.</p>
              <InternalLink href="/contact" className="inline-flex items-center gap-2 uppercase text-sm group">
                Get Started
                <ArrowCircleRight className="relative group-hover:translate-x-2 transition-transform" size="1.25em" />
              </InternalLink>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-neutral-100">
        <div className="container mx-auto">
          <PreHeading>Testimonials</PreHeading>
          <Heading level="h2" className="mb-4">Read What Our Customers Say</Heading>
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
                <p className="mb-4 text-neutral-600">Thais was great to work with. Everything went smoothly and the product worked out exactly as planned. Would highly recommend!</p>
                <footer>Scott Barrows</footer>
              </blockquote>
            </li>
          </ul>
        </div>
      </section>
      <section className="pb-24 pt-16 bg-gray-gradient-r">
        <div className="container mx-auto">
          <PreHeading>FAQs</PreHeading>
          <Heading level="h2" className="mb-8">Frequently Asked Questions</Heading>
          <div className="flex flex-col gap-4">
            <Dropdown title="Do renovations increase my home&apos;s value?">
              <p>Yes! A renovated kitchen, for instance, can potentially <ExternalLink href="https://homesenator.com/how-much-does-a-kitchen-increase-your-homes-value/" target="_blank">boost a home&apos;s resale value by up to 15%</ExternalLink>. Homeowners might recoup between 60% to 80% of the renovation costs, depending on the scale and specifics of the project. The return on investment for kitchen upgrades can make renovations a wise financial decision for those considering selling their home in the future​.</p>
            </Dropdown>
            <Dropdown title="Can NorthEast help with design and material selection for my renovation project?">
              <p>Absolutely! We offer comprehensive design services to help you choose the layout, materials, and finishes that best suit your style and needs. Our team stays up-to-date with the latest trends and products to provide you with a wide range of high-quality options.</p>
            </Dropdown>
            <Dropdown title="What sets NorthEast apart from other renovation companies in Shrewsbury?">
              <p>Our dedication to quality, transparency, and customer satisfaction sets us apart. We pride ourselves on our meticulous craftsmanship, clear communication, and commitment to delivering every project on time and within budget. Plus, our deep knowledge of local building codes and regulations ensures a smooth, hassle-free renovation process.</p>
            </Dropdown>
            <Dropdown title="How do I get started with my renovation project with NorthEast?">
              <p>Getting started is easy! Just <InternalLink href="/contact">contact us</InternalLink> through our website, phone, or email to schedule a free consultation. During this meeting, we&apos;ll discuss your project in detail, including your vision, budget, and timeline. From there, we&apos;ll guide you through every step of the process, from design to completion.</p>
            </Dropdown>
          </div>
        </div>
      </section>
      <section className="py-24 bg-neutral-100 mb-12">
        <div className="container mx-auto">
          <div className="grid gap-8 items-center md:grid-cols-2">
            <div>
              <Heading level="h2" className="mb-4">Update Your Shrewsbury Home</Heading>
              <p className="mb-4">With the <ExternalLink href="https://www.point2homes.com/US/Neighborhood/MA/Central-Massachusetts/Shrewsbury-Demographics.html" target="_blank">median house in Shrewsbury, Massachusetts being built in 1979</ExternalLink>, many homeowners are finding themselves in need of a kitchen or bathroom remodel. Renovating these spaces can not only refresh and modernize a home&apos;s interior but also address the wear and tear that accumulates over decades. Kitchens and bathrooms from this era often lack the open layouts, energy-efficient appliances, and modern conveniences that newer homes today have. Upgrading your kitchen or bathroom can significantly enhance your living experience, improve energy efficiency, and increase the overall value of your home. <InternalLink href="/contact">Contact us</InternalLink> to start your renovation project today!</p>
            </div>
            <div className="">
              <div className="shadow-md">
                <ContactForm
                  submitButtonClasses="bg-primary hover:bg-primary-darker"
                  submitButtonText="Get My Free Design"
                  title="Start Your Free Consultation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page