"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useCallback, useEffect, useRef, Children } from "react"
import { CaretRight, CaretLeft, DotOutline } from '@phosphor-icons/react'

const Slider = ({ children, slideHeight = 550, emblaOptions = {}, updateCurrentSlide }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...emblaOptions })
  const [currentSlide, setCurrentSlide] = useState(emblaOptions.startIndex || 0)
  const sliderControlsRef = useRef()
  const childrenCount = Children.count(children)

  const scrollPrevious = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }, [emblaApi])

  const handleButtonClick = (index) => {
    if (emblaApi) {
      emblaApi.scrollTo(index)
    }
  }

  const handleKeyboardPress = useCallback((e) => {
    if (e.key === 'ArrowRight') {
      scrollNext()
    } else if (e.key === 'ArrowLeft') {
      scrollPrevious()
    }
  }, [scrollNext, scrollPrevious])

  const handleSlideChange = useCallback(() => {
    if (emblaApi) {
      const newSlideIndex = emblaApi.selectedScrollSnap()
      setCurrentSlide(newSlideIndex)
      if (updateCurrentSlide) {
        updateCurrentSlide(newSlideIndex)
      }
    }
  }, [emblaApi, updateCurrentSlide])

  useEffect(() => {
    const controlsRef = sliderControlsRef.current
    controlsRef.addEventListener('keyup', handleKeyboardPress)

    if (emblaApi) {
      emblaApi.on('select', handleSlideChange)
    }

    return () => {
      controlsRef.removeEventListener('keyup', handleKeyboardPress)
      if (emblaApi) {
        emblaApi.off('select', handleSlideChange)
      }
    }
  }, [emblaApi, handleKeyboardPress, handleSlideChange])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-end">
          {Children.map(children, (child, index) =>
            <div className="grow-0 shrink-0 basis-full min-w-0" key={index} style={{ height: slideHeight }}>
              {child}
            </div>
          )}
        </div>
      </div>
      <div className='flex justify-center items-center gap-4 w-full p-4 text-gray-600' ref={sliderControlsRef}>
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