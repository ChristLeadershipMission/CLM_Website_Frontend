import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const UploadEvent = ({
  uploadSermonHandler,
  sermonData,
  uploadOrupdate,
  SermonId,
}) => {
  const [sermonDataUpdate, setSermonDataUpdate] = useState(sermonData);
  const uploadOrUpdateButtonRef = useRef(null);

  const request = async () => {
    try {
    //   console.log(sermonDataUpdate.link);
    //   console.log(sermonDataUpdate.title);
    //   console.log(sermonDataUpdate.date);
    console.log(sermonDataUpdate)
      if (
        sermonDataUpdate.link &&
        sermonDataUpdate.title &&
        sermonDataUpdate.date
      ) {
        const url =
          uploadOrUpdateButtonRef.current.innerText === "Upload"
            ? "https://kingshillcity-01.onrender.com/api/v1/sermons"
            : `https://kingshillcity-01.onrender.com/api/v1/sermons/${SermonId}`;
        const response = await axios.post(url, sermonDataUpdate);
        setSermonDataUpdate({ link: "", title: "", date: "" });
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
    setSermonDataUpdate({
      ...sermonDataUpdate,
      [e.target.name]: e.target.value,
    });
    console.log(sermonDataUpdate);
  };

  const handleLinkUrl = (url) => {
    window.open(url, "_blank");
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
          onClick={() => uploadSermonHandler(false)}
        />
        <div
          className="flex justify-center items-center h-[80vh] 
                 md:h-[70vh] lg:h-[80vh]"
        >
          <div className="bg-white rounded-md p-10 w-[95%] md:w-[80%] lg:w-[50%]">
            <div className='text-black text-2xl font-bold font-["Arial"] flex justify-between py-2'>
              <h1>Upload new sermon</h1>
              <button
                className=" bg-blue-400 text-lg p-2 rounded-md"
                onClick={request}
                ref={uploadOrUpdateButtonRef}
                type="submit"
              >
                {uploadOrupdate}
              </button>
            </div>
            <form action="">
              <div className="mt-5">
                <label htmlFor="description">
                  <h3 className="py-2">
                    Embedded Youtube url <br />
                    <span
                      className=" text-red-500 cursor-pointer"
                      onClick={() =>
                        handleLinkUrl(
                          "https://support.google.com/youtube/answer/171780?hl=en"
                        )
                      }
                    >
                      (Learn more about how to get an embedded Youtube link)
                    </span>
                  </h3>
                  <input
                    type="text"
                    id="link"
                    required
                    value={sermonDataUpdate.link}
                    placeholder="https://www.youtube.com/embed/vN2ffgGs3gY?si=E0dnSk_CcYxVdtGO"
                    name="link"
                    onChange={controllInput}
                    className="outline-none bg-slate-200 rounded-sm 
                     h-[6vh] w-[100%] pl-5 placeholder:text-sm"
                  />
                </label>
              </div>
              <div className="mt-5">
                <label htmlFor="description">
                  <h3 className="py-2">Sermon Description</h3>
                  <input
                    type="text"
                    id="description"
                    required
                    placeholder="The Encounter"
                    value={sermonDataUpdate.title}
                    name="title"
                    onChange={controllInput}
                    className="outline-none bg-slate-200 rounded-sm 
                       h-[6vh] w-[100%] pl-5"
                  />
                </label>
              </div>
              <label htmlFor="date">
                <h3 className="py-2">Date of upload</h3>
                <input
                  type="text"
                  id="date"
                  required
                  value={sermonDataUpdate.date}
                  placeholder={new Date().toLocaleString()}
                  name="date"
                  onChange={controllInput}
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
//   };

UploadEvent.propTypes = {
  sermonData: PropTypes.object,
  uploadSermonHandler: PropTypes.func,
  uploadOrupdate: PropTypes.string,
  sermonId: PropTypes.number,
};

export default UploadEvent;
