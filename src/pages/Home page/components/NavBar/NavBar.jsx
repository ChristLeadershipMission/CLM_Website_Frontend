import { Link } from "react-router-dom";
import clmLogo from "../../../../../src/assets/pictures/clmLogo.svg";
import "./navbar.css";
import { useState } from "react";

const NavBar = () => {
  const [showMobileNavBar, setShowMobileNavBar] = useState();

  const toggleMobileNavBar = () => {
    setShowMobileNavBar(!showMobileNavBar);
    console.log(showMobileNavBar);
  };
  return (
    <>
      <div>
        <div
          className={`lg:hidden flex justify-between px-[4vw] py-[3vh] ${
            !showMobileNavBar ? "hidden" : "block"
          }`}
        >
          <Link to={"/"}>
            <img src={clmLogo} alt="" className="w-[5vw]" />
          </Link>
          <div onClick={toggleMobileNavBar} className=" cursor-pointer font-black">
            Icon
          </div>
        </div>
        <div
          className={`bg-white lg:flex lg:justify-between 
        lg:px-[2rem] lg:py-[2rem] h-screen lg:h-[auto]  ${
          showMobileNavBar ? "hidden" : "block"
        }`}
        >
          <div>
            <Link to={"/"}>
              <img
                src={clmLogo}
                alt=""
                className="lg:w-[3.5rem] lg:mt-[-1rem] hidden lg:block"
              />
            </Link>
          </div>
          <div>
            <span 
            className="relative left-[90vw] top-[2vw] font-black lg:hidden cursor-pointer"
            onClick={toggleMobileNavBar}
            >
              Icon
            </span>
            <ul
              className='lg:inline-flex lg:gap-[3rem] lg:text-xl 
                lg:font-semibold font-["Arial"] lg:mr-[20vw] text-center 
                text-[5vw] mt-[18vh] lg:mt-0'
            >
              <Link to={"/"}>
                {" "}
                <li>Home</li>{" "}
              </Link>
              <Link to={"/about"}>
                {" "}
                <li>About us</li>{" "}
              </Link>
              <Link to={"/giving"}>
                {" "}
                <li>Online Giving</li>{" "}
              </Link>
              <Link to={"/activities"}>
                {" "}
                <li>Activities</li>{" "}
              </Link>
              <Link to={"/Quick Links"}>
                {" "}
                <li>Quick Links</li>{" "}
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
