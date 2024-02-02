'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


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
            <Card key={item._id} >

            <CardHeader>
              <CardTitle>
                <h1 className="flex flex-wrap scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-left">
                  {item.title}
                </h1>
              </CardTitle>
            </CardHeader>

            <CardContent>
            <p className="flex flex-wrap leading-7 [&:not(:first-child)]:mt-6 text-left">
              {item.content}
            </p>
            </CardContent>

            </Card>
      ))}
    </>
      

  )
}

export default BlogCards
