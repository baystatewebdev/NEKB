import Hero from "@/components/Hero"
import Heading from "@/components/Heading"
import Image from "next/image"
import heroImg from 'public/img/hero-img.jpg'
import kitchenImg from 'public/img/kitchen-remodel-1.jpg'
import kitchenImg2 from 'public/img/kitchen-remodel.jpg'
import bathroomImg from 'public/img/bathroom-remodel-3.webp'
import PreHeading from "@/components/PreHeading"
import { ExternalLink } from "@/components/Link"
import { Phone, Envelope, MapTrifold } from "@phosphor-icons/react/dist/ssr"
import ContactForm from "@/components/ContactForm"

export const metadata = {
  title: 'Contact Us'
}

const Contact = () => {
  return (
    <main className="text-lg">
      <Hero bgImage={heroImg} bgOverlay="dark">
        <div className="container mx-auto">
          <div className="flex flex-col min-h-[50vh] 2xl:min-h-[35vh] items-center justify-center text-center text-white">
            <Heading className="mb-4">Contact Us</Heading>
            <p>Have a Question? Reach Out Below!</p>
          </div>
        </div>
      </Hero>
      <section className="my-24">
        <div className="container mx-auto">
          <div className="grid gap-24 lg:grid-cols-2">
            <div>
              <PreHeading>Contact Us</PreHeading>
              <Heading level="h2" className="mb-4">Reach Out To Our Team</Heading>
              <p className="text-neutral-600 mb-8">For more information, questions, or comments, please call or fill out the form.</p>
              <ul className="flex flex-col gap-12">
                <li className="flex items-start gap-4">
                  <div className="p-2 inline-block bg-neutral-100 rounded-full">
                    <Envelope size="24" />
                  </div>
                  <div>
                    <Heading level="h3" className="mb-2">Email</Heading>
                    <ExternalLink href="mailto:thais@northeastkitchenbath.com">thais@northeastkitchenbath.com</ExternalLink>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 inline-block bg-neutral-100 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <Heading level="h3" className="mb-2">Phone</Heading>
                    <ExternalLink href="tel:617-650-8814">(617) 650-8814</ExternalLink>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 inline-block bg-neutral-100 rounded-full">
                    <MapTrifold size="24" />
                  </div>
                  <div>
                    <Heading level="h3" className="mb-2">Location</Heading>
                    <ExternalLink href="https://maps.app.goo.gl/FgHCaDDAy4iP1Mez9" target="_blank">516 Boston Turnpike,<br />Shrewsbury, MA 01545</ExternalLink>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex gap-4">
                <Image src={kitchenImg} className="min-w-0 object-cover" alt="kitchen remodel" />
                <Image src={kitchenImg2} className="min-w-0 object-cover" alt="kitchen remodel" />
              </div>
              <div className="w-full lg:-mt-24 lg:w-10/12">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.6729324533517!2d-71.81679422252404!3d42.26415667120201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e40794963cdb7f%3A0x9ca22c6763835f65!2sNortheast%20Kitchen%20and%20Bathroom!5e0!3m2!1sen!2sus!4v1708464856554!5m2!1sen!2sus" width="100%" height="500" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </main >
  )
}

export default Contact