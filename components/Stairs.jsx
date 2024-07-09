import {  motion } from "framer-motion"

const stairAnimation = {
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

// const reverseIndex = (index) => {
//   const totalStep = 6
//   return totalStep - index - 1
// }

const Stairs = () => {
return(
  <>
    <motion.div> 
      <div>1</div>
    </motion.div>
  </>
)
}

export default Stairs

// <>
//       {[...Array(6)].map((_, index) => {
//         return (
//           <motion.div 
//             key={index} 
//             variants={stairAnimation} 
//             initial="initial" 
//             animate="animate" 
//             exit="exit" 
//             transition={{
//               duration: 0.4, 
//               ease: "easeInOut", 
//               delay: reverseIndex(index) * 0.1,
//             }} 
//             className="h-full w-full bg-white relative"
//           />
//         )
//       })}
//     </>