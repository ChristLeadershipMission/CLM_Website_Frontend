import { useRef, useState } from "react";
import camera from "./image/camera.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import axios from "axios";
import storage from "../AdminBoard/Firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import baseUrl from "./baseUrl";
import SubmitButton from "./SubmitButton";

const UploadMinister = ({
  uploadMinisterHandler,
  ministerData,
  uploadOrupdate,
  ministerId,
}) => {
  const imageRef = useRef();
  const uploadImageContainerRef = useRef(null);
  const [ministerDataUpdate, setMinisterDataUpdate] = useState(ministerData);
  const uploadOrUpdateButtonRef = useRef(null);
  // const [imageUrl, setImageUrl] = useState("");


  const uploadImage = async (file) => {
    try {
      const storageRef = ref(storage, "EventImages/" + file.name); //This function allows you to create a reference to a specific location in Firebase Storage.
      await uploadBytes(storageRef, file); //This function is used to upload binary data (in this case, an image file) to a specific location in Firebase Storage.
      const downloadURL = await getDownloadURL(storageRef); //his function is used to get the download URL of a file stored in Firebase Storage.
      if (downloadURL) {
        setMinisterDataUpdate({
          ...ministerDataUpdate,
          profilePicture: downloadURL,
        });
        imageRef.current.src = downloadURL;
        toast("Photo uploaded successfully");
        console.log(imageRef.current.src);
        console.log(ministerDataUpdate);
      } else {
        toast("Failed to upload... Please try again later");
      }
      // return downloadURL;
    } catch (error) {
      console.log(`An error occurred while uploading: ${error.message}`);
    }
  };

  const selectImage = async (e) => {
    e.preventDefault();
    toast("Loading image...");
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
    toast("Loading image...");
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


  const request = async () => {
    console.log(ministerDataUpdate);
    try {
      if (
        ministerDataUpdate.profilePicture &&
        ministerDataUpdate.emailAddress &&
        ministerDataUpdate.firstName &&
        ministerDataUpdate.lastName &&
        ministerDataUpdate.portfolio
      ) {
        console.log("got here");
        const data = {
          firstName: ministerDataUpdate.firstName,
          lastName: ministerDataUpdate.lastName,
          phoneNumber: "1",
          emailAddress: ministerDataUpdate.emailAddress,
          profilePicture: ministerDataUpdate.profilePicture,
          createdAt: null,
          portfolio: ministerDataUpdate.portfolio,
        };
        console.log("data", data);
        const token = JSON.parse(
          sessionStorage.getItem("userData")
        ).access_token;
        console.log(token);
        const url =
          uploadOrUpdateButtonRef.current.innerText === "Submit"
            ? `${baseUrl}/minister/createMinister`
            : `${baseUrl}/minister/updateMinister/${ministerId}`;
        const response =
          uploadOrUpdateButtonRef.current.innerText === "Submit"
            ? await axios.post(url, data, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
            : await axios.patch(url, data, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
        setMinisterDataUpdate({
          eventName: "",
          startDate: "",
          endDate: "",
          campusId: "",
        });
        if (response.statusCode == 201) {
          location.reload();
          toast("Refresh to see changes");
        }
        if (response) {
          location.reload();
          toast("Refresh to see changes");
        }
        if (response) {
          // location.reload();
          toast("Refresh to see changes");
        }
        console.log(response.data);
      } else if (!ministerDataUpdate.eventImageUrl) {
        return toast(
          "No Image Found"
        );
      } else {
        toast("Please fill all fields");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const controllInput = (e) => {
    setMinisterDataUpdate({
      ...ministerDataUpdate,
      [e.target.name]: e.target.value,
    });
    console.log(ministerDataUpdate);
  };
  
  //   firstName : "Minstrel Tope"
  //   lastName : ""
  //   phoneNumber : "12d34544f3d42"
  //   emailAddress : "midkfe@gmaeil.com"
  //   profilePicture : null
  //   createdAt : null
  //   portfolio : "Music Director, CLM World-wide"
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
          onClick={() => uploadMinisterHandler(false)}
        />
        <div
          className="flex justify-center items-center h-[80vh] 
           md:h-[70vh] lg:h-[80vh]"
        >
          <div
            className="bg-white rounded-md p-10 w-[95%] md:w-[80%] lg:w-[50%] 
           overflow-y-scroll h-[100%]"
          >
            <div
              className='text-black text-2xl font-bold font-["Arial"] flex 
            justify-between py-2'
            >
              <h1>Upload new Minister</h1>
              <button
                className=" bg-[#0A063E] text-lg p-2 rounded-md text-white hover:bg-[#1f2555]"
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
                <label htmlFor="profilePicture">
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
                    id="profilePicture"
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
                <label htmlFor="firstName">
                  <h3 className="py-2">First Name</h3>
                  <input
                    type="text"
                    minLength={3}
                    maxLength={40}
                    id="firstName"
                    required
                    placeholder="Taiwo"
                    value={ministerDataUpdate.firstName}
                    name="firstName"
                    onChange={controllInput}
                    className="outline-none bg-slate-200 rounded-sm 
                 h-[6vh] w-[100%] pl-5"
                  />
                </label>
              </div>
              <label htmlFor="lastName">
                <h3 className="py-2">Last Name</h3>
                <input
                  type="text"
                  id="lastName"
                  required
                  placeholder="Adewale"
                  value={ministerDataUpdate.lastName}
                  name="lastName"
                  onChange={controllInput}
                  className="outline-none bg-slate-200 rounded-sm 
                  h-[6vh] w-[100%] pl-5"
                />
              </label>
              <label htmlFor="emailAddress">
                <h3 className="py-2">Email Address</h3>
                <input
                  type="text"
                  id="emailAddress"
                  required
                  value={ministerDataUpdate.emailAddress}
                  name="emailAddress"
                  onChange={controllInput}
                  placeholder="name@gmail.com"
                  className="outline-none bg-slate-200 rounded-sm 
                  h-[6vh] w-[100%] pl-5"
                />
              </label>
              <label htmlFor="portfolio">
                <h3 className="py-2">Portfolio</h3>
                <input
                  type="text"
                  id="portfolio"
                  required
                  value={ministerDataUpdate.portfolio}
                  name="portfolio"
                  onChange={controllInput}
                  placeholder=" e.g. Music Director"
                  className="outline-none bg-slate-200 rounded-sm 
                  h-[6vh] w-[100%] pl-5"
                />
              </label>
              <SubmitButton request={request}  uploadOrupdate={uploadOrupdate}/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

UploadMinister.propTypes = {
  ministerData: PropTypes.object,
  uploadMinisterHandler: PropTypes.func,
  uploadOrupdate: PropTypes.string,
  ministerId: PropTypes.number,
};
export default UploadMinister;
