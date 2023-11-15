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

const MinisterComponent = ({ hideSideBar }) => {
  const [upLoadMinister, setUpLoadMinister] = useState(false);
  const [ministerData, setMinisterData] = useState(null);
  const [uploadOrUpdate, setUploadOrUpdate] = useState();
  const [ministerId, setMinisterId] = useState(null);

  const [ministers, setMinisters] = useState([]);
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
        setMinisters(data);
        console.log(data);
        console.log(ministers, "ministers");
      } catch (error) {
        console.log(error);
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
    setUploadOrUpdate("Upload");
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
      <div className="lg:h-[90vh] overflow-y-auto">
        <div
          className="bg-white shadow-lg lg:h-[10vh] lg:p-[.5rem]
          flex justify-around lg:block lg:w-[78.8vw] overflow-hidden
          w-[100vw] 
          "
        >
          <h1
            className="lg:text-2xl md:text-center lg:text-left py-[3vh] md:py-[3vh] 
           md:text-[1.5rem] lg:pt-[2vh] md:w-[100vw]"
          >
            Minister Management
          </h1>
          <h1
            className="lg:hidden text-[2rem] font-black pt-[2vh] pl-[20vw]"
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
        <div className="my-5 px-[4vh] lg:flex justify-between">
          <div className="flex">
            <input
              type="text"
              className=" bg-gray-300 w-[100%] lg:w-[26vw] h-[6vh] rounded-l-md outline-none pl-5"
            />
            <button
              className="bg-[#F66D0A] text-white h-[6vh] w-[40%] rounded-r-md
              hover:bg-[#f62d0a] transition-all duration-150 delay-100 "
            >
              search
            </button>
          </div>
          <div
            className="fontLink bg-[#F66D0A] text-white h-[6vh] w-[50%] md:w-[35%] lg:w-[20%]
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
                ring-1 rounded-md lg:h-[60vh] md:h-[32vh] md:my-3 lg:my-0 
                h-[53vh] my-3 shadow-lg bg-[#0A063E] text-white shadow-orange-600"
              >
                {/* ring-[#F76D0A] */}
                <div className="flex justify-center">
                  <img
                    src={profilePicture ? profilePicture : avatar}
                    alt="avatar"
                    className=" rounded-full lg:w-[70%] lg:h-[25vh]"
                  />
                </div>
                <h1 className="text-center py-5 font-bold">{Name}</h1>
                <p className="text-center font-semibold lg:px-5 py-3">
                  {portfolio}
                </p>
                <p className="text-center">{emailAddress}</p>
                <div
                  className="flex justify-center items-center gap-5
                 pb-5 pl-5 absolute bottom-[-2vh] lg:pl-[4vw]"
                >
                  <p
                    className=" text-[#e6e3e3] font-bold cursor-pointer 
                          hover:scale-[1.05] transition-all duration-150 delay-75 
                          ease-in-out"
                    id={id}
                    onClick={() => editMinister(id)}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faPenToSquare} /> Edit
                  </p>
                  <p
                    className=" text-[#e6e3e3] font-bold cursor-pointer hover:scale-[1.05]
                           transition-all duration-150 delay-75 ease-in-out"
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
      </div>
    </>
  );
};

MinisterComponent.propTypes = {
  hideSideBar: PropTypes.bool,
};

export default MinisterComponent;
