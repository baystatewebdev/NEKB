import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "@/components/Button"
import Card from "@/components/Card"
import kitchenRemodelImg from '../../public/img/kitchen-remodel.jpg'
import bathroomRemodelImg from '../../public/img/bathroom-remodel.jpg'

export default function Home() {
  return (
    <main className="text-lg">
      <Hero />
      <section className="my-24">
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
      <section className="mt-24">
        <div className="py-16 bg-gray-gradient-r lg:py-32">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 items-center gap-24">
              <div>
                <Image src={kitchenRemodelImg} alt="photo of a beautiful and modern remodeled kitchen" />
              </div>
              <div className="text-center lg:text-left">
                <span className="uppercase text-primary inline-block mb-4">We are Innovators</span>
                <h2 className="text-4xl md:text-5xl mb-4 lg:leading-normal">Making Enchanting Memories</h2>
                <p className="text-neutral-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100">
        <div className="container mx-auto py-16 lg:py-32">
          <div className="grid lg:grid-cols-2 items-center gap-24">
            <div className="text-center lg:text-left">
              <span className="uppercase text-primary inline-block mb-4">We are Listening</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 lg:leading-normal">We Aim to Set the Trends of Modern Living</h2>
              <p className="text-neutral-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 lg:leading-normal">Consultations & Services</h2>
                <p className="text-neutral-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <LinkButton href="/work">Explore</LinkButton>
              </div>
              <ul className="flex flex-col gap-8">
                <Card type="li">
                  <Image
                    src={bathroomRemodelImg}
                    alt="photo of a beautiful and modern remodeled bathroom"
                    className="w-24 h-24 object-cover rounded-full"
                  />
                  <div className="text-center lg:text-left">
                    <h3 className="mb-1 text-2xl">Essential Design Program</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                  </div>
                </Card>
                <Card type="li">
                  <Image
                    src={bathroomRemodelImg}
                    alt="photo of a beautiful and modern remodeled bathroom"
                    className="w-24 h-24 object-cover rounded-full"
                  />
                  <div className="text-center lg:text-left">
                    <h3 className="mb-1 text-2xl">Essential Design Program</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-16 lg:leading-normal">How It&apos;s Done</h2>
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
                <h3 className="uppercase text-xl">Pre-Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <Link href="/" className="uppercase inline-block text-sm px-4 py-1 mt-2 border-2 border-black rounded transition hover:bg-black hover:text-white">Explore</Link>
              </li>
              <li className="flex flex-col gap-4 items-center lg:items-start">
                <span className="block text-neutral-600">02</span>
                <h3 className="uppercase text-xl">Development</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <Link href="/" className="uppercase inline-block text-sm px-4 py-1 mt-2 border-2 border-black rounded transition hover:bg-black hover:text-white">Explore</Link>
              </li>
              <li className="flex flex-col gap-4 items-center lg:items-start">
                <span className="block text-neutral-600">03</span>
                <h3 className="uppercase text-xl">Documentation</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <Link href="/" className="uppercase inline-block text-sm px-4 py-1 mt-2 border-2 border-black rounded transition hover:bg-black hover:text-white">Explore</Link>
              </li>
              <li className="flex flex-col gap-4 items-center lg:items-start">
                <span className="block text-neutral-600">04</span>
                <h3 className="uppercase text-xl">Excecution</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <Link href="/" className="uppercase inline-block text-sm px-4 py-1 mt-2 border-2 border-black rounded transition hover:bg-black hover:text-white">Explore</Link>
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
    </main>
  );
}
