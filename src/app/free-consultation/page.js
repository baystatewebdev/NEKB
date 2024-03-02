import Image from "next/image";
import Link from "next/link";
import { ExternalLink, InternalLink } from "@/components/Link";
import Cta from "@/components/Cta";
import { ArrowCircleRight, Quotes } from "@phosphor-icons/react/dist/ssr";
import ContactForm from "@/components/ContactForm";
import PreHeading from "@/components/PreHeading";
import Heading from "@/components/Heading";
import images from "@/helpers/work"

import kitchenRemodelImg from 'public/img/kitchen-remodel.jpg'
import kitchenImg2 from 'public/img/kitchen-remodel-2.jpg'
import graftonImg from 'public/img/grafton/grafton-6.webp'
import bathroomImg2 from 'public/img/northbridge/northbridge-1.webp'
import bathroomRemodelImg from 'public/img/bathroom-remodel.jpg'

export const metadata = {
  title: 'Free Remodel Design & Consultation',
  robots: {
    index: false,
    follow: false,
  }
}

export default function Page() {
  return (
    <main className="text-lg">
      <section className="pt-16 pb-24 bg-gray-gradient-l lg:py-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
              <Heading level="h1" levelStyle="h2" className="mb-8">Transform Your Home Today: Free Consultation & Design for Kitchen, Bath, and More!</Heading>
              <p className="mb-8 text-neutral-600 text-balance">Are you looking to remodel your bathroom, kitchen, or another room in your house? Look no further! Northeast offers personalized renovation solutions in a planned, functional way, with good taste and sophistication, using high-quality materials, technology, and exclusive designs. Call <ExternalLink href="tel:617-650-8814">617-650-8814</ExternalLink> or fill out the form to get your free consultation and design today!</p>
              <Image src={graftonImg} alt="remodeled kitchen by northeast" />
            </div>
            <div>
              <div className="shadow-md" id="contact-us">
                <ContactForm
                  title="Start Your Free Consultation"
                  submitButtonClasses="bg-primary hover:bg-primary-darker"
                  submitButtonText="Get Started"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="py-16 bg-gray-gradient-r lg:py-32">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-24">
              <div>
                <Image src={kitchenRemodelImg} alt="photo of a beautiful and modern remodeled kitchen" />
              </div>
              <div className="text-center lg:text-left">
                <span className="uppercase text-primary inline-block mb-4">Culinary Canvases</span>
                <h2 className="text-4xl md:text-5xl mb-4">Fully Custom Kitchen Remodels</h2>
                <p className="text-neutral-600 mb-4">Elevate your home with a kitchen remodel tailored to your style and needs. Our team transforms your vision into reality, crafting a one-of-a-kind space that reflects your personality. With attention to detail and superior craftsmanship, we bring innovation and luxury to every aspect of your kitchen, from bespoke cabinetry to premium finishes.</p>
                <InternalLink href="#contact-us" className="inline-flex items-center gap-2 uppercase text-sm group">Get Started <ArrowCircleRight className="relative group-hover:translate-x-2 transition-transform" size="1.25em" /></InternalLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100">
        <div className="container mx-auto py-16 lg:py-32">
          <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-24">
            <div className="text-center lg:text-left order-2 lg:order-none">
              <span className="uppercase text-primary inline-block mb-4">Tailored Tranquility</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Bespoke Bathroom Renovations</h2>
              <p className="text-neutral-600 mb-4">Indulge in the luxury of a custom bathroom remodel, where your unique vision meets impeccable craftsmanship. From exquisite tile selections to bespoke vanities, we transform your bathroom into a sanctuary tailored to your style and comfort. Discover the art of personalized luxury with our custom bathroom remodel services today.</p>
              <InternalLink href="#contact-us" className="inline-flex items-center gap-2 uppercase text-sm group">Get Started <ArrowCircleRight className="relative group-hover:translate-x-2 transition-transform" size="1.25em" /></InternalLink>
            </div>
            <div className="order-1 lg:order-none">
              <Image src={bathroomRemodelImg} alt="photo of a beautiful and modern remodeled bathroom" />
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="py-16 bg-gray-gradient-l lg:py-32">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-24">
              <div>
                <Image src={kitchenRemodelImg} alt="photo of a beautiful and modern remodeled kitchen" />
              </div>
              <div className="text-center lg:text-left">
                <span className="uppercase text-primary inline-block mb-4">Customized Creations</span>
                <h2 className="text-4xl md:text-5xl mb-4">Other Custom Services</h2>
                <p className="text-neutral-600 mb-4">We specialize in providing tailored custom remodel and renovation services to meet the unique needs and preferences of our clients. Whether it&apos;s a kitchen renovation to accommodate a growing family, adding built-ins to a living space, or a complete room makeover, our experienced team is dedicated to exceeding expectations at every step of the process. From initial design consultations to the final touches, we collaborate closely with you to ensure that your vision is realized down to the smallest details. With NorthEast, you can trust that your project will be executed flawlessly, creating a house that truly feels like home.</p>
                <InternalLink href="#contact-us" className="inline-flex items-center gap-2 uppercase text-sm group">Get Started <ArrowCircleRight className="relative group-hover:translate-x-2 transition-transform" size="1.25em" /></InternalLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-neutral-100">
        <div className="container mx-auto">
          <PreHeading className="text-center lg:text-left">Testimonials</PreHeading>
          <Heading level="h2" className="mb-8 text-center lg:text-left">Hear From Our Clients</Heading>
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
      <section>
        <div className="py-16 bg-gray-gradient-r lg:py-24">
          <div className="container mx-auto text-center lg:text-left">
            <PreHeading>Our Portfolio</PreHeading>
            <Heading level="h2" className="mb-8">Some of Our Latest Work</Heading>
            <ul className="grid gap-8 md:grid-cols-2">
              {images.slice(0, 10).map((image, index) => (
                <li key={index}>
                  <Image src={image.src} className="w-full h-full object-cover" alt={image.alt} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 bg-neutral-100 lg:py-24">
        <div className="container mx-auto relative z-10">
          <div className="text-center lg:text-left">
            <span className="uppercase text-primary inline-block mb-4">How It&apos;s Done</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-16 ">Our Process</h2>
          </div>
          <ul className="grid items-center gap-12 text-center md:grid-cols-2 lg:grid-cols-4 lg:text-left">
            <li className="md:col-span-2">
              <Image
                src={kitchenImg2}
                alt="photo of a beautiful and modern remodeled bathroom"
                className="aspect-[3/2] object-cover"
              />
            </li>
            <li className="flex flex-col gap-4 items-center lg:items-start">
              <span className="block text-neutral-600">01</span>
              <h3 className="uppercase text-xl">Initial Consultation</h3>
              <p>Discuss your vision, budget, and requirements for the remodel, ensuring a clear understanding of your goals. </p>
              <Link href="#contact-us" className="px-2 py-1 border-2 bg-white border-black uppercase inline-block text-sm transition-colors hover:bg-black hover:text-white">Get Started</Link>
            </li>
            <li className="flex flex-col gap-4 items-center lg:items-start">
              <span className="block text-neutral-600">02</span>
              <h3 className="uppercase text-xl">Design &amp; Planning</h3>
              <p>Develop comprehensive design plans, including layout options, material selections, and project timelines. </p>
              <Link href="#contact-us" className="px-2 py-1 border-2 bg-white border-black uppercase inline-block text-sm transition-colors hover:bg-black hover:text-white">Get Started</Link>
            </li>
            <li className="flex flex-col gap-4 items-center lg:items-start">
              <span className="block text-neutral-600">03</span>
              <h3 className="uppercase text-xl">Execution &amp; Construction</h3>
              <p>Begin the construction process, while maintaining open communication with the throughout the renovation. </p>
              <Link href="#contact-us" className="px-2 py-1 border-2 bg-white border-black uppercase inline-block text-sm transition-colors hover:bg-black hover:text-white">Get Started</Link>
            </li>
            <li className="flex flex-col gap-4 items-center lg:items-start">
              <span className="block text-neutral-600">04</span>
              <h3 className="uppercase text-xl">Completion &amp; Final Inspection</h3>
              <p>Conduct a thorough inspection to ensure your satisfaction, addressing any final touch-ups or adjustments as needed. </p>
              <Link href="#contact-us" className="px-2 py-1 border-2 bg-white border-black uppercase inline-block text-sm transition-colors hover:bg-black hover:text-white">Get Started</Link>
            </li>
            <li className="md:col-span-2">
              <Image
                src={bathroomImg2}
                alt="photo of a beautiful and modern remodeled bathroom"
                className="aspect-[3/2] object-cover"
              />
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <Cta href="#contact-us" />
        </div>
      </section>
    </main>
  );
}
