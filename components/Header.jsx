import Link from "next/link"
import Image from "next/image"
import { Button } from '@/components/ui/button'
import logo from '@/public/logo.svg'
import Nav from "./Nav"


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">

      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex gap-4 items-center">
          <Image src={logo} alt="logo" className="w-16 h-fit" />
          <div>
            <h1 className="text-3xl font-semibold">
              Ali Daanish<span className="text-accent">.</span>
            </h1>
            <h2 className="tracking-widest text-sm">PRODUCT DESIGNER</h2>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          mobile nav
        </div>
      </div>
    </header>
  )
}

export default Header