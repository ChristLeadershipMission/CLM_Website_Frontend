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
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import UploadMinister from "../../utils/UploadMinister";
import {FetchFromSessionStorage, SaveIntoSessionStorage} from "../../utils/sessionStorageData.jsx";
import EmptyData from "../../utils/EmptyData";
import { useNavigate } from "react-router-dom";

const MinisterComponent = ({ hideSideBar }) => {
  const [upLoadMinister, setUpLoadMinister] = useState(false);
  const [ministerData, setMinisterData] = useState(null);
  const [uploadOrUpdate, setUploadOrUpdate] = useState();
  const [ministerId, setMinisterId] = useState(null);
  const navigate = useNavigate();

  const [ministers, setMinisters] = useState(
    FetchFromSessionStorage("ministerData", [])
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

  return (
    <>
      <div className="lg:h-[90vh] overflow-y-auto bg-cover bg-opacity-80
      bg-[url('/src/pages/AdminBoard/Minister/Images/clmLogo.svg')] relative">
        <div
          className="bg-white shadow-lg lg:h-[10vh] lg:p-[.5rem]
          flex justify-around lg:block lg:w-[78.8vw] overflow-hidden
          w-[100vw] 
          "
        >
          <h1
            className="lg:text-2xl md:text-center lg:text-left py-[3vh] md:py-[3vh] 
           md:text-[1.5rem] lg:pt-[2vh] md:w-[100vw] md:pr-[30vw] lg:pr-0"
          >
            Minister Management
          </h1>
          <h1
            className="lg:hidden text-[2rem] font-black pt-[2vh] pl-[20vw]
            md:pr-[3vw] lg:pr-0"
            onClick={() => hideSideBar(true)}
          >
            &#9776;
          </h1>
        </div>
        {upLoadMinister ? (
          <UploadMinister
            uploadMinisterHandler={uploadMinisterHandler}
            ministerData={ministerData}
            uploadOrupdate={uploadOrUpdate}
            ministerId={ministerId}
          />
        ) : null}
        <div className="relative">

        <div 
         className="bg-[rgba(255,255,255,0.8)] absolute w-[100%] h-[100%] top-0 left-0
         "></div>
         <div className="relative">
        <div className="my-5 px-[4vh] lg:flex justify-between">
          <div className="flex">
            <input
              type="text"
              className=" bg-gray-300 w-[100%] lg:w-[26vw] h-[6vh] rounded-l-md outline-none pl-5"
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
            <button className="" onClick={() => uploadMinisterHandler(true)}>
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
                  className="lg:w-[100%] md:w-[90%] w-[85vw] relative py-5 md:py-5 lg:py-5
                ring-1 rounded-md lg:h-[60vh] md:h-[41vh] md:my-3 lg:my-0 shadow-black
                h-[65vh] my-3 shadow-md ring-[#F76D0A] text-black overflow-hidden"
                >
                  {/* ring-[#F76D0A] bg-[#0A063E] shadow-orange-600*/}
                  <div className="flex justify-center">
                    <img
                      src={profilePicture ? profilePicture : avatar}
                      alt="avatar"
                      className=" rounded-full w-[70%] md:h-[20vh] lg:w-[70%] lg:h-[25vh]
                    h-[35vh]"
                    />
                  </div>
                  <h1 className="text-center py-5 font-bold md:text-[1.3rem] lg:text-[1rem]">
                    {Name}
                  </h1>
                  <p className="text-center font-semibold lg:px-5 py-1 md:text-[1.1rem] lg:text-[1rem]">
                    {portfolio}
                  </p>
                  <p className="text-center md:text-[1.1rem] lg:text-[1rem]">
                    {emailAddress}
                  </p>
                  <div
                    className="flex justify-center items-center gap-5
                    pb-5 absolute lg:bottom-[-2vh] lg:pl-[2vw] md:text-[1.3rem] 
                    lg:text-[1rem] md:pl-[10vw] pl-[25vw] md:bottom-[0.5vh]
                    bottom-[-1.5vh] lg:w-[100%] bg-white py-2"
                  >
                    {/* bg-[#F66D0A]  */}
                    <p
                      className="font-bold cursor-pointer py-1 rounded-md
                    hover:scale-[1.05] transition-all duration-150 delay-75 
                    ease-in-out bg-[#F66D0A] px-3 lg:w-[60%] text-black"
                      id={id}
                      onClick={() => editMinister(id)}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faPenToSquare} /> Edit
                    </p>
                    <p
                      className="font-bold cursor-pointer hover:scale-[1.05] mr-5
                      transition-all duration-150 delay-75 ease-in-out bg-[#F66D0A] px-3 lg:w-[70%]
                      py-1 text-black rounded-md"
                      onClick={() => deleteMinister(id)}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </p>
                  </div>
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
