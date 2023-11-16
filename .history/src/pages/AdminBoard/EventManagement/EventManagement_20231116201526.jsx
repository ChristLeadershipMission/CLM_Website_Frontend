import eventMangement from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./event.css";
import {
  faCalendarPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
// import {  useState } from "react";
import EmptyData from "../../utils/EmptyData.jsx";
import Upload from "../../utils/Upload";
import { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../../utils/baseUrl.js";
import { useNavigate } from "react-router-dom";
import {FetchFromSessionStorage, SaveIntoSessionStorage} from "../../utils/sessionStorageData.jsx";
// import { ToastContainer, toast } from "react-toastify";

const EventManagementBoard = ({ hideSideBar }) => {
  // const [eventMangementList, setEventManagementList] = useState(["ola"]);
  const [upLoadEvent, setUpLoadEvent] = useState(false);
  const [eventData, setEventData] = useState(null);
  const [uploadOrUpdate, setUploadOrUpdate] = useState();
  const [eventId, setEventId] = useState();
  const [eventMangementList, setEventManagementList] = useState(
    FetchFromSessionStorage("events", [])
  );
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      console.log(`${eventMangementList}events`);
      console.log(`${baseUrl}/event/findAll`);
      console.log(eventMangement.length > 0);
      console.log(eventMangement.length);
      const token = JSON.parse(sessionStorage.getItem("userData")).access_token;
      try {
        const response = await axios.get(
          `${baseUrl}/event/findAll`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data;
        console.log(data, "data");
        SaveIntoSessionStorage("events", String.data)
        setEventManagementList(data);
        console.log(eventMangementList, "event");
      } catch (error) {
        if (error.response.status === 403) {
             navigate("/login");
        }
        console.log(error );
      }
    };
    fetchData();
  }, []);

  const uploadEventHandler = (value) => {
    setUpLoadEvent(value);
    setEventData({});
    setUploadOrUpdate("Upload");
  };

  // login

  

  const editEvent = (id) => {
    const newData = eventMangementList.filter((event) => event.id === id);
    // updateEvent(newData);
    // console.log(newData);
    setEventData(newData[0]);
    setUpLoadEvent(true);
    setUploadOrUpdate("Update");
    setEventId(id);
    // console.log(eventData , "Na legit");
    // console.log("click on edit event");
  };

  const deleteEvent = async(id)=>{
    try {
      const token = JSON.parse(
        sessionStorage.getItem("userData")
      ).access_token;
      const url = `${baseUrl}/event/deleteEventById/?id=${id}`;
      const response = await axios.delete(url,
      {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      }
      );
      if (response.status === 200) {
        location.reload();
      }
      console.log(response)
    //  toast("Event has been deleted successfully. Please refresh to see changes");
    } catch (error) {
      console.log(error);
      // toast("An error occurred while deleting, please try again");
    }
  };
  
  return (
    <>
      <div className="w-[100%]  lg:w-[82%] h-[90vh] relative">
        {/* <ToastContainer/> */}
        <div
          className="bg-white shadow-lg lg:h-[10vh] lg:p-[.5rem]
          flex justify-around lg:block"
        >
          <h1
            className="lg:text-2xl md:text-center lg:text-left py-[3vh] md:py-[3vh] 
           md:text-[1.5rem] lg:pt-[2vh]"
          >
            Event Management
          </h1>
          <h1
            className="lg:hidden text-[2rem] font-black pt-[2vh] pl-[20vw]"
            onClick={() => hideSideBar(true)}
          >
            &#9776;
          </h1>
        </div>
        {upLoadEvent ? (
          <Upload
            uploadEventHandler={uploadEventHandler}
            eventData={eventData}
            uploadOrupdate={uploadOrUpdate}
            eventId={eventId}
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
                <button className="" onClick={() => uploadEventHandler(true)}>
                  <span>
                    <FontAwesomeIcon icon={faCalendarPlus} />
                  </span>{" "}
                  &nbsp; Add new event
                </button>
              </div>
            </div>
        {eventMangementList.length > 0 ? (
          <div>
            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 lg:py-[2rem] lg:pl-[8vw] pl-[15vw] md:pl-0
         overflow-y-scroll no-scrollbar h-[57vh] md:h-[63vh] lg:h-[68vh] 
        "
            >
              {eventMangementList.map((data) => {
                const { id, eventName, startDate, endDate, eventImageUrl } =
                  data;
                return (
                  <>
                    <div
                      key={id}
                      className="w-[80%]  rounded-lg relative
                    shadow-lg my-[1rem] md:ml-[5.5vw] md:mt-[6vh] lg:mt-0 lg:ml-0
                    "
                    >
                      <div className="relative">
                        <img
                          src={eventImageUrl}
                          alt="Event Image"
                          className="w-full lg:h-[30vh]  rounded-t-md"
                        />
                        {/* <span className="absolute top-3 right-5 text-2xl text-black bg-[#D3AE6E]"><FontAwesomeIcon icon={faEllipsisVertical} /></span> */}
                      </div>
                      <div
                        className="text-center fontLink font-bold
                    py-[2vh] px-4 mb-7
                "
                      >
                        <h3>Event: {eventName}</h3>
                        <h3>Time: {endDate}</h3>
                        <h3 className="pb-5">Date: {startDate}</h3>
                      </div>
                      <div className="flex gap-5 pb-5 pl-5 relative bottom-0">
                        <p
                          className=" text-[#90150D] font-bold cursor-pointer 
                          hover:scale-[1.05] transition-all duration-150 delay-75 
                          ease-in-out"
                          id={id}
                          onClick={() => editEvent(id)}
                        >
                          {" "}
                          <FontAwesomeIcon icon={faPenToSquare} /> Edit
                        </p>
                        <p
                          className=" text-[rgb(0,0,128)] font-bold cursor-pointer hover:scale-[1.05]
                           transition-all duration-150 delay-75 ease-in-out"
                           onClick={()=>deleteEvent(id)}
                        >
                          {" "}
                          <FontAwesomeIcon icon={faTrash} /> Delete
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="mt-[13vh] lg:mt-[15vh]">
            <EmptyData message={"No Event found"} />
          </div>
        )}
      </div>
    </>
  );
};

EventManagementBoard.propTypes = {
  hideSideBar: PropTypes.func.isRequired,
};

export default EventManagementBoard;
