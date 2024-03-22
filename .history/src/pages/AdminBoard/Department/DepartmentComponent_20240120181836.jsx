import shape from "./Images/shape.svg";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import data from "./dapartment";
// import { useState } from "react";
const DepartmentComponent = ({ hideSideBar }) => {

  // const [uploadDepartment, setUpLoadDepartment] = useState();
  // const [departmentData, setDepartmentData] = useState();
  // const [uploadOrUpdate, setUploadOrUpdate] = useState();

  // const uploadDepartmentHandler = (value) => {
  //   setUpLoadDepartment(value);
  //   setDepartmentData({
  //     firstName: "",
  //     lastName: "",
  //     phoneNumber: "",
  //     emailAddress: "",
  //     profilePicture: null,
  //     createdAt: null,
  //     portfolio: "",
  //   });
  //   setUploadOrUpdate("Submit");
  // };

  return (
    <>
      <div className="lg:h-[90vh] overflow-y-auto">
        <div className=" relative z-[300] bg-black">
          <div
            className="bg-white shadow-lg lg:h-[10vh] lg:p-[.5rem]
          flex justify-around lg:block lg:w-[78.8vw] overflow-hidden
          w-[100vw]
          "
          >
            <h1
              className="lg:text-2xl md:text-center lg:text-left py-[2vh] md:py-[3vh] 
              md:text-[1.5rem] lg:pt-[2vh]"
            >
              Department Management
            </h1>
            <h1
              className="lg:hidden lg:text-[2rem] font-black pt-[2vh] pl-[20vw]
            md:pr-[3vw] lg:pr-0 md:text-[1.8rem] text-[1.2rem]"
              onClick={() => hideSideBar(true)}
            >
              &#9776;
            </h1>
          </div>
        </div>
        <div className="relative z-[300]">
          <div className="my-5 px-[4vh] lg:flex justify-between">
            <div className="flex rounded-r-md">
              <input
                type="text"
                className=" bg-gray-300 w-[100%] lg:w-[26vw] h-[6vh] 
                rounded-l-md outline-none pl-5"
              />
              <button
                className="bg-[#F66D0A] text-white h-[6vh] w-[40%] rounded-r-md
              hover:bg-[#f62d0a] transition-all duration-150 delay-100 text-[1.2rem]
              md:text-[1.7rem] lg:text-[1.2rem]"
              >
                search
              </button>
            </div>
            <div
              className="fontLink bg-[#F66D0A] text-white h-[6vh] w-[55%] md:w-[40%] lg:w-[20%]
               rounded-md hover:bg-[#f62d0a] transition-all duration-150 delay-100 my-[0.9rem] lg:my-0
               text-center pt-[0.7rem] md:pt-[1.1rem] lg:pt-[0.4rem] md:text-2xl lg:text-[1rem] 
              "
            >
              <button
                className=""
                // onClick={() => uploadDepartmentHandler(true)}
              >
                <span>
                  <FontAwesomeIcon icon={faCalendarPlus} />
                </span>{" "}
                &nbsp; Add new Minster
              </button>
            </div>
          </div>
        </div>
        <div
          className="bg-[url('/src/pages/AdminBoard/Department/Images/clmLogo.svg')] bg-center
         grid lg:grid-cols-4 lg:py-10 lg:w-[78.8vw] md:pl-[2vw] lg:px-5 lg:gap-5 justify-center
         items-center md:grid-cols-2 md:h-[80.5vh] h-[80vh]  overflow-y-auto no-scrollbar relative
         lg:h-[67vh] bg-no-repeat bg-contain"
        >
          <div className="bg-[rgba(255,255,255,0.9)] fixed w-[99vw] h-[10000vh] top-0 left-0"></div>
          {data.map((data) => {
            const { id, department, image } = data;
            return (
              <div key={id} className="w-[100%] relative py-5 md:py-5 lg:py-5">
                <div
                  className="bg-[#0A063E] lg:px-5 w-[80vw] relative
                  lg:h-[20vh] md:h-[20vh] overflow-hidden md:mx-[1.5vw]
                  md:w-[90%] lg:w-[100%] lg:mx-0 h-[20vh] 
                  "
                  // style={{
                  //   backgroundImage: `url(${image})`,
                  //   height: "auto",
                  //   backgroundSize: "contain",
                  //   backgroundRepeat: "no-repeat",
                  //   color: "white",
                  // }}
                >
                  <img
                    src={image}
                    alt=""
                    className="lg:w-[100%] lg:h-[100%]
                    lg:mt-2 absolute top-[-1vh] left-0"
                  />
                  <div className="lg:pt-5 mt-10 md:pt-10 relative">
                    <h1 className="text-[#F76D0A] lg:text-[2.5rem] text-[2rem] md:text-[3rem] text-center font-bold">
                      {department}
                    </h1>
                  </div>
                  <h3 className="text-white text-center lg:py-3 font-semibold">
                    DEPARTMENT
                  </h3>
                </div>
                <div
                  className="bg-white shadow-md flex justify-center lg:gap-5
                  lg:py-3 md:w-[90%] lg:w-[100%] md:mx-[1.5vw] lg:mx-0 md:py-3
                  md:gap-3 w-[80vw] py-3 gap-3"
                >
                  <span className="font-bold cursor-pointer">More info</span>
                  <img src={shape} alt="shape" className="cursor-pointer" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

DepartmentComponent.propTypes = {
  hideSideBar: PropTypes.bool,
};

export default DepartmentComponent;
