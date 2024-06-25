"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import links from "./index"

const Nav = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <nav className="flex gap-8">
      {
      links.map((link, index) => {
        return(  
          <Link 
            href={link.path} 
            key={index} 
            className={`${link.path === pathname && "text-accent hover:text-accent-hover border-b-2 border-accent"}`}
          >
            {link.name}
          </Link>
        )
  })}
    </nav >
  )
}

export default Nav