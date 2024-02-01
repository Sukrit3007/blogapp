'use client'
import React from 'react'
import Link from 'next/link'
import { RxPencil2 } from "react-icons/rx";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {

  const isAuthenticated = true;

  return (
    <nav className="flex max-h-fit flex-col items-center justify-between p-4 sticky top-0 border border-red-500">
  
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href='/'> LOGO</Link>
        </div>
        <ul className="hidden lg:flex space-x-4 pt-2">

          <li>
           {isAuthenticated ? (
              <Button variant="link">
                <RxPencil2  className="mr-2 h-4 w-4" /> 
                <Link href='/createblog'>Write</Link>
              </Button> 
           ):(
              <Button variant="link" disabled >
                <RxPencil2  className="mr-2 h-4 w-4" /> 
                <Link href='/createblog'>Write</Link>
            </Button> 
           )

           }
          </li>

          <li>
          { isAuthenticated ?  (
            <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <Link href='/saved' >Saved</Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          

            
          ):(
            <Button href='/login'>Login</Button>
          )
          }
          </li>

        </ul>
      </div>
    
    </nav>
  )
}

export default Navbar
