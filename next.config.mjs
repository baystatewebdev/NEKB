/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{
          type: 'host',
          value: 'www.northeastkandb.com'
        }],
        destination: 'https://northeastkandb.com/:path*',
        permanent: true
      },
      {
        source: '/our-partners',
        destination: '/partners',
        permanent: true
      },
      {
        source: '/kitchen',
        destination: '/services/kitchen-remodeling',
        permanent: true
      },
      {
        source: '/bathroom',
        destination: '/services/bathroom-remodeling',
        permanent: true
      },
      {
        source: '/bathrooms',
        destination: '/services/bathroom-remodeling',
        permanent: true
      },
      {
        source: '/more-services',
        destination: '/services/other-services',
        permanent: true
      },
      {
        source: '/pages-sitemap.xml',
        destination: '/sitemap.xml',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
