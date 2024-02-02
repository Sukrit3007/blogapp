'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import { RxPencil2 } from "react-icons/rx";
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from './ModeToggle';
import { useTheme } from "next-themes"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // const { setTheme } = useTheme()

  const [currentTheme, setCurrentTheme] = useState("light");

  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <nav className="flex max-h-fit flex-col items-center justify-between p-4 sticky top-0 bg-inherit z-50 border-b-4">
  
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href='/'>CRUD</Link>
        </div>

        {/* FOR MOBILE */}
        <div className='lg:hidden'>
          <Sheet>
            <SheetTrigger>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-8">
              <SheetHeader>
                <SheetTitle>The CRUD APP</SheetTitle>
                
              </SheetHeader>
              <div className="grid gap-4 py-4">

                <div className="grid grid-cols-4 items-center gap-4">       
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Link href='/createblog'>Write</Link>                  
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Link href='/saved' >Saved</Link>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  Logout
                </div>

              </div>

              <SheetFooter>
                <div className='flex flex-col gap-2'>
                  <Switch theme={theme} onClick={handleThemeToggle} />
                  <Label>Theme</Label>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* FOR DESKTOP */}
        <ul className="hidden lg:flex space-x-4 pt-2">

          <li>
              <Button variant="link">
                <RxPencil2  className="mr-2 h-4 w-4" /> 
                <Link href='/createblog'>Write</Link>
              </Button> 
          </li>

          <li>
            <ModeToggle/>
          </li>

          <li>  
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
          </li>

        </ul>
        
        </div>
    </nav>
  )
}

export default Navbar
