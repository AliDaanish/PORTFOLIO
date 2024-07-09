"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet" 
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries} from 'react-icons/ci'
import links from "../index"
import Image from "next/image"
import logo from '@/public/logo.svg'

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-11 mx-auto">
                    <Link href="/">
                        <Image src={logo} alt="logo" className="w-24 h-fit" />
                    </Link>
                </div>

                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return(
                            <Link 
                                href={link.path} 
                                key={index} 
                                className={`${
                                    link.path === pathname &&
                                    "text-accent border-b-2 border-accent"
                                    } text-xl capitalize hover:text-accent transition-all`}
                            >

                                {link.name}
                                
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
  )
}

export default MobileNav