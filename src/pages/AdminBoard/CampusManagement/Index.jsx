import { useEffect, useState } from "react";
import TopNavBar from "../NavBar/TopNavBar";
import SideBar from "../NavBar/SideBar";
import CampusManagementComponent from "./CampusManagementComponent";

const CampusManagement = () => {
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
      <div className="">
        <div className=" relative z-[300]">
          <TopNavBar />
        </div>
        <div className="flex">
          {displaySideBarforSmallScreen && (
            <SideBar displaySideBar={displaySideBarHandle} Bg="event" />
          )}
          <CampusManagementComponent hideSideBar={displaySideBarHandle} />
        </div>
        {/* <input type="file" onChange={(e)=>setImageUrl(e.target.files[0])} />
        <h1 onClick={uploadImage}>upload</h1> */}
      </div>
    </>
  );
};

export default CampusManagement;
