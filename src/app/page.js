import Image from "next/image";
import Link from "next/link";
import { InternalLink } from "@/components/Link";
import { LinkButton } from "@/components/Button"
import Card from "@/components/Card"
import heroImg from '../../public/img/hero-img.jpg'
import kitchenRemodelImg from '../../public/img/kitchen-remodel.jpg'
import bathroomRemodelImg from '../../public/img/bathroom-remodel.jpg'
import Cta from "@/components/Cta";
import { ArrowCircleRight } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: 'Kitchen & Bath Remodeling Solutions | NorthEast'
}

export default function Home() {
  return (
    <main className="text-lg">
      <section className="pt-16 pb-24 bg-gray-gradient-l lg:py-32">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-balence">Premier Kitchen & Bathroom Remodeling Solutions</h1>
              <p className="mb-8 text-neutral-600 text-balance">NORTHEAST offers solutions for kitchens and bathrooms in a planned, functional way, with good taste and sophistication, using high-quality materials, technology, and exclusive designs.</p>
              <LinkButton href="/contact">Get Started</LinkButton>
            </div>
            <div className="flex flex-col justify-center">
              <Image src={heroImg} className="aspect-[3/2] object-cover" priority={true} alt="remodeled high end kitchen" />
            </div>
          </div>
        </div>
      </section>
      <section className="my-24">
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
      <section className="mt-24">
        <div className="py-16 bg-gray-gradient-r lg:py-32">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 items-center gap-24">
              <div>
                <Image src={kitchenRemodelImg} alt="photo of a beautiful and modern remodeled kitchen" />
              </div>
              <div className="text-center lg:text-left">
                <span className="uppercase text-primary inline-block mb-4">Craft Your Dream Space</span>
                <h2 className="text-4xl md:text-5xl mb-4">Fully Custom Kitchen Remodels</h2>
                <p className="text-neutral-600 mb-4">Elevate your home with a kitchen remodel tailored to your style and needs. Our team transforms your vision into reality, crafting a one-of-a-kind space that reflects your personality. With attention to detail and superior craftsmanship, we bring innovation and luxury to every aspect of your kitchen, from bespoke cabinetry to premium finishes.</p>
                <InternalLink href="/services/kitchen-remodeling" className="inline-flex items-center gap-2 uppercase text-sm group">Learn More <ArrowCircleRight className="relative group-hover:translate-x-2 transition-transform" size="1.25em" /></InternalLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100">
        <div className="container mx-auto py-16 lg:py-32">
          <div className="grid lg:grid-cols-2 items-center gap-24">
            <div className="text-center lg:text-left">
              <span className="uppercase text-primary inline-block mb-4">Tailored Tranquility</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Bespoke Bathroom Renovations</h2>
              <p className="text-neutral-600 mb-4">Indulge in the luxury of a custom bathroom remodel, where your unique vision meets impeccable craftsmanship. From exquisite tile selections to bespoke vanities, we transform your bathroom into a sanctuary tailored to your style and comfort. Discover the art of personalized luxury with our custom bathroom remodel services today.</p>
              <InternalLink href="/services/bathroom-remodeling" className="inline-flex items-center gap-2 uppercase text-sm group">Learn More <ArrowCircleRight className="relative group-hover:translate-x-2 transition-transform" size="1.25em" /></InternalLink>
            </div>
            <div>
              <Image src={bathroomRemodelImg} alt="photo of a beautiful and modern remodeled bathroom" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-16 bg-gray-gradient-l lg:py-32">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 items-center gap-24">
              <div className="text-center lg:text-left">
                <span className="uppercase text-primary inline-block mb-4">Our Services</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 ">Consultations & Services</h2>
                <p className="text-neutral-600 mb-4">Embark on your renovation journey with confidence and a <InternalLink href="/contact">free consultation</InternalLink>. Whether you're dreaming of a revitalized kitchen, a serene bathroom retreat, or transforming another space, NorthEast is here to guide you every step of the way.</p>
                <InternalLink href="/services" className="inline-flex items-center gap-2 uppercase text-sm group">Learn More <ArrowCircleRight className="relative group-hover:translate-x-2 transition-transform" size="1.25em" /></InternalLink>
              </div>
              <ul className="flex flex-col gap-8">
                <Card type="li">
                  <Image
                    src={bathroomRemodelImg}
                    alt="photo of a beautiful and modern remodeled bathroom"
                    className="w-24 h-24 object-cover rounded-full"
                  />
                  <div className="text-center lg:text-left">
                    <h3 className="mb-1 text-2xl">Our Solutions</h3>
                    <p>We offer a variety of services to customize your project including: cabinetry, countertops, flooring, lighting, and more. </p>
                  </div>
                </Card>
                <Card type="li">
                  <Image
                    src={bathroomRemodelImg}
                    alt="photo of a beautiful and modern remodeled bathroom"
                    className="w-24 h-24 object-cover rounded-full"
                  />
                  <div className="text-center lg:text-left">
                    <h3 className="mb-1 text-2xl">And More...</h3>
                    <p>We can assist you on renovating or updating any area of your house from basements, built-ins, and other areas - just ask!</p>
                  </div>
                </Card>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative before:bg-neutral-100 before:absolute before:block before:h-96 before:w-full">
        <div className="py-16 bg-gray-gradient-r lg:py-32">
          <div className="container mx-auto relative z-10">
            <div className="text-center lg:text-left">
              <span className="uppercase text-primary inline-block mb-4">Our Process</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-16 ">How It&apos;s Done</h2>
            </div>
            <ul className="grid items-center gap-12 text-center md:grid-cols-2 lg:grid-cols-4 lg:text-left">
              <li className="md:col-span-2">
                <Image
                  src={bathroomRemodelImg}
                  alt="photo of a beautiful and modern remodeled bathroom"
                  className=""
                />
              </li>
              <li className="flex flex-col gap-4 items-center lg:items-start">
                <span className="block text-neutral-600">01</span>
                <h3 className="uppercase text-xl">Initial Consultation</h3>
                <p>Discuss your vision, budget, and requirements for the remodel, ensuring a clear understanding of your goals. </p>
                <Link href="/contact" className="px-2 py-1 border-2 border-black uppercase inline-block text-sm transition-colors hover:bg-black hover:text-white">Get Started</Link>
              </li>
              <li className="flex flex-col gap-4 items-center lg:items-start">
                <span className="block text-neutral-600">02</span>
                <h3 className="uppercase text-xl">Design &amp; Planning</h3>
                <p>Develop comprehensive design plans, including layout options, material selections, and project timelines. </p>
                <Link href="/contact" className="px-2 py-1 border-2 border-black uppercase inline-block text-sm transition-colors hover:bg-black hover:text-white">Get Started</Link>
              </li>
              <li className="flex flex-col gap-4 items-center lg:items-start">
                <span className="block text-neutral-600">03</span>
                <h3 className="uppercase text-xl">Execution &amp; Construction</h3>
                <p>Begin the construction process, while maintaining open communication with the throughout the renovation. </p>
                <Link href="/contact" className="px-2 py-1 border-2 border-black uppercase inline-block text-sm transition-colors hover:bg-black hover:text-white">Get Started</Link>
              </li>
              <li className="flex flex-col gap-4 items-center lg:items-start">
                <span className="block text-neutral-600">04</span>
                <h3 className="uppercase text-xl">Completion &amp; Final Inspection</h3>
                <p>Conduct a thorough inspection to ensure your satisfaction, addressing any final touch-ups or adjustments as needed. </p>
                <Link href="/contact" className="px-2 py-1 border-2 border-black uppercase inline-block text-sm transition-colors hover:bg-black hover:text-white">Get Started</Link>
              </li>
              <li className="md:col-span-2">
                <Image
                  src={bathroomRemodelImg}
                  alt="photo of a beautiful and modern remodeled bathroom"
                  className=""
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100">
        <div className="container mx-auto">
          <Cta />
        </div>
      </section>
    </main>
  );
}
