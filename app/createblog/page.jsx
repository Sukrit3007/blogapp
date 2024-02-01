'use client'
import {useState} from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

import axios from 'axios'


const page = () => {
  const { toast } = useToast()

  const [formData, setFormData] = useState({
        title:'',
        content:'',
    });

  const handleInputChange = (e) =>{
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
      });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
        const response = await axios.post('/api',formData)
        setFormData({
            title:'',
            content:'',
        })
    } catch (error) {
        console.error(error)
    }
}

  return (
    <main className="flex flex-col items-center justify-between p-12 px-12 lg:px-40"> 
      <form onSubmit={handleSubmit} className='flex flex-col items-end min-w-full gap-6 '>
      
        <Button type="submit" className="max-w-fit"
        onClick={() => {
          toast({
            description: "Your blog has been published.",
          })
        }} >Publish
        </Button>

          <Input  
          type='text'
          name="title" 
          placeholder="Title" 
          value={formData.title}
          onChange={handleInputChange}
          className="min-h-24 text-3xl border-0"
          />

          <Textarea  
          name="content" 
          placeholder="Tell your Story..." 
          rows={8}
          value={formData.content}
          onChange={handleInputChange}
          className="min-h-screen border-1"
          />

      </form>
    </main>
  )
}

export default page
