"use client"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

import images from "@/helpers/work"

const formattedImgArray = images.map((img) => ({
  original: img.src.src,
  originalAlt: img.alt || '',
  loading: 'lazy'
}))


const Gallery = ({ galleryImages = [] }) => {
  return <ImageGallery
    items={galleryImages.length > 0 ? galleryImages : formattedImgArray}
    lazyLoad={true}
    showPlayButton={false}
  />
}

export default Gallery