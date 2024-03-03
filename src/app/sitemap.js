export default function sitemap() {
  const url = "https://northeastkandb.com"
  const routes = [
    '',
    '/about',
    '/contact',
    '/partners',
    '/services',
    '/services/bathroom-remodeling',
    '/services/kitchen-remodeling',
    '/services/other-services',
    '/testimonials',
    '/work',
  ]

  return routes.map((route) => {
    return {
      url: url + route,
      lastModified: new Date()
    }
  })
}