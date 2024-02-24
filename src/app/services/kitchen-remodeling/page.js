import Image from "next/image"
import Hero from "@/components/Hero"
import Heading from "@/components/Heading"
import { LinkButton } from "@/components/Button"

import heroImg from '../../../../public/img/hero-img.jpg'
// import kitchenImg1 from '../../../public/img/kitchen-remodel-1.jpg'
// import kitchenImg2 from '../../../public/img/kitchen-remodel-2.jpg'
// import kitchenImg3 from '../../../public/img/kitchen-remodel-3.jpg'
// import bathroomImg1 from '../../../public/img/bathroom-remodel-1.webp'
// import bathroomImg2 from '../../../public/img/bathroom-remodel-2.webp'
// import bathroomImg3 from '../../../public/img/bathroom-remodel-3.webp'
// import moreImg1 from '../../../public/img/and-more-1.webp'
// import moreImg2 from '../../../public/img/and-more-2.webp'
// import moreImg3 from '../../../public/img/and-more-3.webp'
import Cta from "@/components/Cta"

export const metadata = {
  title: 'Our Services'
}

const KitchenRemodeling = () => {
  return (
    <main className="text-lg">
      <Hero bgImage={heroImg} bgOverlay="dark">
        <div className="container mx-auto">
          <div className="flex flex-col min-h-[50vh] 2xl:min-h-[35vh] items-center justify-center text-center text-white">
            <Heading className="mb-4">Kitchen Remodeling</Heading>
            <p className="lg:w-8/12 xl:w-6/12">NORTHEAST offers solutions for kitchens and bathrooms in a planned, functional way, with good taste and sophistication, using high-quality materials, technology, and exclusive designs.</p>
          </div>
        </div>
      </Hero>
    </main>
  )
}

export default KitchenRemodeling