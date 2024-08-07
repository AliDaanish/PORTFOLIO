import { easeInOut, motion } from "framer-motion"

//variants
const transitionVariants = {
    initial: {
      x: "100%",
      width: "100%"
    },
    animate: {
      x: "0%",
      width: "0%",
    },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  }

const Transition = () => {
  return (
    <>
        <motion.div className="fixed top-0 bottom-0 right-full h-screen z-30 bg-blue-950" 
            variants={transitionVariants} 
            initial='initial' 
            animate='animate'
            exit='exit'
            transition={{ 
                delay:0.2, 
                duration: 0.2, 
                ease: 'easeInOut'
            }}
        >
                
        </motion.div>
        <motion.div className="fixed top-0 bottom-0 right-full h-screen z-20 bg-blue-800" 
            variants={transitionVariants} 
            initial='initial' 
            animate='animate'
            exit='exit'
            transition={{ 
                delay:0.2, 
                duration: 0.4, 
                ease: 'easeInOut'
            }}
        >
                
        </motion.div>
        <motion.div className="fixed top-0 bottom-0 right-full h-screen z-10 bg-accent-hover" 
            variants={transitionVariants} 
            initial='initial' 
            animate='animate'
            exit='exit'
            transition={{ 
                delay:0.2, 
                duration: 0.6, 
                ease: 'easeInOut'
            }}
        >
                
        </motion.div>
        
    </>
  )
}

export default Transition