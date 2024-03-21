import Mission_0ne from "./Mission_0ne";
import { motion } from "framer-motion";
import Mission_Two from "./Mission_Two";
import Mission_Three from "./Mission_Three";
import Mission_Four from "./Mission_Four";
import Mision_Five from "./Mision_Five";

const Mission = () => {



  return (
    <motion.div
      className=""
      whileInView={{
        backgroundColor: "white",
      }}
    >
      <h1 className="font-black lg:text-[3rem] my-10 text-center md:text-[2rem] text-[1.5rem]">
        The Mission
      </h1>
      <Mission_0ne />
      <Mision_Five />
      <Mission_Two />
      <Mission_Three />
      <Mission_Four />
    </motion.div>
  );
};

export default Mission;
