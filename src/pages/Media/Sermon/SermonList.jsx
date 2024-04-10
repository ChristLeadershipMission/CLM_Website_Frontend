import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import baseUrl from "../../utils/baseUrl";
import Telegram_Audio_Integration from "../Audio/Index";

const SermonList = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [videos, setVideos] = useState([]);
  const [isActive, setIsActive] = useState("Youtube sermon");
  const [changeState, setChangeState] = useState(true);
  const [audios, setAudios] = useState([]);

  const change_active_state = (e) => {
    setIsActive(e.target.innerText);
    if (e.target.innerText === "Youtube sermon") {
      setChangeState(true);
    } else {
      setChangeState(false);
    }
    console.log(isActive);
  };

  // const color_validation_youtbe = isActive === "Youtube sermon" ? isActiveStyles : {color: "black"};
  // const color_validation = isActive === "Youtube sermon" ? isActiveStyles : {};

  useEffect(() => {
    const request = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/media/retrieve-media-data`
        );
        setVideos(response.data.videos);
        setAudios(response.data.audios);
      } catch (error) {
        toast(error);
      }
    };
    request();
  }, []);

  const request = async () => {
    try {
      const response = await axios.get(`${baseUrl}/media/retrieve-media-data`);
      console.log(response.data.videos, "response");
    } catch (error) {
      toast(error);
    }
  };
  request();

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };
  return (
    <>
      <div className="mt-[7rem] relative">
        <ToastContainer />
        <div className="flex lg:gap-[35vw]">
          <h1
            className="text-black font-black md:text-xl lg:text-2xl 
              pb-3 pl-3 md:pl-5 lg:pl-0"
          >
            Latest sermons
          </h1>
          <div
            className=" font-black md:text-sm lg:text-xl
              pb-3 pl-3 md:pl-5 lg:pl-0"
          >
            <ul className="flex gap-[2rem]">
              <li
                className={`hover:cursor-pointer ${
                  isActive == "Youtube sermon" ? "text-gray-400" : "text-black"
                } `}
                onClick={(e) => change_active_state(e)}
              >
                Youtube sermon
              </li>
              <li
                className={`hover:cursor-pointer ${
                  isActive == "Audio sermon" ? "text-gray-400" : "text-black"
                } `}
                onClick={(e) => change_active_state(e)}
              >
                Audio sermon
              </li>
            </ul>
          </div>
          {/* <select name="" id="">
            <option value="Select sermon type" disabled='true' className=" text-gray-400">Select sermon type</option>
            <option value="Audio message">Audio messages</option>
            <option value="Youtube sermons">Youtube sermons</option>
          </select> */}
        </div>
        {videos.length > 0 ? (
          <div>
            <Suspense fallback="Loading">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1rem] md:px-3 lg:px-0 lg:gap-[5rem]">
                {changeState ? (
                  <>
                    {videos.map((list) => {
                      const { videoUrl, title, category } = list;
                      return (
                        <>
                          <div className="relative w-full">
                            <iframe
                              height="215"
                              src={videoUrl}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className="rounded-sm md:rounded-lg lg:rounded-sm w-[100%] lg:w-[120%]"
                              onLoad={handleIframeLoad}
                            ></iframe>
                            {!iframeLoaded && (
                              <div role="status">
                                <svg
                                  aria-hidden="true"
                                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 absolute top-[6rem] left-[11rem] lg:top-[6rem] lg:left-[10rem]"
                                  viewBox="0 0 100 101"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                  />
                                </svg>
                                <span className="sr-only">Loading...</span>
                              </div>
                            )}
                            <div
                              className="text-black text-sm lg:text-md mt-[0.1rem] font-[''Arial] font-semibold
                             lg:mt-0 py-2 lg:py-5 px-3 lg:px-5 bg-[#FFF] lg:bg-transparent shadow-xl w-[120%]"
                            >
                              <div>
                                <span>&#9758; </span>
                                <a
                                  href={videoUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="hover:underline"
                                >
                                  {title ? title : "Title goes here"}
                                </a>
                              </div>
                              <div>
                                <span>&#9758; &nbsp;</span>
                                <span className="">{category}</span>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {audios.map((details, index) => {
                      const { audioUrl, category, channel, id, title } =
                      details;
                      console.log(audioUrl, category, channel, id, title,"details")
                      return (
                        <Telegram_Audio_Integration
                          key={index}
                          audioUrl={audioUrl}
                          category={category}
                          channel={channel}
                          id={id}
                          title={title}
                        />
                      );
                    })}
                  </>
                )}
              </div>
            </Suspense>
          </div>
        ) : (
          <div className="flex justify-center items-center h-[50vh]">
            <h1 className="bg-black text-white p-20">
              No sermon available yet here. Please check back later or try our
              audios messages
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default SermonList;
