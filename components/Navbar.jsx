'use client'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex max-h-fit flex-col items-center justify-between p-6 border border-red-400">
     <Link href='/createblog' > ADD BLOG</Link>
     <Link href="/">Home</Link>
    </div>
  )
}

export default Navbar
