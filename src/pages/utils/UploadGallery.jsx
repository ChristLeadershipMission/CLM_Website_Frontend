import { useRef, useState } from "react";
import camera from "./image/camera.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import axios from "axios";
import storage from "../AdminBoard/Firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";

const UploadGallery = ({
  uploadGalleryHandler,
  galleryData,
  uploadOrupdate,
  galleryId,
}) => {
  const imageRef = useRef();
  const uploadImageContainerRef = useRef(null);
  const [eventDataUpdate, setEventDataUpdate] = useState(galleryData);
  const uploadOrUpdateButtonRef = useRef(null);
  // const [imageUrl, setImageUrl] = useState("");
  console.log(galleryId);


  const uploadImage = async (file) => {
    try {
      const storageRef = ref(storage, "EventImages/" + file.name); //This function allows you to create a reference to a specific location in Firebase Storage.
      await uploadBytes(storageRef, file); //This function is used to upload binary data (in this case, an image file) to a specific location in Firebase Storage.
      const downloadURL = await getDownloadURL(storageRef); //his function is used to get the download URL of a file stored in Firebase Storage.
      if (downloadURL) {
        setEventDataUpdate({...eventDataUpdate, image: downloadURL});
        imageRef.current.src = downloadURL;
        toast("Photo uploaded successfully");
        console.log(imageRef.current.src);
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
    // };
  };

  const request = async () => {
    try {
      if (eventDataUpdate.image) {
        const url = "https://kingshillcity-01.onrender.com/api/v1/gallery";
        const response = await axios.post(url, eventDataUpdate);
        setEventDataUpdate({ title: "", date: "", time: "" });
        if (response) {
          toast("Refresh to see changes");
        }
        console.log(response);
      } else if (!eventDataUpdate.image) {
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



  //   const controllInput = (e) => {
  //     setEventDataUpdate({ ...eventDataUpdate, [e.target.name]: e.target.value });
  //   };
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
    // console.log(e.target);
    // console.log(e.dataTransfer.files[0]);
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
          onClick={() => uploadGalleryHandler(false)}
        />
        <div
          className="flex justify-center items-center h-[60vh] 
           md:h-[70vh] lg:h-[60vh]"
        >
          <div className="bg-white rounded-md p-10 w-[95%] md:w-[80%] lg:w-[50%]">
            <div className='text-black text-2xl font-bold font-["Arial"] flex justify-between py-2'>
              <h1>Upload new event</h1>
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
                    name="image"
                    className="file:mr-4 file:py-2 file:px-4 ring
                    file:rounded-full file:border-0 text-transparent
                    file:text-sm file:font-semibold file:hidden
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-200 w-[30%] hidden"
                    onChange={selectImage}
                  />
                </label>
              </div>
              {/*  */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

UploadGallery.propTypes = {
  galleryData: PropTypes.object,
  uploadGalleryHandler: PropTypes.func,
  uploadOrupdate: PropTypes.string,
  galleryId: PropTypes.number,
};

export default UploadGallery;
