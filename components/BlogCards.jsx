'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import {Card,CardContent,CardHeader,CardTitle,} from "@/components/ui/card"
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import { RxPencil2 } from "react-icons/rx";
import { Toaster, toast } from 'sonner'


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
    
    const deleteBlog = async(Id, event)=>{
      event.preventDefault();
      try {
        const response = await axios.delete('/api',{
          params:{
            mongoId:Id
          }
        })
      } catch (error) {
        console.error(error);
      }
      fetchBlog();
    }

    useEffect(()=>{
        fetchBlog();
    },[]);

  return (
    <>
    {blogData.map((item)=>(
            <Card key={item._id} >

            <CardHeader>
              <CardTitle >
                <div className='container mx-auto flex items-center justify-between'>
                  <h1 className="flex flex-wrap scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-left">
                    {item.title}
                  </h1>

                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="5" cy="12" r="2" fill="currentColor" />
                        <circle cx="12" cy="12" r="2" fill="currentColor" />
                        <circle cx="19" cy="12" r="2" fill="currentColor" />
                      </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>
                        <Toaster richColors closeButton position="bottom-center" />
                        <Button variant="destructive" className="min-w-full" 
                          onClick={(event)=>{deleteBlog(item._id, event);
                            }}>
                          Delete
                        </Button>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Button className="min-w-full">
                          <RxPencil2  className="mr-2 h-4 w-4" /> 
                          Edit
                        </Button>
                      </DropdownMenuItem>
                      
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

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
