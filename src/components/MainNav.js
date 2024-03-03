"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import links from "@/helpers/links"
import { usePathname } from "next/navigation"
import { useWindowSize } from "@uidotdev/usehooks"
import MenuItem from "./MenuItem"
import { FacebookLogo, InstagramLogo, List, Phone, X } from "@phosphor-icons/react"
import { LinkButton } from "./Button"

const MainNav = () => {
  const pathname = usePathname()
  const [isNavActive, setIsNavActive] = useState(false)
  const { width } = useWindowSize()
  const isLandingPage = pathname === '/free-consultation'

  // Toggle Nav based on screen size
  useEffect(() => {
    if (width >= 1024) {
      setIsNavActive(true)
    } else {
      setIsNavActive(false)
    }
    document.body.classList.remove('overflow-hidden')
  }, [width, pathname])

  const navMenuClasses = isNavActive ? 'before:block before:absolute before:bg-black before:top-0 before:right-full before:opacity-40 before:w-full before:h-full lg:before:hidden' : 'hidden'
  const handleNavClick = () => {
    setIsNavActive((previousState) => !previousState)
    if (document.body.classList.contains('overflow-hidden')) {
      document.body.classList.remove('overflow-hidden')
    } else {
      document.body.classList.add('overflow-hidden')
    }
  }

  return (
    <div className="border-b border-neutral-100 py-5 relative z-50">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center uppercase">
          <Link href="/" className="tracking-wide leading-tight">Northeast<br />Kitchen / Bath</Link>
          <button
            onClick={handleNavClick}
            className="lg:hidden"
            aria-controls="main-nav"
            aria-expanded={isNavActive}
          >
            {isNavActive
              ?
              <X color="currentColor" size="2rem" />
              :
              <List color="currentColor" size="2rem" />
            }
            <span className="sr-only">Toggle main navigation</span>
          </button>
          <div id="main-nav" className={`bg-white flex flex-col pl-4 gap-8 absolute top-full right-0 w-10/12 h-dvh lg:items-center lg:gap-16 lg:static lg:h-auto lg:w-auto lg:flex-row ${navMenuClasses}`}>
            <ul className="flex flex-col mt-8 lg:text-sm lg:mt-0 lg:gap-8 lg:flex-row">
              {links.map((link) => (
                <MenuItem key={link.title} link={link} />
              ))}
            </ul>
            <ul className="flex flex-wrap gap-4">
              {isLandingPage
                ?
                <li>
                  <LinkButton href="tel:617-650-8814" className="inline-flex items-center gap-2 capitalize" target="">
                    <Phone color="currentColor" size="1.6rem" />
                    Call Now
                  </LinkButton>
                </li>
                :
                <>
                  <li>
                    <a href="https://www.facebook.com/northestkitchenandbath" className="text-neutral-400" target="_blank">
                      <FacebookLogo color="currentColor" size="1.6rem" />
                      <span className="sr-only">Facebook.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/northeastkitchenbath/" className="text-neutral-400" target="_blank">
                      <InstagramLogo color="currentColor" size="1.6rem" />
                      <span className="sr-only">Instagram.com</span>
                    </a>
                  </li>
                </>
              }
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MainNav