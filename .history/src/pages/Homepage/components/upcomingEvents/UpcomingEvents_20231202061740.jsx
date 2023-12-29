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
          className="text-center py-[6vh] lg:text-2xl lg:py-[8vh] 
        font-black text-xl"
        >
          UPCOMING SPECIAL PROGRAM
        </h1>
        {eventMangementList.length < 1 ? (
          <div className="mt-[13vh] lg:mt-[15vh]">
            <EmptyData message={"No Event found"} />
          </div>
        ): (
          <div></div>
        )        
        }
    </>
  );
};

export default UpcomingEvents;
