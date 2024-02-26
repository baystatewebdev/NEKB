"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useWindowSize } from "@uidotdev/usehooks"
import { CaretDown, CaretUp } from "@phosphor-icons/react"

const MenuItem = ({ link, className = '' }) => {
  const { title, href, subPages } = link
  const pathname = usePathname()
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const { width } = useWindowSize()

  const handleSubMenuDropdownClick = () => {
    setIsSubMenuOpen((prevState) => !prevState)
  }

  const handleHover = (e) => {
    if (width < 1024) {
      return
    }
    if (e.type === 'mouseenter') {
      setIsSubMenuOpen(true)
    } else {
      setIsSubMenuOpen(false)
    }
  }

  // Toggle Nav based on screen size
  useEffect(() => {
    setIsSubMenuOpen(false)
  }, [width, pathname])

  if (subPages) {
    return (
      <li className="border-b border-neutral-100 lg:border-none relative" onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <div className="flex gap-4">
          <Link
            className={`py-4 block relative basis-full lg:p-0 ${pathname === href ? 'text-neutral-400' : ''} ${className}`}
            href={href}
          >
            {title}
          </Link>
          <button className="p-4 lg:p-0" onClick={handleSubMenuDropdownClick}>
            {isSubMenuOpen ? <CaretUp size="1.5rem" /> : <CaretDown size="1.5rem" />}
          </button>
        </div>
        <ul className={`pl-4 bg-white flex flex-col lg:gap-4 lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:w-max lg:shadow-md lg:p-4 ${isSubMenuOpen ? '' : 'hidden'}`}>
          {subPages.map((subPage) => (
            <MenuItem link={subPage} key={subPage.title} />
          ))}
        </ul>
      </li>
    )
  }

  return (
    <li className="border-b border-neutral-100 lg:border-none">
      <Link
        className={`py-4 block relative lg:p-0 ${pathname === href ? 'text-neutral-400' : ''} ${className}`}
        href={href}
      >
        {title}
      </Link>
    </li>
  )
}

export default MenuItem