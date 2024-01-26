'use client'
import React from 'react'
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';


const page = () => {

    const {data,status} = useSession()

    const router = useRouter();

    if(status === "loading"){
      return <div>Loading...</div>
    }
    if(status === "authenticated"){
      router.push('/')
    }

    console.log(data,status)
  return (
    <div>
      <Button onClick={()=>signIn("google")} >
        Sign in with google
      </Button>
    </div>
  )
}

export default page
