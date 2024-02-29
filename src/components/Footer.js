import Link from "next/link"
import { ExternalLink } from '@/components/Link'
import links from "@/helpers/links"

const Footer = () => {
  return (
    <footer className="bg-neutral-100 py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12">
          <div className="grid justify-center gap-8 md:grid-cols-3 md:justify-items-center">
            <div>
              <h3 className="text-xl mb-1">Email</h3>
              <ExternalLink href="mailto:thais@northeastkitchenbath.com">thais@northeastkitchenbath.com</ExternalLink>
            </div>
            <div>
              <h3 className="text-xl mb-1">Phone</h3>
              <ExternalLink href="tel:617-650-8814">(617) 650-8814</ExternalLink>
            </div>
            <div>
              <h3 className="text-xl mb-1">Location</h3>
              <ExternalLink href="https://maps.app.goo.gl/FgHCaDDAy4iP1Mez9" target="_blank">516 Boston Turnpike, <br />Shrewsbury, MA 01545</ExternalLink>
            </div>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-4 justify-center lg:gap-8">
              {links.map((link) => (
                <li key={link.title}>
                  <Link
                    className="block border-b border-neutral-100 lg:border-none lg:p-0"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-center text-sm">&copy; 2021 NorthEast Kitchen &amp; Bath. Website by <ExternalLink href="https://baystatewebdevelopment.com/" target="_blank" className="font-normal">Bay State Web Development</ExternalLink></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer