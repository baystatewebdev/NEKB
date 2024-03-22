import { Quotes } from "@phosphor-icons/react/dist/ssr"

const Testimonials = () => {
  return (
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
  )
}

export default Testimonials