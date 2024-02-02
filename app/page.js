import { Button } from "@/components/ui/button";
import Link from 'next/link'

export default function Home() {


  return (
    <main className="flex flex-col items-center justify-center min-h-screen min-w-full gap-6 p-8 lg:p-24 z-0">
      
        <div className="text-center ">
          <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">
            The CRUD App
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose">
          Introducing, a robust CRUD application built on the Next.js framework 
          and enriched with the sleek aesthetics of the Shadcn UI library. Seamlessly 
          integrating front-end and back-end functionalities, this project serves as a 
          testament to my full-stack development prowess.
          </p>
          <div className="flex items-center justify-center min-w-full">
            <Button className='mt-6 flex'> <Link href='/saved'>Start Reading</Link></Button>
          </div>
        </div>
      
    </main>
  );
}
