import { useEffect, useRef, useState } from "react";
import camera from "./image/camera.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import axios from "axios";
import storage from "../AdminBoard/Firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import baseUrl from "./baseUrl";

const Upload = ({ uploadEventHandler, eventData, uploadOrupdate}) => {
  const imageRef = useRef();
  const uploadImageContainerRef = useRef(null);
  const [eventDataUpdate, setEventDataUpdate] = useState(eventData);
  const uploadOrUpdateButtonRef = useRef(null);
  // const [imageUrl, setImageUrl] = useState("");
  const [campuses, setCampuses] = useState([]);

  const campusId = (e) =>{
    setEventDataUpdate({...eventDataUpdate,[e.target.name]: e.target.value});
    console.log(e.target.value);
    console.log(eventDataUpdate);
  };

  const selectMode = (e) =>{
    setEventDataUpdate({...eventDataUpdate,[e.target.name]: e.target.value});
    console.log(e.target.value);
    console.log(eventDataUpdate);
  };

  useEffect(()=>{
    const fetchCampuses = async () => {
      try {
        const url = `${baseUrl}/campus/findAllCampuses`;
      const token = JSON.parse(
        sessionStorage.getItem("userData")
      ).access_token;
      const headers =  {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      };
      const response = await axios.get(
        url,
       headers
      );
      const data = response.data;
      setCampuses(data);
      console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCampuses();
  },[]);

  const uploadImage = async (file) => {
    try {
      const storageRef = ref(storage, "EventImages/" + file.name); //This function allows you to create a reference to a specific location in Firebase Storage.
      await uploadBytes(storageRef, file); //This function is used to upload binary data (in this case, an image file) to a specific location in Firebase Storage.
      const downloadURL = await getDownloadURL(storageRef); //his function is used to get the download URL of a file stored in Firebase Storage.
      if (downloadURL) {
        setEventDataUpdate({ ...eventDataUpdate, eventImageUrl: downloadURL });
        imageRef.current.src = downloadURL;
        toast("Photo uploaded successfully");
        console.log(imageRef.current.src);
      } else {
        toast(
          "Failed to upload... Please try again later"
        );
      }
      // return downloadURL;
    } catch (error) {
      console.log(`An error occurred while uploading: ${error.message}`);
    }
  };

  const selectImage = async (e) => {
    e.preventDefault();
    toast("Photo is uploading..");
    const file = e.target.files[0];
    if (file) {
      await uploadImage(file);
    }

    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   imageRef.current.src = reader.result;
    //   imageRef.current.style.width = "10vw";
    //   imageRef.current.style.height = "10vh";
    //   console.log(imageRef.current);
      
    // };
  };

  const request = async () => {
    console.log(eventDataUpdate);
    try {
      if (
        eventDataUpdate.eventImageUrl &&
        eventDataUpdate.eventName &&
        eventDataUpdate.endDate &&
        eventDataUpdate.startDate
      ) {
        console.log("got here");
        // const data = {
        //   eventName: eventDataUpdate.eventName,
        //   content: "",
        //   startDate: eventDataUpdate.startDate,
        //   endDate: eventDataUpdate.endDate,
        //   eventImageUrl: eventDataUpdate.eventImageUrl,
        //   eventVideoUrl: "",
        // };

        const data = uploadOrUpdateButtonRef.current.innerText === "Upload"
        ?
        {
          eventName: eventDataUpdate.eventName,
          content: "",
          startDate: eventDataUpdate.startDate,
          endDate: eventDataUpdate.endDate,
          eventImageUrl: eventDataUpdate.eventImageUrl,
          eventVideoUrl: "",
          campusId: eventDataUpdate.campusId,
          mode: eventDataUpdate.mode,
        }
        :
        {
          endDate: eventDataUpdate.endDate,
          eventImageUrl:
            eventDataUpdate.eventImageUrl,
          eventName: eventDataUpdate.eventName,
          eventVideoUrl: "string",
          flier: "string",
          id: eventDataUpdate.id,
          startDate: eventDataUpdate.startDate,
          theme: "string",
          campusId: eventDataUpdate.campusId,
          mode: eventDataUpdate.mode,
        };
        console.log("data", data);
        const token = JSON.parse(
          sessionStorage.getItem("userData")
        ).access_token;
        console.log(token);
        const url =
          uploadOrUpdateButtonRef.current.innerText === "Upload"
            ? `${baseUrl}/event/eventCreation`
            : `${baseUrl}/event/eventUpdate`;
        const response =  uploadOrUpdateButtonRef.current.innerText === "Upload"
        ? 
        await axios.post(url, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        :
        await axios.patch(url, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEventDataUpdate({ eventName: "", startDate: "", endDate: "", campusId: "" });
        if (response) {
          // location.reload();
          toast("Refresh to see changes");
        }
        console.log(response.data);
      } else if (!eventDataUpdate.eventImageUrl) {
        toast(
          "Please choose an image. If you have selected an image before, please choose the same picture again."
        );
      } else {
        toast("Please fill all fields");
      }
    } catch (error) {
      console.log(error);
    }
  };

 

  const controllInput = (e) => {
    setEventDataUpdate({ ...eventDataUpdate, [e.target.name]: e.target.value });
  };
  const dragOver = (e) => {
    e.preventDefault();
    uploadImageContainerRef.current.style.backgroundColor =
      "rgba(114,203,255,0.2)";
  };
  const dragLeave = (e) => {
    e.preventDefault();
    uploadImageContainerRef.current.style.backgroundColor = "";
  };
  const drop = async (e) => {
    e.preventDefault();
    toast("Photo is uploading..");
    console.log(e.target);
    console.log(e.dataTransfer.files[0]);
    const file = e.dataTransfer.files[0];
    if (file) {
      await uploadImage(file);
    }
 
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   imageRef.current.src = reader.result;
    //   imageRef.current.style.width = "10vw";
    //   imageRef.current.style.height = "10vh";
    // };
  };

  return (
    <>
      <div
        className="fixed lg:w-[85vw] w-[100vw] h-[100vh] 
         lg:h-[80vh] bg-[rgba(0,0,0,0.5)] z-50"
      >
        <ToastContainer />
        <FontAwesomeIcon
          icon={faXmark}
          className="text-2xl md:text-[2rem] m-10 absolute 
          text-white hover:cursor-pointer"
          onClick={() => uploadEventHandler(false)}
        />
        <div
          className="flex justify-center items-center h-[80vh] 
           md:h-[70vh] lg:h-[80vh]"
        >
          <div className="bg-white rounded-md p-10 w-[95%] md:w-[80%] lg:w-[50%] 
           overflow-y-scroll h-[100%]">
            <div className='text-black text-2xl font-bold font-["Arial"] flex 
            justify-between py-2'>
              <h1>Upload new event</h1>
              <button
                className=" bg-blue-400 text-lg p-2 rounded-md"
                onClick={request}
                ref={uploadOrUpdateButtonRef}
                type="submit"
              >
                {uploadOrupdate}
              </button>
            </div>
            <form action="" className="">
              <div
                className=" border-dashed border-2 h-[20vh] flex justify-center 
                items-center w-[100%] relative"
                ref={uploadImageContainerRef}
                onDragOver={(e) => dragOver(e)}
                onDragLeave={(e) => dragLeave(e)}
                onDrop={drop}
              >
                <label htmlFor="image">
                  <h3 className="text-center">
                    Upload Photo or{" "}
                    <b className="text-">Drag photo into this box</b>
                  </h3>
                  <div className="flex justify-center">
                    <img
                      src={camera}
                      alt=""
                      className="w-[10vw] h-[10vh] p-2"
                      ref={imageRef}
                    />
                  </div>
                  <input
                    type="file"
                    id="image"
                    required
                    className="file:mr-4 file:py-2 file:px-4 ring
                    file:rounded-full file:border-0 text-transparent
                    file:text-sm file:font-semibold file:hidden
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-200 w-[30%] hidden"
                    onChange={selectImage}
                  />
                </label>
              </div>
              <div className="mt-5">
                <label htmlFor="description">
                  <h3 className="py-2">Event Name</h3>
                  <input
                    type="text"
                    minLength={3}
                    maxLength={40}
                    id="description"
                    required
                    value={eventDataUpdate.eventName}
                    name="eventName"
                    onChange={controllInput}
                    className="outline-none bg-slate-200 rounded-sm 
                 h-[6vh] w-[100%] pl-5"
                  />
                </label>
              </div>
              <div className="mt-5 custom-dropdown">
                <label htmlFor="ministerInChargeId">
                  <h3 className="py-2">Campus</h3>
                  <select name="campusId" id="campusId"
                   autoComplete="true" required 
                   className="outline-none bg-slate-200 rounded-sm 
                  h-[6vh] w-[100%] pl-5 overflow-y-scroll"
                  onChange={campusId}
                  >
                    <option value="Select" disabled selected>Select Campus</option>
                    {
                      campuses.map((minister) =>{
                        const {id,name} = minister;
                        // const ministerName = firstName + ' ' + lastName;
                        return(
                          <option key={id} value={id}
                          id={id}
                          >{name}</option>
                          
                        )
                      })
                    }
                  </select>
                </label>
              </div>
              <div className="mt-5 custom-dropdown">
                <label htmlFor="mode">
                  <h3 className="py-2">Mode</h3>
                  <select name="mode" id="mode"
                   autoComplete="true" required 
                   className="outline-none bg-slate-200 rounded-sm 
                  h-[6vh] w-[100%] pl-5 overflow-y-scroll"
                  onChange={selectMode}
                  >
                    <option value="Select" disabled selected>Select Mode</option>
                    {
                      [{id:1, mode: "STATIC"},{id:2, mode: "DYNAMIC"}].map((event) =>{
                        const {id,mode} = event;
                        // const ministerName = firstName + ' ' + lastName;
                        return(
                          <option key={id} value={mode}
                          id={id}
                          >{mode}</option>
                          
                        )
                      })
                    }
                  </select>
                </label>
              </div>
              <label htmlFor="startDate">
                <h3 className="py-2">Start Date</h3>
                <input
                  type="date"
                  id="startDate"
                  required
                  value={eventDataUpdate.startDate}
                  name="startDate"
                  onChange={controllInput}
                  className="outline-none bg-slate-200 rounded-sm 
                  h-[6vh] w-[100%] pl-5"
                />
              </label>
              <label htmlFor="endDate">
                <h3 className="py-2">End Date</h3>
                <input
                  type="date"
                  id="endDate"
                  required
                  value={eventDataUpdate.endDate}
                  name="endDate"
                  onChange={controllInput}
                  placeholder=""
                  className="outline-none bg-slate-200 rounded-sm 
                  h-[6vh] w-[100%] pl-5"
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Upload.propTypes = {
  eventData: PropTypes.object,
  uploadEventHandler: PropTypes.func,
  uploadOrupdate: PropTypes.string,
  eventId: PropTypes.number,
};
export default Upload;
