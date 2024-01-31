'use client'
import { useEffect, useState } from "react";
import axios from 'axios' 
import { Button } from "@/components/ui/button"



export default function Home() {
  const [blogData, setBlogData] = useState([]);

  const fetchBlog = async () =>{
    try {
      const response = await axios.get('/api');
      setBlogData(response.data.blogs) 
    } catch (error) {
      console.log(error)
    }
  } 

  const deleteBlog = async(id) =>{
    try {
      const response = await axios.delete('/api',{
        params:{
          mongoId:id
        }
      })
    } catch (error) {
      console.log(error)
    }
    fetchBlog();
  }

  useEffect(()=>{
    fetchBlog(); 
  },[])

  return (
    <main className="flex flex-col items-center justify-between p-24">
      {blogData.map((item,index)=>{
        return(
          <div>
              <h1 key={index} className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {item.title}
              </h1>
              <p key={index} className="leading-7 [&:not(:first-child)]:mt-6">
                {item.content}
              </p>
              <Button variant="destructive" onClick={()=>deleteBlog(item._id)}>
                Delete
              </Button>
          </div>
        )
      })}
    </main>
  );
}
