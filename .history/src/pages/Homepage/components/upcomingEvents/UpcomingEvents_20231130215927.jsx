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
        <div
          className="grid lg:grid-cols-3 gap-[2vw] px-10 pb-10
        md:grid-cols-2
        "
        >
          {if([].)
          [eventMangementList[0], eventMangementList[1]].map((event) => {
            console.log(eventMangementList);
            const { id, eventName, startDate, endDate, eventImageUrl, campus  } = event;
            return (
              <div
                key={id}
                className="transistion-all delay-150 hover:-translate-y-1 
                hover:scale-[1.04] ease-in-out duration-150 ring ring-[#F66D0A]
                rounded-b-2xl cursor-pointer mb-10"
              >
                <img src={eventImageUrl} alt="" />
                <div className="p-5">
                  <h3 className="font-black lg:text-[1.5rem] text-center lg:py-[3vh] font-['Arial']">
                    {eventName}
                  </h3>
                  <p className="text-center pb-[3vh] lg:px-[3vw] font-bold">
                    Date:
                    {startDate === endDate
                      ? startDate
                      : { startDate } - { endDate }}
                    | Venue: {campus.name}, {campus.address.state} state
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="lg:flex gap-[2vw] lg:px-[4vw] px-[10vw]">
          <div
            className="transistion-all delay-150 hover:-translate-y-1 
          hover:scale-[1.04] ease-in-out duration-150 ring ring-[#F66D0A]
          rounded-b-2xl shadow-xl mb-[15vh] lg:mb-0 
          "
          >
            <img src={LDS} alt="" />
            <h3 className="font-black lg:text-[1.5rem] text-center lg:py-[3vh] font-['Arial']">
              Leadership Development Summit
            </h3>
            <p className="text-center pb-[3vh] lg:px-[3vw] font-bold">
              Date: 15th-17th Sept., 2023 | Kick off Time: 7:00pm on Friday |
              Venue: Tabernacle of Mercy, opposite Baale Erube compound,
              Wasinmi-Ewekoro, Ogun State.
            </p>
          </div>
          <div
            className="transistion-all delay-150 hover:-translate-y-1 
          hover:scale-[1.04] ease-in-out duration-150 ring ring-[#F66D0A]
          rounded-b-2xl"
          >
            <img src={GBSC} alt="" />
            <h3 className="font-black lg:text-[1.5rem] text-center lg:py-[3vh] font-['Arial']">
              Global Brothers/Sisters Conference
            </h3>
            <p className="text-center pb-[3vh] lg:px-[3vw] font-bold">
              Date: 17th-19th Nov., 2023 | Kick off Time: 7:00pm on Friday |
              Venue: Tabernacle of Mercy, opposite Baale Erube compound,
              Wasinmi-Ewekoro, Ogun State.
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default UpcomingEvents;
