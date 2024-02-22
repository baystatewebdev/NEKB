"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useCallback, useEffect, Children } from "react"
import { CaretRight, CaretLeft, DotOutline } from '@phosphor-icons/react'

const Slider = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentSlide, setCurrentSlide] = useState(0)
  const childrenCount = Children.count(children)

  const handleScrollSlideChange = useCallback((offset) => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = prevSlide + offset
      if (nextSlide >= childrenCount) {
        return 0
      } else if (nextSlide < 0) {
        return childrenCount - 1
      }
      return nextSlide
    })
  }, [childrenCount])

  const scrollPrevious = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
      handleScrollSlideChange(-1)
    }
  }, [emblaApi, handleScrollSlideChange])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      handleScrollSlideChange(1)
    }
  }, [emblaApi, handleScrollSlideChange])

  const handleButtonClick = (index) => {
    if (emblaApi) {
      emblaApi.scrollTo(index)
      setCurrentSlide(index)
    }
  }

  const handleKeyboardPress = useCallback((e) => {
    if (e.key === 'ArrowRight') {
      scrollNext()
    } else if (e.key === 'ArrowLeft') {
      scrollPrevious()
    }
  }, [scrollNext, scrollPrevious])

  useEffect(() => {
    document.addEventListener('keyup', handleKeyboardPress)

    return () => {
      document.removeEventListener('keyup', handleKeyboardPress)
    }
  }, [handleKeyboardPress])

  return (
    <div className="relative" onKeyUp={handleKeyboardPress}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-end">
          {Children.map(children, (child, index) =>
            <div className="grow-0 shrink-0 basis-full min-w-0" key={index}>
              {child}
            </div>
          )}
        </div>
      </div>
      <div className='flex justify-center items-center gap-4 w-full p-4 text-gray-600'>
        <button onClick={scrollPrevious}>
          <CaretLeft size="2rem" />
          <span className='sr-only'>Scroll to previous slide</span>
        </button>
        <div className="flex overflow-hidden">
          {new Array(childrenCount).fill(null).map((child, index) => {
            const iconProps = { size: 32 }
            if (index === currentSlide) {
              iconProps.weight = 'fill'
            }
            return (
              <button onClick={() => handleButtonClick(index)} key={index}>
                <DotOutline {...iconProps} />
                <span className='sr-only'>Scroll to slide {index + 1}</span>
              </button>
            )
          })}
        </div>
        <button onClick={scrollNext}>
          <CaretRight size="2rem" />
          <span className='sr-only'>Scroll to next slide</span>
        </button>
      </div>
    </div>

  )
}

export default Slider