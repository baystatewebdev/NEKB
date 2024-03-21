import Image from "next/image"
import images from "@/helpers/work"

const WorkGallery = ({ galleryImages = [] }) => {
  return (
    <>
      <ul className="grid gap-8 md:grid-cols-2">
        {images.map((image, index) => (
          <li key={index}>
            <Image src={image.src} className="w-full h-full object-cover" alt={image.alt} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default WorkGallery