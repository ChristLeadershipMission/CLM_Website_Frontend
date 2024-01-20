import data from "./UpcomingEvents";
import "./UpcomingEvents.css";
import { useEffect, useState} from "react";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl.js";
import { useNavigate } from "react-router-dom";
import EmptyData from "../../../utils/EmptyData.jsx";
import { FetchFromSessionStorage, SaveIntoSessionStorage } from "../../../utils/sessionStorageData.jsx";
const UpcomingEvents = () => {

  const navigate = useNavigate();

  const [eventManagementList, setEventManagementList] = useState(
    FetchFromSessionStorage("events", [])
  );
  
  useEffect(() => {
    const fetchData = async () => {
      console.log(`${eventManagementList}events`);
      console.log(`${baseUrl}/event/findAll`);
      try {
        const response = await axios.get(`${baseUrl}/event/findAll`, {
          headers: {},
        });
        const data = response.data;
        console.log(data, "response");
        SaveIntoSessionStorage("events", data);
        setEventManagementList(data);
        console.log(eventManagementList, "event");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="relative bg-white z-[800] shadow h-auto">
        <h1
          className="text-center py-[6vh] lg:text-2xl lg:py-[8vh] 
        font-black text-xl"
        >
          UPCOMING SPECIAL PROGRAM
        </h1>
        {eventManagementList.length < 1 ? (
          <div className="mt-[13vh] lg:mt-[15vh]">
            <EmptyData message={"No Upcoming Event"} />
          </div>
        ): (
          
        <div
        className="grid lg:grid-cols-3 gap-[2vw] px-10 pb-10
      md:grid-cols-2
      "
      >
        {[eventManagementList[0], eventManagementList[1]].map((event) => {
          console.log(eventManagementList);
          const { id, eventName, startDate, endDate, eventImageUrl, campus  } = event ?? {};
          return (
            <div
              key={id}
              className="transistion-all delay-150 hover:-translate-y-1 
              hover:scale-[1.04] ease-in-out duration-150 ring ring-[#F66D0A]
              rounded-b-2xl cursor-pointer mb-10"
            >
              <img src={eventImageUrl} alt="" className="lg:w-[100%] lg:h-[55vh]" />
              <div className="p-5">
                <h3 className="font-black lg:text-[1.5rem] text-center lg:py-[3vh] font-['Arial']">
                  {eventName}
                </h3>
                <p className="text-center pb-[3vh] lg:px-[3vw] font-bold">
                  Date:
                  {startDate === endDate
                    ? startDate
                    : { startDate } - { endDate }}
                  | Venue: {campus?.name}, {campus?.address?.state} state
                </p>
              </div>
            </div>
          );
        })}
      </div>
        )        
        }
      </div>
    </>
  );
};

export default UpcomingEvents;
