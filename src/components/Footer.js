import Link from "next/link"
import links from "@/helpers/links"

const Footer = () => {
  return (
    <footer className="bg-neutral-100 py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12">
          <div className="grid justify-center gap-8 md:grid-cols-3 md:justify-items-center">
            <div>
              <h3 className="text-xl mb-1">Email</h3>
              <a href="mailto:tttskb@gmail.com">tttskb@gmail.com</a>
            </div>
            <div>
              <h3 className="text-xl mb-1">Phone</h3>
              <a href="tel:617-650-8814">(617) 650-8814</a>
            </div>
            <div>
              <h3 className="text-xl mb-1">Location</h3>
              <p>333 Pleasant St, <br />Worcester, MA 01609</p>
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
          <p className="text-center">&copy; 2021 NorthEast Kitchen / Bath</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer