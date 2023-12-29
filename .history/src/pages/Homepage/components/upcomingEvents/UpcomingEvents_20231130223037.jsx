import data from "./UpcomingEvents";
import "./UpcomingEvents.css";
import { useEffect, useState} from "react";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl.js";
import { useNavigate } from "react-router-dom";
import { FetchFromSessionStorage, SaveIntoSessionStorage } from "../../../utils/sessionStorageData.jsx";
const UpcomingEvents = () => {

  const navigate = useNavigate();

  const [eventMangementList, setEventManagementList] = useState(
    FetchFromSessionStorage("events", [])
  );
  
  useEffect(() => {
    const fetchData = async () => {
      console.log(`${eventMangementList}events`);
      console.log(`${baseUrl}/event/findAll`);
      try {
        const response = await axios.get(`${baseUrl}/event/findAll`, {
          headers: {},
        });
        const data = response.data;
        console.log(data, "response");
        SaveIntoSessionStorage("events", data);
        setEventManagementList(data);
        console.log(eventMangementList, "event");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="relative bg-white z-[800] shadow">
        <h1
          className="text-center py-2 lg:text-2xl lg:py-400 
          font-black text-xl"
        >
          UPCOMING SPECIAL PROGRAM
        </h1>
        <div
          className="grid lg:grid-cols-3 gap-2 px-2 pb-2
          md:grid-cols-2"
        >
          {[eventMangementList[0], eventMangementList[1]].map((event) => {
            console.log(eventMangementList);
            const { id, eventName, startDate, endDate, eventImageUrl, campus } = event ?? {};
            return (
              <div
                key={id}
                className="transition-all delay-150 hover:-translate-y-1 
                hover:scale-[1.04] ease-in-out duration-150 ring ring-[#F66D0A]
                rounded-b-2xl cursor-pointer mb-1"
              >
                <img src={eventImageUrl} alt="" />
                <div className="p-1">
                  <h3 className="font-black text-lg text-center pb-1">
                    {eventName}
                  </h3>
                  <p className="text-center pb-1 font-bold">
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
      </div>
    </>
  );
  
  
};

export default UpcomingEvents;
