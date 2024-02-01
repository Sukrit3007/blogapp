'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image"

import axios from 'axios'

const Hero = () => {
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
    <div className='flex flex-col gap-6 items-center max-h-screen px-0  lg:px-24 border border-red-500'>
      {blogData.map((item)=>(
        <div key={item._id}>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-left">
            {item.title}
          </h1>
    
            
    
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-left">
            {item.content}
          </p>
        </div>

      ))}
    </div>
  )
}

export default Hero
