import { Link } from "react-router-dom";
import clmLogo from "../../../../../src/assets/pictures/clmLogo.svg";
import "./navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./NavBar.css";

const NavBar = () => {
  const [showMobileNavBar, setShowMobileNavBar] = useState();
  const [showMediaDropDown, setShowMediaDropDown] = useState(false);

  // const outerWidth = window.outerWidth;

  const toggleMobileNavBar = () => {
    setShowMobileNavBar(!showMobileNavBar);
    console.log(showMobileNavBar);
  };
  return (
    <>
      <div className=" z-[800] relative">
        <div
          className={`lg:hidden flex justify-between px-[4vw] py-[1vh] ${
            showMobileNavBar ? "hidden" : "block"
          }`}
        >
          <Link to={"/"}>
            <img src={clmLogo} alt="" className="w-[5vw]" />
          </Link>
          <div
            onClick={toggleMobileNavBar}
            className=" cursor-pointer font-black text-blue-400"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="text-black text-[1.2rem]"
            />
          </div>
        </div>
        <div
          className={`bg-white lg:flex lg:justify-between 
        lg:px-[2rem] lg:py-[2rem] h-screen lg:h-[5vh]
         lg:w-screen w-[50vw] ml-[30vw] lg:ml-0
         ${!showMobileNavBar ? "hidden" : "block"}`}
        >
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.2,
              },
            }}
          >
            <Link to={"/"}>
              <img
                src={clmLogo}
                alt=""
                className="lg:w-[2.5rem] lg:mt-[-1.5rem] hidden lg:block"
              />
            </Link>
          </motion.div>
          <div>
            <span
              className="absolute right-[15vw] top-[2vw] font-black lg:hidden cursor-pointer
            z-[900]"
              onClick={toggleMobileNavBar}
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="text-black text-[1.5rem]"
              />
            </span>
            <motion.ul
              className='lg:flex lg:gap-[3rem] lg:text-xl 
                lg:font-semibold font-["Arial"] lg:mr-[10vw] text-center 
                text-[5vw] mt-[18vh] lg:mt-[-2vh] w-[89%] lg:w-auto 
                '
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.3,
                  bounce: 1,
                },
              }}
            >
              <Link to={"/"}>
                {" "}
                <li className=" relative">Home</li>{" "}
              </Link>
              <hr
                className="by-blue-900 ring-[0.01rem] ring-blue-900
                  mb-[5vh] lg:hidden"
              />
              <Link to={"/about"}>
                {" "}
                <li className=" relative">About us</li>{" "}
              </Link>
              <hr
                className="by-blue-900 ring-[0.01rem] ring-blue-900
                  mb-[5vh] lg:hidden"
              />
              {/* <Link to={"/Events"}>
                {" "}
                <li className=" relative">Events</li>{" "}
              </Link>
              <Link to={"/Campus"}>
                <hr
                  className="by-blue-900 ring-[0.01rem] ring-blue-900
                  mb-[5vh] lg:hidden"
                />{" "}
                <li className=" relative">Campus</li>{" "}
              </Link>
              <hr
                className="by-blue-900 ring-[0.01rem] ring-blue-900
                  mb-[5vh] lg:hidden"
              /> */}
              <Link>
                {" "}
                <li
                  className=" relative"
                  onMouseOver={() => setShowMediaDropDown(true)}
                  onMouseLeave={() => setShowMediaDropDown(false)}
                >
                  Media +
                  {showMediaDropDown ? (
                    <motion.ul
                      className="bg-white text-black absolute right-[-1.5rem] top-7 rounded-md px-30 py-5 text-xl"
                      // animate="visible"
                      // initial="hidden"
                      // variants={ulContainer}
                      animate={{ height: "auto" }}
                      initial={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.li
                        className="text-center px-2 py-3 hover:text-gray-400"
                        // variants={listContainer}
                        // animate="visible"
                        // initial="hidden"
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: -10, opacity: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                      >
                        <Link to={"/media/sermon"}>Video</Link>
                      </motion.li>
                      <motion.hr
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: -10, opacity: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      />
                      <motion.li
                        className="text-center px-2 py-3 hover:text-gray-400"
                        // variants={listContainer}
                        // animate="visible"
                        // initial="hidden"
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: -10, opacity: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <Link to={"/media/gallery"}>Gallery</Link>
                      </motion.li>
                    </motion.ul>
                  ) : null}
                </li>{" "}
              </Link>
              <hr
                className="by-blue-900 ring-[0.01rem] ring-blue-900
                  mb-[5vh] lg:hidden"
              />
              <Link to={"/admin"}>
                {" "}
                <li className=" relative">Admin</li>{" "}
              </Link>
            </motion.ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
