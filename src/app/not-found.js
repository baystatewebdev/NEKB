import Link from 'next/link'
import Heading from '@/components/Heading'

export default function NotFound() {
  return (
    <main className='container mx-auto my-24'>
      <div className='grid items-center justify-center divide-y-2 divide-neutral-100 gap-4 text-center md:divide-x-2 md:divide-y-0 md:grid-cols-2'>
        <div className='p-4 flex flex-col items-center justify-center'>
          <Heading level="h1" className='mb-4'>404 <br />Not Found</Heading>
          <p>Sorry, we couldn&apos;t seem to find that page.</p>
        </div>
        <div className='p-4 flex flex-col items-center justify-center'>
          <Heading level='h2' levelStyle="h3" className='mb-4'>Would you like to?</Heading>
          <ul className='list-disc list-inside'>
            <li><Link href="/">Go Home</Link></li>
            <li><Link href="/work">See Our Work</Link></li>
          </ul>
        </div>
      </div>
    </main>
  )
}