import { useEffect,  useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import camera from "./image/camera.svg";
import storage from "../AdminBoard/Firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./utils.css";
import baseUrl from "./baseUrl";
import SubmitButton from "./SubmitButton";


const UploadEvent = ({
  uploadCampusHandler,
  campusDataList,
  uploadOrupdate,
  campusId,
}) => {
  const [campusDataUpdate, setCampusDataUpdate] = useState(campusDataList[0]);
  // const [campusData, setCampusData] = useState(campusData);
  const uploadOrUpdateButtonRef = useRef(null);
  const uploadImageContainerRef = useRef(null);
  const imageRef = useRef(camera);
  // const [imageUrl, setImageUrl] = useState("");
  const [ministers, setministers] = useState([]);
  const [campusAddress, setCampusAddress] = useState({});
 console.log(campusId);

const Address = (e) =>{
  setCampusAddress({...campusAddress,[e.target.name]: e.target.value});
  setCampusDataUpdate({...campusDataUpdate, address: campusAddress})
  console.log(campusAddress);
};

const ministerId = (e) =>{
  setCampusDataUpdate({...campusDataUpdate,[e.target.name]: e.target.value});
  console.log(e.target.value);
  console.log(e.target.id);
  console.log(e.target.name);
};
  const request = async () => {
    try {
    console.log(campusDataUpdate)
      if (
        campusDataUpdate.name &&
        campusDataUpdate.address.state &&
        campusDataUpdate.address.country &&
        campusDataUpdate.email &&
        campusDataUpdate.logo &&
        campusDataUpdate.ministerInChargeId 
      ) {
        const token = JSON.parse(
          sessionStorage.getItem("userData")
        ).access_token;
        const headers = {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        };
        const url =
          uploadOrUpdateButtonRef.current.innerText === "Upload"
            ? `${baseUrl}/campus/createCampus`
            : `${baseUrl}/campus/updateCampus/${campusId}`;
        const response = uploadOrUpdateButtonRef.current.innerText === "Upload" ?
         await axios.post(url, campusDataUpdate, headers) :
         await axios.patch(url, campusDataUpdate, headers);
        setCampusDataUpdate({ name: "", email: "", logo: "", ministerInChargeId: "",  address: {} });
        if (response.status === 201) {
           location.reload();
        }
        if (response.status === 200) {
           location.reload();
        }
        if (response) {
          toast("Please Refresh to see changes");
        }
        console.log(response);
      }else {
        toast("Please fill all fields");
      }
      // console.log(eventDataUpdate);
    } catch (error) {
      console.log(error);
    }
  };

  const controllInput = (e) => {
    setCampusDataUpdate({
      ...campusDataUpdate,
      [e.target.name]: e.target.value,
    });
    console.log(campusDataUpdate);
  };


  
  const uploadImage = async (file) => {
    try {
      const storageRef = ref(storage, "EventImages/" + file.name); //This function allows you to create a reference to a specific location in Firebase Storage.
      await uploadBytes(storageRef, file); //This function is used to upload binary data (in this case, an image file) to a specific location in Firebase Storage.
      const downloadURL = await getDownloadURL(storageRef); //his function is used to get the download URL of a file stored in Firebase Storage.
      if (downloadURL) {
        setCampusDataUpdate({ ...campusDataUpdate, logo: downloadURL });
        imageRef.current.src = downloadURL;
        console.log(imageRef.current.src, "Image updated");
        console.log(campusDataUpdate);
        toast("Photo uploaded successfully");
      } else {
        toast(
          "Failed to upload... Please try again later"
        );
      }
    } catch (error) {
      console.log(`An error occurred while uploading: ${error.message}`);
    }
  };

  const selectImage = async (e) => {
    e.preventDefault();
    toast("Photo is uploading...")
    const file = e.target.files[0];
    console.log(file);
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
    console.log(e.dataTransfer.files[0]);
    const file = e.dataTransfer.files[0];
    toast("Photo is uploading...")
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

  useEffect(()=>{
    const fetchMinisters = async () => {
      try {
        const url = `${baseUrl}/minister/findAll`;
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
      setministers(data);
      console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMinisters();
  },[]);

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
          onClick={() => uploadCampusHandler(false)}
        />
        <div
          className="flex justify-center items-center h-[80vh] 
          md:h-[70vh] lg:h-[80vh]"
        >
          <div 
           className="bg-white rounded-md p-10 w-[95%] md:w-[80%] lg:w-[50%]
           overflow-y-scroll h-[100%]
           ">
            <div className='text-black text-2xl font-bold font-["Arial"] flex justify-between py-2'>
              <h1>Upload new Campus</h1>
              <button
                className=" bg-[#0A063E] text-lg p-2 rounded-md text-white hover:bg-[#1f2555]"
                onClick={request}
                ref={uploadOrUpdateButtonRef}
                type="submit"
              >
                {uploadOrupdate}
              </button>
            </div>
            <form action="">
              <div className="mt-5">
              <div
                className=" border-dashed border-2 h-[20vh] flex justify-center 
                items-center w-[100%] relative"
                ref={uploadImageContainerRef}
                onDragOver={(e) => dragOver(e)}
                onDragLeave={(e) => dragLeave(e)}
                onDrop={drop}
              >
                <label htmlFor="logo">
                  <h3 className="text-center">
                    Upload Photo or{" "}
                    <b className="text-">Drag photo into this box</b>
                  </h3>
                  <div className="flex justify-center">
                    <img
                      src={imageRef.current}
                      alt=""
                      className="w-[10vw] h-[10vh] p-2"
                      // ref={imageRef}
                    />
                  </div>
                  <input
                    type="file"
                    id="logo"
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
                <label htmlFor="name">
                  <h3 className="py-2">
                    Name of Campus <br />
                  </h3>
                  <input
                    type="text"
                    id="link"
                    required
                    value={campusDataUpdate.name}
                    placeholder="OAU"
                    name="name"
                    onChange={controllInput}
                    className="outline-none bg-slate-200 rounded-sm 
                     h-[6vh] w-[100%] pl-5 placeholder:text-sm"
                  />
                </label>
              </div>
              <div className="mt-5 custom-dropdown">
                <label htmlFor="ministerInChargeId">
                  <h3 className="py-2">Minster in charge</h3>
                  <select name="ministerInChargeId" id="ministerInChargeId"
                   autoComplete="true" required 
                   className="outline-none bg-slate-200 rounded-sm 
                  h-[6vh] w-[100%] pl-5 overflow-y-scroll"
                  onChange={ministerId}
                  >
                    <option value="Select" disabled selected>Select Minister</option>
                    {
                      ministers.map((minister) =>{
                        const {id,firstName,lastName} = minister;
                        const ministerName = firstName + ' ' + lastName;
                        return(
                          <option key={id} value={id}
                          id={id}
                          >{ministerName}</option>
                          
                        )
                      })
                    }
                  </select>
                </label>
              </div>
              <label htmlFor="state">
                <h3 className="py-2">State </h3>
                <input
                  type="text"
                  id="state"
                  required
                  value={campusDataUpdate.address.state}
                  placeholder={"OGUN State"}
                  name="state"
                  onChange={Address}
                  className="outline-none bg-slate-200 rounded-sm 
                   h-[6vh] w-[100%] pl-5"
                />
              </label>
              <label htmlFor="country">
                <h3 className="py-2">Country </h3>
                <input
                  type="text"
                  id="country"
                  required
                  value={campusDataUpdate.address.country}
                  placeholder={"Nigeria"}
                  name="country"
                  onChange={Address}
                  className="outline-none bg-slate-200 rounded-sm 
                   h-[6vh] w-[100%] pl-5"
                />
              </label>
              <label htmlFor="email">
                <h3 className="py-2">Email </h3>
                <input
                  type="text"
                  id="email"
                  required
                  value={campusDataUpdate.email}
                  placeholder={"campus@gmail.com"}
                  name="email"
                  onChange={controllInput}
                  className="outline-none bg-slate-200 rounded-sm 
                   h-[6vh] w-[100%] pl-5"
                />
              </label>
              <SubmitButton request={request} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
//   };

UploadEvent.propTypes = {
  campusDataList: PropTypes.object,
  uploadCampusHandler: PropTypes.func,
  uploadOrupdate: PropTypes.string,
  campusId: PropTypes.number,
};

export default UploadEvent;
