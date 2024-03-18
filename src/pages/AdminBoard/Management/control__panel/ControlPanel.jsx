import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import churchActivities from "./data";
import PropTypes from "prop-types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  SaveIntoSessionStorage,
  FetchFromSessionStorage,
} from "../../../utils/sessionStorageData";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const ControlPanel = ({ hideSideBar }) => {
  const [dashboardStatistics, setDashboardStatistics] = useState(
    FetchFromSessionStorage("dashboardStatistics", {})
  );

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const token = JSON.parse(sessionStorage.getItem("userData")).access_token;
      try {
        const response = await axios.get(
          `${baseUrl}/dashboard/getAdminDashboardStatistics`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data;
        SaveIntoSessionStorage("dashboardStatistics", data);
        setDashboardStatistics(data);
        console.log(dashboardStatistics, "dashboardStatistics");
      } catch (error) {
        if (error.response.status === 403) {
          navigate("/login");
        }
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="md:w-[100%] lg:w-[82%] h-[90vh]">
        <div className="bg-white shadow-lg lg:h-[10vh] lg:p-[.5rem] flex justify-around lg:block">
          <h1 className="lg:text-2xl md:text-center lg:text-left py-[3vh] md:py-[3vh] md:text-[1.5rem] lg:pt-[2vh]">
            Welcome to CLM Dashboard
          </h1>
          <h1
            className="lg:hidden text-[2rem] font-black pt-[2vh] pl-[20vw]"
            onClick={() => hideSideBar(true)}
          >
            &#9776;
          </h1>
        </div>
        <div 
         className="grid sm:w-[100%] grid-cols-2 lg:py-[2rem] lg:pl-[8rem] ml-[10vw] 
         md:ml-0 mt-5 md:mt-0
        ">
          {churchActivities.map((data) => {
            const { id, description, viewMore, image } = data;
            return (
              <div
                key={id}
                className="w-[95%] md:h-[25vh] lg:h-[30vh] rounded-lg 
                  shadow-lg my-[1rem] md:ml-[5.5vw] md:mt-[6vh] lg:mt-0 
                  lg:ml-0 bg-[#F66D0A] md:w-[80%] ml-[-10%] gap-5
                  relative 
                  "
              >
                <div
                  className="text-center lg:pl-[2vw] h-[27vh] top-[-5vh]
                  bg-[#0A063E] md:h-[22vh] lg:h-[25vh] rounded-t-lg relative"
                >
                  <div 
                   className="text-2xl lg:w-['auto'] mt-[3vh] md:ml-[1.5rem] lg:ml-0 text-white 
                   flex gap-4 pt-5">
                    <div 
                     className="text-4xl font-bold relative lg:top-[3vh] lg:left-[1vw]
                     md:top-[4vh] md:left-[2vw] top-[2vh] left-[3vw]
                     ">
                      {id == 1
                        ? dashboardStatistics.numberOfUpcomingEvents
                        : id == 2
                        ? dashboardStatistics.numberOfMinisters
                        : id == 3
                        ? dashboardStatistics.numberOfCampuses
                        : id == 4
                        ? dashboardStatistics.numberOfDepartments
                        : 0}
                    </div>
                    <div className="flex justify-center"> 
                    <img
                      src={image}
                      alt=""
                      className="w-[50%] md:w-[50%] md:h-[50%] md:mt-[4vh] mt-[3vh] ml-[-5vw] md:ml-0"
                    />
                  </div>
                  </div>
                    <br></br>
                    <h3 
                     className="text-white absolute bottom-[1rem] md:text-[1.5rem]
                     lg:text-[1rem] left-[0%] w-[100%]
                    ">{description}</h3>
                </div>

                <div
                 className="text-center md:text-xl font-bold pt-[1vh] pl-[1vw] md:pb-0
                 absolute lg:bottom-[1.5vh] left-[0%] w-[100%] h-[100%] flex justify-center 
                 items-end md:bottom-[1.5vh] bottom-[1vh]
                ">
                  {viewMore}{" "}
                  <span className="pl-[2vw]">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

ControlPanel.propTypes = {
  hideSideBar: PropTypes.bool,
};

export default ControlPanel;
