import BlogCards from "@/components/BlogCards";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";



export default function Home() {


  return (
    <main className="flex flex-col items-center justify-between gap-6 p-8 lg:p-24">
      
      <div className="flex flex-col gap-0 items-center justify-between min-w-full min-h-96 p-8 lg:p-24 border border-red-400">
        <div className="text-center">
          <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">
            The Blog App
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
          Discover stories, thinking, and expertise <br/>
          from writers on any topic.
          </p>
          <div className="flex items-center justify-center min-w-full">
            <Button className='mt-6 flex  '>Start Reading</Button>
          </div>
        </div>
      </div>
    {/* <Hero/> */}
    <BlogCards/>
    
    </main>
  );
}
