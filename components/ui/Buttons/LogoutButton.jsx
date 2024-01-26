import React from 'react'
import { Button } from "@/components/ui/button";
import Link from 'next/link'
import { signOut,useSession} from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button onClick={signOut} >
        <Link href='/login'>Logout</Link>
    </Button>
  )
}

export default LogoutButton
