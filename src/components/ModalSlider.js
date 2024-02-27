"use client"
import { useState } from "react"
import Modal from "./Modal"
import Slider from "./Slider"
import { ArrowsOutSimple } from "@phosphor-icons/react"

const ModalSlider = ({ children, slideHeight = 350, modalSlideHeight = 550 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const emblaOptions = {
    startIndex: currentSlide
  }

  const handleSlideChange = (newIndex) => {
    setCurrentSlide(newIndex)
  }

  if (isModalOpen) {
    return (
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Slider slideHeight={modalSlideHeight} emblaOptions={emblaOptions} updateCurrentSlide={handleSlideChange}>
          {children}
        </Slider>
      </Modal>
    )
  }

  return (
    <div className="relative">
      <button onClick={handleOpenModal} className="text-white bg-black bg-opacity-30 absolute top-0 right-0 p-2 z-10">
        <ArrowsOutSimple size="2rem" />
      </button>
      <Slider slideHeight={slideHeight} emblaOptions={emblaOptions} updateCurrentSlide={handleSlideChange}>
        {children}
      </Slider>
    </div>
  )
}

export default ModalSlider