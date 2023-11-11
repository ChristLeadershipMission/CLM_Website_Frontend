import { faDashboard, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useRef, useState } from "react";



const SideBar = ({displaySideBar}) => {
  const [closeSideBar, setcloseSideBar] = useState(false);
  const sideBarRef = useRef(null);

  const sideBarHandle = ()=>{
    setcloseSideBar(!closeSideBar);
    setTimeout(() => {
      displaySideBar(false);
      sideBarRef.current.hidden = "true";
    }, 400);
  }

  return (
    <>
      <motion.div
       className="lg:w-[20%] md:w-[60%] fixed lg:relative  h-[90vh] shadow-2xl overflow-auto 
       font-['Roboto'] font-medium text-lg md:text-xl lg:text-lg py-10 no-scrollbar bg-white
       z-[500]"
       animate={{x: closeSideBar? -250: 0}}
       ref={sideBarRef} 
       >
        <div 
         className="float-right mr-[6vw] mt-[-3vh] 
         text-[3.5vh] lg:hidden" onClick={sideBarHandle}>
          <FontAwesomeIcon icon={faXmark} />
          </div>
        <div className="px-[5vw] md:px-[4vw] lg:px-[1vw]">
          <div>
            <img
              src="src\pages\AdminBoard\Management\images\avatar.JPG"
              alt=""
              className=" rounded-full w-[25%] h-[25%] ml-[30vw] md:w-[35%] md:h-[35%] md:ml-[14vw] lg:w-[40%] lg:h-[40%] lg:ml-[3vw]"
            />
            <h3 className="text-center mr-[3vw] py-[3vh]">Welcome Olamilekan</h3>
          </div>
          <ul>
            <li className="py-[1.2vh]">
              <span className="text-[#043E7D] pr-[2vw]">
                <FontAwesomeIcon icon={faDashboard} />
              </span>
              <span className="text-center">Dashboard</span> 
            </li>
            <li className="py-[1.2vh]">
              <span className="text-[#043E7D] pr-[2vw]">
                <FontAwesomeIcon icon={faDashboard} />
              </span>
              Event <span className="lg:ml-[0.1rem]"> Management</span>
            </li>
            <li className="py-[1.2vh]">
              <span className="text-[#043E7D] pr-[2vw]">
                <FontAwesomeIcon icon={faDashboard} />
              </span>
              Campus <span className="lg:pl-[0.2vw]">Management</span>
            </li>
            <li className="py-[1.2vh]">
              <span className="text-[#043E7D] pr-[2vw]">
                <FontAwesomeIcon icon={faDashboard} />
              </span>
              Department Management
            </li>
            <li className="py-[1.2vh]">
              <span className="text-[#043E7D] pr-[2vw]">
                <FontAwesomeIcon icon={faDashboard} />
              </span>
              Minister Management
            </li>
            <li className="py-[1.2vh]">
              <span className="text-[#043E7D] pr-[2vw]">
                <FontAwesomeIcon icon={faDashboard} />
              </span>
              Profile
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
