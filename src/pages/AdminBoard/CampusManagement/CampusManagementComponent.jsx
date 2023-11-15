// import shape from "./Images/shape.svg";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import UploadEvent from "../../utils/UploadCampus";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import ShowMoreCampusInfo from "../../utils/showMoreCampusInfo";
// import ShowMoreCampusInfo from "../../../pages/utils/ShowMoreCampusInfo";
import { useNavigate } from "react-router-dom";

const CampusManagementComponent = ({ hideSideBar }) => {
  const [upLoadCampusBool, setUpLoadCampusBool] = useState(false);
  const [campusData, setCampusData] = useState([]);
  const [uploadOrUpdate, setUploadOrUpdate] = useState();
  const [campusId, setCampusId] = useState();
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showMoreInfoData, setShowMoreInfoData] = useState([]);
  const [uploadCampusBool2, setUpLoadCampusBool2] = useState(false);
  const [campusDataList, setCampusDataList] = useState([]);
  const navigate = useNavigate();

  const MoreInfo = (id) => {
    const moreInfoData = campusData.filter((campus) => campus.id === id);
    setShowMoreInfoData(moreInfoData);
    setShowMoreInfo(true);
  };

  const uploadCampusHandler = (value) => {
    setUpLoadCampusBool(value);
    setUpLoadCampusBool2(value);
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
    setUploadOrUpdate("Upload");
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
    setUpLoadCampusBool2(true);
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
      <div className="lg:h-[90vh] overflow-y-auto">
        <div
          className="bg-white shadow-lg lg:h-[10vh] lg:p-[.5rem]
          flex justify-around lg:block lg:w-[78.8vw] overflow-hidden
          w-[100vw]
          "
        >
          <h1
            className="lg:text-2xl md:text-center lg:text-left py-[3vh] md:py-[3vh] 
           md:text-[1.5rem] lg:pt-[2vh] md:w-[100vw] md:pr-[30vw] lg:pr-0"
          >
            Campus Management
          </h1>
          <h1
            className="lg:hidden text-[2rem] font-black pt-[2vh] pl-[20vw]
            md:pr-[3vw]"
            onClick={() => hideSideBar(true)}
          >
            &#9776;
          </h1>
        </div>
        {uploadCampusBool2 ? (
          <UploadEvent
            uploadCampusHandler={uploadCampusHandler}
            uploadOrupdate={uploadOrUpdate}
            campusDataList={campusDataList}
            campusId={campusId}
          />
        ) : null}
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
        <div className="my-5 px-[4vh] lg:flex justify-between">
          <div className="flex">
            <form
              className="flex"
              // onSubmit={searchCampus}
            >
              <input
                type="text"
                className=" bg-gray-300 w-[100%] md:w-[60vw] lg:w-[26vw] h-[6vh] 
                rounded-l-md outline-none pl-5"
              />
              <button
                className="bg-[#F66D0A] text-white h-[6vh] w-[40%] rounded-r-md
              hover:bg-[#f62d0a] transition-all duration-150 delay-100 md:text-[2rem]
              lg:text-[1.3rem] text-[1.2rem]"
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
        <div
          className="bg-[url('src\pages\AdminBoard\CampusManagement\Images\CLMLOGO.png')]
          grid lg:grid-cols-4 lg:py-10 lg:w-[78.8vw] md:pl-[5vw] lg:px-5 lg:gap-5 justify-center
          items-center md:grid-cols-2 md:h-[67.5vh] h-[80vh]  overflow-y-auto no-scrollbar
          md:gap-0 lg:h-[67.5vh]"
        >
          {campusData.map((data) => {
            const { id, name, logo } = data;
            return (
              <div
                key={id}
                className="lg:w-[100%] md:w-[90%] w-[85vw] relative py-5 md:py-5 lg:py-5
                bg-white"
              >
                <div
                  className="bg-[#0A063E] lg:px-5 md:px-10 rounded-t-md
                "
                >
                  <div className="flex gap-5 lg:pt-7 md:pt-10 py-10 md:py-0">
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
                lg:py-3 py-3 gap-3 text-white"
                  onClick={() => MoreInfo(id)}
                >
                  <span 
                  className="font-bold cursor-pointer md:text-[1.5rem] lg:text-[1rem]
                  text-[1.2rem]
                  ">
                    More info
                  </span>
                  <span 
                  className=" md:text-[1.5rem] lg:text-[1rem] text-[1.2rem]"
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
                <div
                  className="flex gap-5 pb-5 pl-5 relative bottom-0
                 bg-[#F66D0A] justify-center items-center lg:pt-[1vh]
                 rounded-b-md"
                >
                  <p
                    className=" text-[#f3efef] font-bold cursor-pointer 
                          hover:scale-[1.05] transition-all duration-150 delay-75 
                          ease-in-out"
                    id={id}
                    onClick={() => editCampus(id)}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faPenToSquare} /> Edit
                  </p>
                  <p
                    className=" text-[rgb(0,0,128)] font-bold cursor-pointer hover:scale-[1.05]
                           transition-all duration-150 delay-75 ease-in-out"
                    onClick={() => deleteCampus(id)}
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

CampusManagementComponent.propTypes = {
  hideSideBar: PropTypes.bool,
};

export default CampusManagementComponent;
