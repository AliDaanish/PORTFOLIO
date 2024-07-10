import Link from "next/link"
import Image from "next/image"
import { Button } from '@/components/ui/button'
import logo from '@/public/logo.svg'
import Nav from "./Nav"
import MobileNav from "./ui/MobileNav"


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">

      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex gap-4 items-center">
          <Image src={logo} alt="logo" className="w-16 h-fit" />
          <div className="">
            <h1 className="xl:text-3xl text-2xl font-semibold tracking-widest">
              anqadream<span className="text-accent">.</span>com
            </h1>
            <h2 className="tracking-widest text-[13px] xl:text-xl">SOFTWARE DEVELOPER | UI/UX</h2>
            
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header