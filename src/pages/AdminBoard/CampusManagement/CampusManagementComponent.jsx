// import shape from "./Images/shape.svg";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarPlus,
  // faPenToSquare,
  // faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import UploadEvent from "../../utils/UploadCampus";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import ShowMoreCampusInfo from "../../utils/showMoreCampusInfo";
// import ShowMoreCampusInfo from "../../../pages/utils/ShowMoreCampusInfo";
import { useNavigate } from "react-router-dom";
import EmptyData from "../../utils/EmptyData";
import {
  FetchFromSessionStorage,
  SaveIntoSessionStorage,
} from "../../utils/sessionStorageData.jsx";
import DecisionButtonCampus from "../../utils/DecisionButtonCampus.jsx";

const CampusManagementComponent = ({ hideSideBar }) => {
  const [upLoadCampusBool, setUpLoadCampusBool] = useState(false);
  const [campusData, setCampusData] = useState(
    FetchFromSessionStorage("campusData", [])
  );
  const [uploadOrUpdate, setUploadOrUpdate] = useState();
  const [campusId, setCampusId] = useState();
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showMoreInfoData, setShowMoreInfoData] = useState([]);
  const [campusDataList, setCampusDataList] = useState([]);
  const navigate = useNavigate();

  const MoreInfo = (id) => {
    const moreInfoData = campusData.filter((campus) => campus.id === id);
    setShowMoreInfoData(moreInfoData);
    setShowMoreInfo(true);
  };

  const uploadCampusHandler = (value) => {
    setUpLoadCampusBool(value);
    setCampusDataList([
      {
        id: "",
        name: "",
        email: "",
        ministerInCharge: {
          id: "",
          firstName: "",
          lastName: "",
          phoneNumber: "12d34544f3d42",
          emailAddress: "midkfe@gmaeil.com",
          password: null,
          profilePicture: null,
          createdAt: null,
          portfolio: "",
        },
        address: {
          id: 3,
          streetNumber: "123",
          streetName: "Main Street",
          city: "Cityville",
          state: "",
          postalCode: "12345",
          country: "",
        },
        logo: "",
      },
    ]);
    console.log(campusDataList[0]);
    setUploadOrUpdate("Submit");
  };

  useEffect(() => {
    const fetchCampus = async () => {
      try {
        const url = `${baseUrl}/campus/findAllCampuses`;
        const token = JSON.parse(
          sessionStorage.getItem("userData")
        ).access_token;
        const response = await axios(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        console.log(("campusData", data));
        SaveIntoSessionStorage("campusData", data);
        setCampusData(data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 403) {
          navigate("/login");
        }
      }
    };
    fetchCampus();
  }, []);

  const editCampus = (id) => {
    const newData = campusData.filter((campus) => campus.id === id);
    // updateEvent(newData);
    console.log(newData[0]);
    setCampusDataList(newData);
    setUpLoadCampusBool(true);
    setUploadOrUpdate("Update");
    setCampusId(id);
    // console.log(eventData , "Na legit");
    // console.log("click on edit event");
  };

  const deleteCampus = async (id) => {
    try {
      const token = JSON.parse(sessionStorage.getItem("userData")).access_token;
      const url = `${baseUrl}/campus/delete/${id}`;
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
      <div
        className="lg:h-[90vh] overflow-y-auto bg-no-repeat bg-contain
       bg-[url('/src/pages/AdminBoard/Minister/Images/clmLogo.svg')]
       bg-center relative h-[95vh]"
      >
        <div className=" relative z-[300]">
          <div
            className="bg-white shadow-lg lg:h-[10vh] lg:p-[.5rem]
           flex justify-around lg:block lg:w-[80vw] overflow-hidden
           w-[100vw] md:h-[8vh] h-[7vh] 
          "
          >
            <h1
              className="lg:text-2xl md:text-center lg:text-left py-[2vh] md:py-[3vh] 
               md:text-[1.5rem] lg:pt-[2vh]"
            >
              Campus Management
            </h1>
            <h1
              className="lg:hidden font-black md:pt-[2vh] pl-[20vw] pt-[1vh]
            md:pr-[3vw] lg:text-[2rem] md:text-[1.8rem] text-[1.2rem]"
              onClick={() => hideSideBar(true)}
            >
              &#9776;
            </h1>
          </div>
        </div>
        <div
          className="bg-[rgba(217,217,217,0.93)] absolute w-[100%] 
          h-[100%] top-0 left-0
         "
        ></div>
        {showMoreInfo ? (
          <ShowMoreCampusInfo showMoreInfoData={showMoreInfoData} />
        ) : null}
        {upLoadCampusBool ? (
          <UploadEvent
            uploadCampusHandler={uploadCampusHandler}
            campusDataList={campusDataList}
            uploadOrupdate={uploadOrUpdate}
            campusId={campusId}
          />
        ) : null}
        {/* <div className=" relative z-[300]">
          <div className="my-5 px-[4vh] lg:flex justify-between">
            <div className="lg:flex">
              <form
                className="flex"
                // onSubmit={searchCampus}
              >
                <input
                  type="text"
                  className="w-[100%] md:w-[60vw] lg:w-[26vw] h-[6vh] 
                rounded-l-md outline-none pl-5 ring-red-500 ring-2 bg-white"
                />
                <button
                  className="bg-[#F66D0A] text-white h-[6vh] w-[40%] rounded-r-md
              hover:bg-[#f62d0a] transition-all duration-150 delay-100 md:text-[2rem]
              lg:text-[1.3rem] text-[1.2rem] ring-red-500 ring-2"
                >
                  search
                </button>
              </form>
            </div>
            <div
              className="fontLink bg-[#F66D0A] text-white h-[6vh] w-[60%] md:w-[45%] lg:w-[20%]
          rounded-md hover:bg-[#f62d0a] transition-all duration-150 delay-100 my-[0.9rem] lg:my-0
          text-center pt-[0.7rem] md:pt-[1.1rem] lg:pt-[0.4rem] md:text-2xl lg:text-[1rem]
          "
            >
              <button className="" onClick={() => uploadCampusHandler(true)}>
                <span>
                  <FontAwesomeIcon icon={faCalendarPlus} />
                </span>{" "}
                &nbsp; Add new Campus
              </button>
            </div>
          </div>
        </div> */}
        {campusData.length > 0 ? (
          <div
            className="bg-[url('src\pages\AdminBoard\CampusManagement\Images\CLMLOGO.png')]
            grid lg:grid-cols-4 lg:py-10 lg:w-[78.8vw] md:pl-[5vw] lg:px-5 lg:gap-5 justify-center
            items-center md:grid-cols-2 md:h-[67.5vh] h-[80vh]  overflow-y-auto no-scrollbar
            md:gap-0 lg:h-[67.5vh] mt-[2rem] relative md:top-[-18vh] lg:top-[-10vh]"
          >
            {campusData.map((data) => {
              const { id, name, logo } = data;
              return (
                <div
                  key={id}
                  className="lg:w-[100%] md:w-[90%] w-[85vw] relative pb-10
                  "
                >
                  <div
                    className="bg-[#0A063E] lg:px-5 md:px-10 rounded-t-md
                "
                  >
                    <div className="flex gap-5  md:pt-10 py-10 ">
                      <h1
                        className="text-white lg:text-[4rem] 
                    md:text-[4rem] font-bold text-[4rem] px-5 pt-5 md:px-0
                    md:pt-0"
                      >
                        CLF
                      </h1>
                      <img
                        src={logo}
                        alt=""
                        className="w-[35vw] lg:w-[5vw] lg:h-[10vh] md:w-[15vw]
                      lg:mt-2 md:mt-0 mt-4"
                      />
                    </div>
                    <h3
                      className="text-white text-center md:text-[1.5rem] lg:text-[1rem]
                    md:py-3 lg:py-3 font-semibold text-[1.5rem] py-3"
                    >
                      {name} Campus
                    </h3>
                  </div>
                  <div
                    className="bg-[#0A063E] shadow-md flex justify-center lg:gap-5
                   lg:py-3 py-3 gap-3 text-black rounded-b-md bg-[rgba(246,237,10,1)]"
                    onClick={() => MoreInfo(id)}
                  >
                    <span
                      className="font-bold cursor-pointer md:text-[1.5rem] lg:text-[1rem]
                  text-[1.2rem]
                  "
                    >
                      More info
                    </span>
                    <span className=" md:text-[1.5rem] lg:text-[1rem] text-[1.2rem]">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </div>
                  <div className="hidden">
                    <DecisionButtonCampus id={id} editCampus={editCampus} 
                    deleteCampus={deleteCampus} />
                  </div>
                
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-[13vh] lg:mt-[15vh]">
            <EmptyData message={"No Campus found"} />
          </div>
        )}
      </div>
    </>
  );
};

CampusManagementComponent.propTypes = {
  hideSideBar: PropTypes.bool,
};

export default CampusManagementComponent;
