"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="w-full h-full relative mt-0">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn"}
            }}
        >
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeInOut"}
                }}className="w-[398px] h-[298px] xl:w-[698px] xl:h-[498px] mix-blend-lighten">
                <Image 
                    src="/assets/mockup.png"
                    priority
                    quality={100}
                    fill
                    alt=""
                    className="object-contain sm:object-top"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Hero