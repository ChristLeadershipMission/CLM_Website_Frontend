import { faDashboard, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import dashboard from "./Images/dashboard.svg";
// import event from "./Images/event.svg";
// import file from "./Images/file.svg";
// import people from "./Images/people.svg";
// import person from "./Images/person.svg";
import avatar from "./Images/avatar.png";
import PropTypes from "prop-types";

const SideBar = ({ displaySideBar }) => {
  const [closeSideBar, setcloseSideBar] = useState(false);
  const sideBarRef = useRef(null);
  const [userName, setUserName] = useState(null);

  useEffect(()=>{
    const getUserName = () =>{
      const name = JSON.parse(sessionStorage.getItem("userData")).user.bioData.firstName;
      setUserName(name);
    };
    getUserName();
  },[]);

  const sideBarHandle = () => {
    setcloseSideBar(!closeSideBar);
    setTimeout(() => {
      displaySideBar(false);
      sideBarRef.current.hidden = "true";
    }, 400);
  };
  console.log(JSON.parse(sessionStorage.getItem("userData")).user.bioData.firstName, "userData");


  return (
    <>
      <motion.div
        className="lg:w-[20%] md:w-[60%] fixed lg:relative  lg:h-[90vh] shadow-2xl overflow-auto 
       font-['Arial'] font-medium text-lg md:text-xl lg:text-lg py-10 no-scrollbar bg-[#FCFCFC]
       z-[500] h-[100vh]"
        animate={{ x: closeSideBar ? -250 : 0 }}
        ref={sideBarRef}
      >
        <div
          className="float-right mr-[6vw] mt-[-3vh] 
         text-[3.5vh] lg:hidden"
          onClick={sideBarHandle}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="px-[5vw] md:px-[4vw] lg:px-[1vw]">
          <div>
            <img
              src={avatar}
              alt=""
              className=" rounded-full w-[25%] h-[25%] ml-[30vw] md:w-[35%] md:h-[35%] md:ml-[14vw] lg:w-[40%] lg:h-[40%] lg:ml-[3vw]"
            />
            <h3 className="text-center mr-[3vw] py-[3vh]">
              Welcome {userName}
            </h3>
          </div>
          <ul className="break-all lg:text-[1rem] font-bold ">
            <li className="py-[1.2vh]">
              <Link to={"/admin"}>
                <span className="text-[#043E7D] pr-[2vw]">
                  <FontAwesomeIcon icon={faDashboard} />
                </span>
                <span className="text-center">Dashboard</span>
              </Link>
            </li>
            <li className="py-[1.2vh]">
              <Link to={"/admin/event"}>
                <span className="text-[#043E7D] pr-[2vw]">
                  <FontAwesomeIcon icon={faDashboard} />
                </span>
                Home
              </Link>
            </li>
            <li className="py-[1.2vh]">
              <Link to={"/admin/event"}>
                <span className="text-[#043E7D] pr-[2vw]">
                  <FontAwesomeIcon icon={faDashboard} />
                </span>
                Event <span className="lg:ml-[0.1rem]"> Management</span>
              </Link>
            </li>
            <li className="py-[1.2vh]" >
              <Link to={"/admin/campus"}>
                <span className="text-[#043E7D] pr-[2vw]">
                  <FontAwesomeIcon icon={faDashboard} />
                </span>
                Campus <span className="lg:pl-[0.2vw]">Management</span>
              </Link>
            </li>
            <li className="py-[1.2vh] break-all">
              <Link to={"/admin/department"}>
                <span className="text-[#043E7D] pr-[2vw]">
                  <FontAwesomeIcon icon={faDashboard} />
                </span>
                Department Management
              </Link>
            </li>
            <li className="py-[1.2vh]">
              <Link to={"/admin/minister"}>
                <span className="text-[#043E7D] pr-[2vw]">
                  <FontAwesomeIcon icon={faDashboard} />
                </span>
                Minister Management
              </Link>
            </li>
            <li className="py-[1.2vh]">
              <Link to={"/admin/profile"}>
                <span className="text-[#043E7D] pr-[2vw]">
                  <FontAwesomeIcon icon={faDashboard} />
                </span>
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

SideBar.propTypes = {
  displaySideBar: PropTypes.bool,
}

export default SideBar;
