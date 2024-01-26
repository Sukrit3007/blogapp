'use client'
import React from 'react'
import {useSession} from "next-auth/react";
import LogoutButton from '../ui/Buttons/LogoutButton';
import LoginButton from '../ui/Buttons/LoginButton';
import { Button } from '@/components/ui/button';
import Link from 'next/link'

const NavbarAuthButton = () => {
    
    const {data,status} = useSession()
    
  return (
    <div>
        {
            status==="authenticated"?(
                <LogoutButton/>
            ):(
                <>
                    <Button asChild variant="ghost">
                        <Link href='/write'>
                            Write
                        </Link>
                    </Button>

                    <LoginButton/>

                </>
            )
        }
    </div>
  )
}

export default NavbarAuthButton
