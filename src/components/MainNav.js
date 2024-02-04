"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FacebookLogo, InstagramLogo, List, X } from "@phosphor-icons/react"

const MainNav = () => {
  const pathname = usePathname()
  const [isNavActive, setIsNavActive] = useState(false)

  const navMenuClasses = isNavActive ? 'before:block before:absolute before:bg-black before:top-0 before:left-0 before:w-full before:h-full' : '' // hidden on 2nd

  const links = [
    {
      'title': 'Home',
      'href': '/'
    },
    {
      'title': 'About',
      'href': '/about'
    },
    {
      'title': 'Services',
      'href': '/services'
    },
    {
      'title': 'Testimonials',
      'href': '/testimonials'
    },
    {
      'title': 'Partners',
      'href': '/partners'
    },
    {
      'title': 'Work',
      'href': '/work'
    },
    {
      'title': 'Contact',
      'href': '/contact'
    },
  ]

  return (
    <div className="border-b border-neutral-100 py-5">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center uppercase">
          <Link href="/" className="tracking-wide leading-tight">Northeast<br />Kitchen / Bath</Link>
          <button
            onClick={() => setIsNavActive(!isNavActive)}
            className="lg:hidden"
          >
            {isNavActive
              ?
              <X color="currentColor" size="2rem" />
              :
              <List color="currentColor" size="2rem" />
            }
            <span className="sr-only">Toggle main navigation</span>
          </button>
          <div className={`bg-white flex flex-col pl-4 gap-8 fixed top-24 right-0 w-10/12 h-dvh lg:gap-16 ${navMenuClasses}`}>
            <ul className="flex flex-col mt-8 lg:gap-4">
              {links.map((link) => (
                <li key={link.title}>
                  <Link
                    className={`py-4 block border-b border-neutral-100 ${pathname === link.href ? 'text-neutral-400' : ''}`}
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-4">
              <li>
                <a href="https://facebook.com" className="text-neutral-400" target="_blank">
                  <FacebookLogo color="currentColor" size="1.6rem" />
                  <span className="sr-only">Facebook.com</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-neutral-400" target="_blank">
                  <InstagramLogo color="currentColor" size="1.6rem" />
                  <span className="sr-only">Instagram.com</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MainNav