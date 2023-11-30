import { motion } from "framer-motion";
import bibleReading from "./Images/bibleReading.svg";
// import readtheword from "./Images/readtheword.jpeg";
// import prayergroup from "./Images/prayergroup.svg";
// import UpcomingEvents from "../upcomingEvents/UpcomingEvents";
// import Introb from "../Introb.jsx/Introb";

const ClmOneFamily = () => {
  return (
    <>
      <motion.div
        className="sticky top-0 bg-white z-[800] shadow-2xl
      shadow-black h-[150vh]"
        initial={{
          y: 0,
          transition: {
            duration: 3,
          },
        }}
        whileInView={{
          y: [55,10,0],
          transition: {
            duration: 2,
            delay: .1,
            ease: "linear",
            type: "keyframes",
          },
        }}
      >
        <div className='text-center py-[2rem] lg:pt-[4rem] lg:mb-[2rem] font-["Arial"]'>
          <motion.h1
            className="font-black lg:text-[2rem] text-[1.5rem] md:text-[2rem]
           "
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 3,
                type: "spring",
                stiffness: 100,
                ease: "linear",
                delay: 0.2,
              },
            }}
          >
            CLM, <span className="text-[#F66D0A]">One Family</span>
          </motion.h1>
          <motion.h3
            className="font-bold pt-[1rem] mx-[2rem]"
            initial={{ y: 30 }}
            whileInView={{
              y: 0,
              transition: {
                duration: 1,
                stiffness: 100,
                type: "spring",
                bounce: 0.25,
                // delay: .3,
              },
            }}
          >
            We are passionate about our members and we provide a place to grow,
            in faith and other areas.
          </motion.h3>
        </div>
        <div className="lg:flex  lg:px-[4rem] lg:gap-[4rem]">
          <motion.div
            className="lg:w-[90vw] lg:h-[50vh] px-[2rem] lg:px-0  
            relative
           "
          >
            <motion.img
             initial={{ scale: 0.5 }}
             whileInView={{
               scale: 1,
               transition: {
                 duration: 3,
                 type: "spring",
                 bounce: 0.45,
                 delay: 0.1,
               },
             }}
              src={bibleReading}
              alt=""
              className="lg:w-[90vw] px-[2rem] lg:px-0 absolute
               top-0 left-0"
            />
          </motion.div>
          <div className="lg:pt-[4rem] pt-[2rem]">
            <motion.h1
              className="text-center lg:pb-[2rem] pb-[1rem] font-black 
            lg:text-[2rem] text-[1.5rem] md:text-[2rem]"
              initial={{
                x: 25,
              }}
              whileInView={{
                x: 0,
                transition: {
                  duration: 1.5,
                  type: "spring",
                  bounce: 0.7,
                },
              }}
            >
              We are a people of <br />{" "}
              <span className="text-[#F66D0A]">THE WORD.</span>
            </motion.h1>
            <motion.p
              className="text-center font-bold px-[2rem] pb-[2rem] lg:pb-0"
              initial={{
                y: 30,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.5,
                  type: "spring",
                  delay: 0.3,
                },
              }}
            >
              Every week, we have a Bible Study outline, to help our members
              grow in the knowledge of the Word, and to apply this Word in
              becoming better Christians.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ClmOneFamily;
