import logo from 'public/img/logo.webp'

const LocalBusinessSchema = () => {

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "NorthEast Kitchen / Bath",
    "image": logo.src,
    "@id": "https://northeastkandb.com",
    "url": "https://northeastkandb.com",
    "telephone": "617-650-8814",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "516 Boston Turnpike",
      "addressLocality": "Shrewsbury",
      "addressRegion": "MA",
      "postalCode": "01545",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }, {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    }],
    "sameAs": [
      "https://www.facebook.com/northestkitchenandbath",
      "https://www.instagram.com/northeastkitchenbath/"
    ]
  }

  return <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
}

export default LocalBusinessSchema