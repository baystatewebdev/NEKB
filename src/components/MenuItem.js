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
        <div className="flex gap-2">
          <Link
            className={`py-4 block relative basis-full hover:text-neutral-500 lg:p-0 ${pathname === href ? 'text-neutral-400' : ''} ${className}`}
            href={href}
          >
            {title}
          </Link>
          <button className="p-4 lg:p-0" onClick={handleSubMenuDropdownClick}>
            {isSubMenuOpen ? <CaretUp size="1em" className="text-2xl lg:text-sm" /> : <CaretDown size="1em" className="text-2xl lg:text-sm" />}
          </button>
        </div>
        <ul className={`pl-4 bg-white flex flex-col lg:divide-y lg:divide-solid lg:divide-neutral-600 lg:bg-black lg:text-white lg:pl-0 lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:w-max lg:shadow-md ${isSubMenuOpen ? '' : 'hidden'}`}>
          {subPages.map((subPage) => (
            <MenuItem link={subPage} key={subPage.title} className="lg:hover:bg-neutral-800 lg:p-3 lg:hover:text-white" />
          ))}
        </ul>
      </li>
    )
  }

  return (
    <li className="border-b border-neutral-100 lg:border-none">
      <Link
        className={`py-4 block relative hover:text-neutral-500 lg:p-0 ${pathname === href ? 'text-neutral-400' : ''} ${className}`}
        href={href}
      >
        {title}
      </Link>
    </li>
  )
}

export default MenuItem