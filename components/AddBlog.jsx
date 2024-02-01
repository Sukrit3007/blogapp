'use client'
import {useState} from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

import axios from 'axios'



const AddBlog = () => {
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
    <form onSubmit={handleSubmit} className='flex flex-col items-center min-w-full gap-6 '>
        <Input  
        type='text'
        name="title" 
        placeholder="Title" 
        value={formData.title}
        onChange={handleInputChange}
        
        />
        <Textarea  
        name="content" 
        placeholder="Content..." 
        rows={8}
        value={formData.content}
        onChange={handleInputChange}
        />

        <Button type="submit" className="max-w-fit" >Add</Button>
    </form>
  ) 
}

export default AddBlog
