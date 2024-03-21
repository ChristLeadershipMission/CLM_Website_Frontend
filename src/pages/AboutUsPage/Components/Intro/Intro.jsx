import { motion } from "framer-motion";
import "./Intro.css";
 
const Intro = () => {
  const width = window.outerWidth;
  console.log(width);

  return (
    <motion.div 
      className="flex md:gap-[30rem] w-[400vw] gap-[20rem]
      relative left-[-30rem] overflow-x-hidden
      "
      whileInView={{
        left: [ "-30rem", "-20rem", "-10rem", "0rem", "10rem", "20rem","30rem"],
        transition:{
          duration: 20,
          repeat: Infinity,
        }
      }}
      >
        <h1 className="heading_One font-black text-[2rem] md:text-[3rem] lg:text-[4rem] my-10 text-center">WHO WE ARE —</h1>
        <h1 className="heading_One font-black text-[2rem] md:text-[3rem] lg:text-[4rem] my-10 text-center">WHO WE ARE —</h1>
        <h1 className="heading_One font-black text-[2rem] md:text-[3rem] lg:text-[4rem] my-10 text-center">WHO WE ARE —</h1>
    </motion.div>
  )
}

export default Intro;