import ReadMoreButton from "../../Utils/ReadMoreButton";
import AboutUsVision from "../../../../assets/pictures/AboutUsVision.png";
import { motion } from "framer-motion";
// import "./vision.css"

const Vision = () => {
  return (
    <div
      className="text-center relative lg:mb-[10vh] bg-black bg-fixed lg:h-[70vh] md:h-[40vh] h-[50vh]"
      style={{ backgroundImage: `url(${AboutUsVision})` }}
    >
      <div className="lg:py-[10vh] md:py-[5vh] py-[5vh]">
        <motion.div
          className="relative text-white"
          initial={{ opacity: 1, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              staggerChildren: 12, // Adjust this value to specify the desired delay between children
            },
          }}
        >
          <motion.h1
            className="font-black lg:text-[3rem] my-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            }}
          >
            THE VISION
          </motion.h1>
          <motion.p
            className="lg:text-[1.5rem] text-center lg:px-[20vw] md:px-[10vw] 
              md:text-[1.5rem] px-[2rem]
              "
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            }}
          >
            Christ Leadership Mission is a ministry established by the Lord to
            make disciples and raise leaders for Jesus and for the nations.
          </motion.p>
        </motion.div>
        <motion.div className="py-[5vh] text-center flex justify-center relative z-[40]">
          <ReadMoreButton />
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
