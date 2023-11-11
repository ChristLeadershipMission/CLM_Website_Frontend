import { useEffect, useState } from "react";
import SideBar from "../NavBar/SideBar";
import TopNavBar from "../NavBar/TopNavBar";
import EventManagementBoard from "./EventManagement";
// import axios from "axios";

const EventManagement = () => {
  // const [imageUrl, setImageUrl] = useState("");
  const width = useState(window.outerWidth);

  const [displaySideBarforSmallScreen, setDisplaySideBarforSmallScreen] =
    useState(false);

  useEffect(() => {
    console.log(width[0]);
    if (width[0] > 884) {
      setDisplaySideBarforSmallScreen(true);
    }
  }, [displaySideBarforSmallScreen, width]);

  const displaySideBarHandle = (value) => {
    setDisplaySideBarforSmallScreen(value);
  };

  return (
    <>
      <div className=" overflow-hidden">
        <TopNavBar />
        <div className="flex">
          {displaySideBarforSmallScreen && (
              <SideBar displaySideBar={displaySideBarHandle} Bg="event" />
            // <div className="z-[400] bg-black">
            // </div>
          )}
          <EventManagementBoard hideSideBar={displaySideBarHandle} />
        </div>
        {/* <input type="file" onChange={(e)=>setImageUrl(e.target.files[0])} />
        <h1 onClick={uploadImage}>upload</h1> */}
      </div>
    </>
  );
};

export default EventManagement;
