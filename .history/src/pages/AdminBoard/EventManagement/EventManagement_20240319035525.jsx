import eventMangement from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./event.css";
import {
  faCalendarPlus,
  // faPenToSquare,
  // faTrash,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
// import {  useState } from "react";
import EmptyData from "../../utils/EmptyData.jsx";
import Upload from "../../utils/Upload";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import baseUrl from "../../utils/baseUrl.js";
import { useNavigate } from "react-router-dom";
import {
  FetchFromSessionStorage,
  SaveIntoSessionStorage,
} from "../../utils/sessionStorageData.jsx";
import DecisionButtonEvent from "../../utils/DecisionButtonEvent.jsx";
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

  console.log(window.outerHeight, "Outer width");

  useEffect(() => {
    const fetchData = async () => {
      console.log(`${eventMangementList}events`);
      console.log(`${baseUrl}/event/findAll`);
      console.log(eventMangement.length > 0);
      console.log(eventMangement.length);
      const token = JSON.parse(sessionStorage.getItem("userData")).access_token;
      try {
        const response = await axios.get(`${baseUrl}/event/findAll`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        SaveIntoSessionStorage("events", data);
        setEventManagementList(data);
        console.log(eventMangementList, "event");
      } catch (error) {
        if (error.response.status === 403) {
          navigate("/login");
        }
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleInputFocus = () => {
      document.body.style.overflow = "hidden";
    };

    const handleInputBlur = () => {
      document.body.style.overflow = "auto";
    };

    document.addEventListener("focusin", handleInputFocus);
    document.addEventListener("focusout", handleInputBlur);

    return () => {
      document.removeEventListener("focusin", handleInputFocus);
      document.removeEventListener("focusout", handleInputBlur);
    };
  }, []); // Run only once on mount

  const handleInputFocus = () => {
    // alert("Enter")
  };

  const uploadEventHandler = (value) => {
    setUpLoadEvent(value);
    setEventData({});
    setUploadOrUpdate("Submit");
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

  const deleteEvent = async (id) => {
    console.log(id);
    try {
      const token = JSON.parse(sessionStorage.getItem("userData")).access_token;
      const url = `${baseUrl}/event/deleteEventById?id=${id}`;
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response, "response");
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

  const containerRef = useRef();

  return (
    <>
      <div
        className="w-[100%]  lg:w-[80%] h-[100vh] lg:h-[90vh] relative 
       bg-[url('/src/pages/AdminBoard/Minister/Images/clmLogo.svg')] 
       bg-no-repeat bg-contain bg-center"
        ref={containerRef}
      >
        {/* <ToastContainer/> */}
        <div className=" relative z-[300]">
          <div
            className="bg-white shadow-lg lg:h-[10vh] lg:p-[.5rem]
          flex justify-around lg:block md:h-[8vh] h-[7vh]"
          >
            <h1
              className="lg:text-2xl md:text-center lg:text-left py-[2vh] md:py-[3vh] 
           md:text-[1.5rem] lg:pt-[2vh]"
            >
              Event Management
            </h1>
            <h1
              className="lg:hidden   font-black md:pt-[2vh] pl-[20vw]
            md:text-[1.8rem] text-[1.2rem] pt-[1vh]"
              onClick={() => hideSideBar(true)}
            >
              &#9776;
            </h1>
          </div>
        </div>

        <div
          className="bg-[rgba(217,217,217,0.93)] absolute w-[100%] 
         top-0 left-0 h-[100vh] md:h-[100vh] lg:h-[98vh]
         "
        ></div>
        {upLoadEvent ? (
          <Upload
            uploadEventHandler={uploadEventHandler}
            eventData={eventData}
            uploadOrupdate={uploadOrUpdate}
            eventId={eventId}
          />
        ) : null}
        <div className=" relative z-[300]">
          <div className="my-5 px-[4vh] lg:flex justify-between">
            <div className="flex">
              <input
                type="text"
                className=" bg-white w-[100%] lg:w-[26vw] md:h-[6vh] 
                  rounded-l-md outline-none pl-5 h-[5vh] box-border ring-red-500
                  ring-2
                  "
                onFocus={handleInputFocus}
              />
              <button
                className="bg-[#F66D0A] text-white md:h-[6vh] w-[40%] rounded-r-md
                hover:bg-[#f62d0a] transition-all duration-150 delay-100 h-[5vh]
                ring-red-500 ring-2
                "
              >
                search
              </button>
            </div>
            <div
              className="fontLink bg-[#F66D0A] text-white md:h-[6vh] w-[65%] md:w-[35%] lg:w-[20%]
               rounded-md hover:bg-[#f62d0a] transition-all duration-150 delay-100 my-[0.9rem] lg:my-0
               text-center pt-[0.4rem] md:pt-[1.1rem] lg:pt-[0.4rem] md:text-2xl lg:text-[1rem] h-[5vh]
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
        </div>
        {
          eventMangementList.length > 0 ?(
          <div className="h-[100vh] overflow-y-scroll pb-[15rem]">
            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 lg:py-[2rem] lg:pl-[8vw] pl-[10vw] md:pl-0
              no-scrollbar 
              "
            >
              {eventMangementList.map((data) => {
                const { id, eventName, startDate, endDate, eventImageUrl } =
                  data;
                return (
                  <>
                    <div
                      key={id}
                      className="w-[90%]  rounded-lg relative
                      shadow-lg my-[1rem] md:ml-[5.5vw] md:mt-[6vh] lg:mt-0 lg:ml-0
                    ring-red-500 ring-5 h-auto 
                      "
                    >
                      <div className="relative">
                        <img
                          src={eventImageUrl}
                          alt="Event Image"
                          className="w-full lg:h-[30vh] md:h-[25vh] h-[30vh] rounded-t-md"
                        />
                        {/* <span className="absolute top-3 right-5 text-2xl text-black bg-[#D3AE6E]"><FontAwesomeIcon icon={faEllipsisVertical} /></span> */}
                      </div>
                      <div
                        className="text-center fontLink font-black
                        py-[2vh] px-4 leading-[0.9rem]
                        "
                      >
                        <h3 className="pb-2 font-black font-[Arial]">Event: {eventName}</h3>
                        <h3 className="pb-2 font-black font-[Arial]">From: {startDate}</h3>
                        <h3 className="pb-2 font-black font-[Arial]">To: {endDate}</h3>
                      </div>
                      <DecisionButtonEvent id={id} editEvent={editEvent} deleteEvent={deleteEvent} />
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
