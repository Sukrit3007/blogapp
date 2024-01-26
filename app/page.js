'use client'
import { Button } from "@/components/ui/button";
import Link from 'next/link'
import { signOut,useSession} from "next-auth/react";

export default function Home() {
  const {data,status} = useSession()

  console.log(data,status)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    hello main  page
      
    <Button onClick={signOut} >
      <Link href='/login'>Logout</Link>
    </Button>
      
    </main>
  );
}
