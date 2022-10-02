import Link from 'next/link';
import * as React from 'react';

export default function NotFoundPage() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <h1 className='md:text-6xl mt-8 text-4xl'>Page Not Found</h1>
          <Link className='md:text-lg mt-4' href='/'>
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
