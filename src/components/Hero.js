import Image from "next/image"

const Hero = ({ bgImage, bgOverlay, children }) => {

  const bgOverlayClass = bgOverlay === 'light' ? 'before:bg-white' : 'before:bg-black'

  return (
    <section className="relative">
      {bgImage &&
        <figure
          className={`absolute top-0 left-0 w-full h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full ${bgOverlayClass} before:bg-opacity-50`}
          aria-hidden="true"
        >
          <Image
            src={bgImage}
            className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
            priority={true}
            alt="remodeled high end kitchen"
          />
        </figure>
      }
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

export default Hero