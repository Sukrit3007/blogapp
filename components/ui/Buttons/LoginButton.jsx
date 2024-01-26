'use client'
import { Button } from "@/components/ui/button";
import Link from 'next/link'

const LoginButton = () => {


  return (
    <Button>
        <Link href='/login'>Login</Link>
    </Button>
  )
}

export default LoginButton
