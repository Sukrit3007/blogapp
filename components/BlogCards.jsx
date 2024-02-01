'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BlogCards = () => {
    const [blogData, setBlogData] = useState([]);

    const fetchBlog = async ()=>{
        try {
            const response = await axios.get('/api');
            setBlogData(response.data.blogs);
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        fetchBlog();
    },[]);
  return (
    <>
    {blogData.map((item)=>(
        <div key={item._id} className='flex flex-col gap-6 min-w-full max-w-full max-h-96 truncate items-start p-12  lg:px-24 border border-red-500 '>
          <h1 className="flex flex-wrap scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-left">
            {item.title}
          </h1>
    
          <p className="flex flex-wrap leading-7 [&:not(:first-child)]:mt-6 text-left">
            {item.content}
          </p>
        </div>
      ))}
    </>
      

  )
}

export default BlogCards
