import { motion } from "framer-motion";
import welcome from "../../../../../src/assets/pictures/prayergroup.svg";

const Introb = () => {
  return (
    <>
      <motion.div
        className="relative h-[100vh]"
        initial={{
          position: "relative",
        }}
        whileInView={{
          position: "sticky",
          bottom: 0,
        }}
      >
        <img src={welcome} alt="" className="" />
      </motion.div>
    </>
  );
};

export default Introb;
