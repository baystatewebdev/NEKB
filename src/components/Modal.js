"use client"
import { X } from "@phosphor-icons/react"
import { useRef, useState, useEffect } from "react"

const Modal = ({ children, isOpen = false, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  const modalRef = useRef()

  const handleCloseModal = () => {
    if (onClose) {
      onClose()
    }
    setIsModalOpen(false)
  }

  useEffect(() => {
    const modalElm = modalRef.current

    if (isModalOpen) {
      modalElm?.showModal()
      document.body.classList.add('overflow-hidden')
    } else {
      modalElm?.close()
      document.body.classList.remove('overflow-hidden')
    }
  }, [isModalOpen])

  useEffect(() => {
    return () => {
      // clean-up and ensure scroll resumes on unmount
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCloseModal()
    }
  }

  return (
    <dialog ref={modalRef} className="relative p-4 lg:p-12 bg-white backdrop:bg-black backdrop:bg-opacity-70" onKeyDown={handleKeyDown}>
      <button className="absolute top-0 right-0 p-4 z-10" onClick={handleCloseModal}>
        <X size="2rem" />
        <span className="sr-only">Close modal</span>
      </button>
      {children}
    </dialog>
  )
}

export default Modal