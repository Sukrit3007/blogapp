import BlogCards from '@/components/BlogCards'
import React from 'react'
import Link from 'next/link'


const page = () => {
  return (
    <main className="flex flex-col gap-y-6 items-center justify-between p-8 lg:p-24"> 
      <Link href='/blog'>  
        <BlogCards/>
      </Link>
    </main>
  )
}

export default page
