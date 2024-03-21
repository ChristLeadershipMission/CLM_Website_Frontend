import { useEffect, useState } from "react";
// import data from "./data";
import avatar from "./Images/avatar.png";
// import shape from "./Images/shape.svg";
import PropTypes from "prop-types";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import UploadMinister from "../../utils/UploadMinister";
import {
  FetchFromSessionStorage,
  SaveIntoSessionStorage,
} from "../../utils/sessionStorageData.jsx";
import EmptyData from "../../utils/EmptyData";
import { useNavigate } from "react-router-dom";
import DecisionButtonMinister from "../../utils/DecisionButtonMinister.jsx";

const MinisterComponent = ({ hideSideBar }) => {
  const [upLoadMinister, setUpLoadMinister] = useState(false);
  const [ministerData, setMinisterData] = useState(null);
  const [uploadOrUpdate, setUploadOrUpdate] = useState();
  const [ministerId, setMinisterId] = useState(null);
  const navigate = useNavigate();

  const [ministers, setMinisters] = useState(
    FetchFromSessionStorage("ministers", [])
  );
  useEffect(() => {
    const fetchMinisters = async () => {
      try {
        const url = `${baseUrl}/minister/findAll`;
        const token = JSON.parse(
          sessionStorage.getItem("userData")
        ).access_token;
        const response = await axios(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        SaveIntoSessionStorage("ministers", data);
        setMinisters(data);
        console.log(data);
        console.log(ministers, "ministers");
      } catch (error) {
        console.log(error);
        if (error.response.status === 403) {
          navigate("/login");
        }
      }
    };
    fetchMinisters();
  }, []);

  const uploadMinisterHandler = (value) => {
    setUpLoadMinister(value);
    setMinisterData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
      profilePicture: null,
      createdAt: null,
      portfolio: "",
    });
    setUploadOrUpdate("Submit");
  };

  const editMinister = (id) => {
    const newData = ministers.filter((event) => event.id === id);
    // updateEvent(newData);
    // console.log(newData);
    setMinisterData(newData[0]);
    setUpLoadMinister(true);
    setUploadOrUpdate("Update");
    setMinisterId(id);
    // console.log(eventData , "Na legit");
    // console.log("click on edit event");
  };

  const deleteMinister = async (id) => {
    try {
      const token = JSON.parse(sessionStorage.getItem("userData")).access_token;
      const url = `${baseUrl}/minister/deleteById/${id}`;
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        location.reload();
      }
      console.log(response);
      //  toast("Event has been deleted successfully. Please refresh to see changes");
    } catch (error) {
      console.log(error);
      // toast("An error occurred while deleting, please try again");
    }
  };

  const height = window.outerHeight;
  console.log(height);
  return (
    <>
      <div
        className="lg:h-[90vh] overflow-y-auto bg-center bg-opacity-80
      bg-[url('/src/pages/AdminBoard/Minister/Images/clmLogo.svg')] relative
      bg-no-repeat bg-contain
      "
      >
        <div className="relative z-[300]">
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
              Minister Management
            </h1>
            <h1
              className="lg:hidden font-black lg:pt-[2vh] pl-[20vw]
            md:pr-[3vw] lg:pr-0 md:text-[1.8rem] text-[1.2rem] pt-[2vh]"
              onClick={() => hideSideBar(true)}
            >
              &#9776;
            </h1>
          </div>
        </div>
        <div
          className="bg-[rgba(217,217,217,0.93)] absolute w-[100%] 
         h-[100%] top-0 left-0
         "
        ></div>
        {upLoadMinister ? (
          <UploadMinister
            uploadMinisterHandler={uploadMinisterHandler}
            ministerData={ministerData}
            uploadOrupdate={uploadOrUpdate}
            ministerId={ministerId}
          />
        ) : null}
        <div className="relative">
          {/* <div 
         className="bg-[rgba(255,255,255,0.96)] absolute w-[100%] 
         h-[100%] top-0 left-0
         "></div> */}
          <div className="relative">
            <div className="my-5 px-[4vh] lg:flex justify-between">
              <div className="flex">
                <input
                  type="text"
                  className=" bg-white w-[100%] lg:w-[26vw] h-[6vh] rounded-l-md outline-none pl-5
                  ring-red-500 ring-2
                  "
                />
                <button
                  className="bg-[#F66D0A] text-white h-[6vh] w-[40%] rounded-r-md
                hover:bg-[#f62d0a] transition-all duration-150 delay-100 text-[1.2rem]
                md:text-[1.7rem] lg:text-[1.2rem] ring-red-500 ring-2"
                >
                  search
                </button>
              </div>
              <div
                className="fontLink bg-[#F66D0A] text-white h-[6vh] w-[65%] md:w-[40%] lg:w-[20%]
               rounded-md hover:bg-[#f62d0a] transition-all duration-150 delay-100 my-[0.9rem] lg:my-0
               text-center pt-[0.7rem] md:pt-[1.1rem] lg:pt-[0.4rem] md:text-2xl lg:text-[1rem] 
              "
              >
                <button
                  className=""
                  onClick={() => uploadMinisterHandler(true)}
                >
                  <span>
                    <FontAwesomeIcon icon={faCalendarPlus} />
                  </span>{" "}
                  &nbsp; Add new Minster
                </button>
              </div>
            </div>
          </div>
          {ministers.length > 0 ? (
            <div
              className="bg-[url('src\pages\AdminBoard\CampusManagement\Images\CLMLOGO.png')]
          grid lg:grid-cols-4 lg:py-10 lg:w-[78.8vw] md:pl-[5vw] lg:px-5 lg:gap-5 justify-center
          items-center md:grid-cols-2 md:h-[80.5vh] h-[80vh]  overflow-y-auto no-scrollbar
          md:gap-0 lg:h-[67.5vh]"
            >
              {ministers.map((data) => {
                const {
                  id,
                  firstName,
                  lastName,
                  portfolio,
                  profilePicture,
                  emailAddress,
                } = data;
                const Name = `${firstName} ${lastName}`;
                return (
                  <div
                    key={id}
                    className={`lg:w-[100%] md:w-[90%] w-[85vw] relative py-5 md:py-5 lg:py-5
                    ring-1 rounded-md lg:h-[60vh] md:h-[41vh] md:my-3 lg:my-0 shadow-black
                    ${ height >= 880 && height <= 952 ? "h-[55vh]" : "h-[65vh]" }
                    my-3 shadow-md ring-[#F76D0A] text-black overflow-hidden`}
                  >
                    {/* ring-[#F76D0A] bg-[#0A063E] shadow-orange-600*/}
                    <div className="flex justify-center">
                      <img
                        src={profilePicture ? profilePicture : avatar}
                        alt="avatar"
                        className=" rounded-full w-[70%] md:h-[20vh] lg:w-[70%] lg:h-[25vh]
                        h-[35%]"
                      />
                    </div>
                    <h1 
                      className="text-center pt-5 font-bold md:text-[1.5rem] 
                      lg:text-[1.5rem] font-['Arial'] text-[1.7rem]">
                      {Name}
                    </h1>
                    <p 
                     className="text-center font-normal lg:px-5 py-1 md:text-[1.3rem] 
                     lg:text-[1rem] font-['Arial']">
                      {portfolio}
                    </p>
                    <p className="text-center md:text-[1.3rem] lg:text-[1rem]">
                      {emailAddress}
                    </p>
                    <DecisionButtonMinister id={id} editMinister={editMinister} deleteMinister={deleteMinister} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-[13vh] lg:mt-[15vh] relative">
              <EmptyData message={"No Minister found"} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

MinisterComponent.propTypes = {
  hideSideBar: PropTypes.bool,
};

export default MinisterComponent;
