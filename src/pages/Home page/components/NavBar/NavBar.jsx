import { Link } from "react-router-dom";
import clmLogo from "../../../../../src/assets/pictures/clmLogo.svg";
import "./navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const NavBar = () => {
  const [showMobileNavBar, setShowMobileNavBar] = useState();

  const outerWidth = window.outerWidth;

  const toggleMobileNavBar = () => {
    setShowMobileNavBar(!showMobileNavBar);
    console.log(showMobileNavBar);
  };
  return (
    <>
      <div className="relative z-[800]">
        <div
          className={`lg:hidden flex justify-between px-[4vw] py-[1vh] ${
            showMobileNavBar ? "hidden" : "block"
          }`}
        >
          <Link to={"/"}>
            <img src={clmLogo} alt="" className="w-[5vw]" />
          </Link>
          <div onClick={toggleMobileNavBar} 
           className=" cursor-pointer font-black text-blue-400">
            <FontAwesomeIcon icon={faBars}  className="text-black text-[1.2rem]"/>
          </div>
        </div>
        <div
          className={`bg-white lg:flex lg:justify-between 
        lg:px-[2rem] lg:py-[2rem] h-screen lg:h-[5vh]
        fixed lg:w-screen w-[80%] ml-[30vw] lg:ml-0
         ${
          !showMobileNavBar ? "hidden" : "block" 
        }`}
        >
          <div>
            <Link to={"/"}>
              <img
                src={clmLogo}
                alt=""
                className="lg:w-[2.5rem] lg:mt-[-1.5rem] hidden lg:block"
              />
            </Link>
          </div>
          <div>
            <span 
            className="absolute right-[15vw] top-[2vw] font-black lg:hidden cursor-pointer
            z-[900]"
            onClick={toggleMobileNavBar}
            >
              <FontAwesomeIcon icon={faXmark}  className="text-black text-[1.5rem]"/>
            </span>
            <ul
              className='lg:flex lg:gap-[3rem] lg:text-xl 
                lg:font-semibold font-["Arial"] lg:mr-[20vw] text-center 
                text-[5vw] mt-[18vh] lg:mt-[-2vh] w-[89%] lg:w-auto 
                '
            >
              <Link to={"/"}>
                {" "}
                <li>Home</li>{" "}
              </Link>
              <hr className="by-blue-900 ring-[0.01rem] ring-blue-900
                  mb-[5vh] lg:hidden" />
              <Link to={"/about"}>
                {" "}
                <li>About us</li>{" "}
              </Link>
              <hr className="by-blue-900 ring-[0.01rem] ring-blue-900
                  mb-[5vh] lg:hidden" />
              <Link to={"/giving"}>
                {" "}
                <li>Online Giving</li>{" "}
              </Link>
              <hr className="by-blue-900 ring-[0.01rem] ring-blue-900
                  mb-[5vh] lg:hidden" />
              <Link to={"/Events"}>
                {" "}
                <li>Events</li>{" "}
              </Link>
              <Link to={"/Campus"}>
              <hr className="by-blue-900 ring-[0.01rem] ring-blue-900
                  mb-[5vh] lg:hidden" />
                {" "}
                <li>Campus</li>{" "}
              </Link>
              <hr className="by-blue-900 ring-[0.01rem] ring-blue-900
                  mb-[5vh] lg:hidden" />
              <Link to={"/Quick Links"}>
                {" "}
                <li>Quick Links</li>{" "}
              </Link>
              <hr className="by-blue-900 ring-[0.01rem] ring-blue-900
                  mb-[5vh] lg:hidden" />
              <Link to={"/admin"}>
                {" "}
                <li>Admin</li>{" "}
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
