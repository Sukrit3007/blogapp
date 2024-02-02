import BlogCards from '@/components/BlogCards'
import React from 'react'



const page = () => {
  return (
    <main className="flex flex-col gap-y-6 items-center justify-between p-8 lg:p-24"> 
      
       <div>
        <BlogCards/>
       </div>
      
    </main>
  )
}

export default page
