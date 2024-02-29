/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
        source: '/more-services',
        destination: '/services/other-services',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
