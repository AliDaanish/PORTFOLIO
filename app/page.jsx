import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

import Social from "@/components/Social"
import Hero from "@/components/Hero"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl tracking-widest">SOFTWARE DEVELOPER</span>
            <h1 className="h1">Hi There I'm <br />
              <span className="text-accent">Ali Daanish</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              <span className="text-accent font-bold">Ali</span> is an Innovative Product Designer and Software Developer. I Pleased to Provide you crafting elegant digital experiences with My Proficient in Modern Javascript.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download Resume </span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  contarinerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div>
            <Hero />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home