import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const GalleryList = () => {
  const [ImagePath, setImagePath] = useState();
  const [ShowImageInFullscreen, setShowImageInFullscreen] = useState(false);
  const [gallerList, setGalleryList] = useState([]);

  const displayImageInfullScreenHandler = (imagePath, showImage) => {
    setImagePath(imagePath);
    setShowImageInFullscreen(showImage);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   "https://kingshillcity-01.onrender.com/api/v1/gallery"
        // );
        // setGalleryList(response.data.getGallery);
        setGalleryList([]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="relative">
        <div className="w-full h-[60vh] relative">
          <div className="w-full h-full absolute top-0 left-0 bg-[#000b22ee]"></div>
          <h1
            className="text-white relative flex justify-center
              items-center h-[60vh] lg:text-[3rem] font-black font-['Lobster']
               tracking-widest"
          >
            Gallery
          </h1>
        </div>
        {gallerList.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 py-10 md:py-10 md:px-10">
            {ShowImageInFullscreen ? (
              <ShowImageInFullScreen
                imagePath={ImagePath}
                exitFullScreen={displayImageInfullScreenHandler}
              />
            ) : null}
            {gallerList.map((list) => {
              const { image, _id } = list;

              return (
                <div key={_id}>
                  <div className="group relative">
                    <LazyLoadImage
                      src={image}
                      alt="Image Alt"
                      className="rounded-lg w-[100%] md:w-[51vw] h-[40vh]"
                    />
                    <div
                      className="absolute top-0 left-0 text-white z-10 py-[7rem]
                      px-[7rem] md:py-[10rem] md:px-[6rem] lg:py-[5rem] lg:px-[8rem] hidden group-hover:block"
                    >
                      <FontAwesomeIcon
                        icon={faMagnifyingGlassPlus}
                        className="text-[1.2rem] flex justify-center  ml-[12vw] md:ml-[3rem] lg:ml-[4rem] p-2 bg-[#90150D] hover:cursor-pointer"
                        onClick={() =>
                          displayImageInfullScreenHandler(image, true)
                        }
                      />
                    </div>
                    <div
                      className="w-full h-full absolute top-0 left-0 bg-[#0c0929] 
                     hidden group-hover:block group-hover:rounded-lg opacity-90"
                    >
                      {/* <div>
                            <img src="" alt="" />
                        </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center h-[50vh]">
            <h1 className="bg-[#000b22ee] text-white p-20">No Photo available yet. Please check back later</h1>
          </div>
        )}
      </div>
    </>
  );
};

const ShowImageInFullScreen = ({ imagePath, exitFullScreen }) => {
  return (
    <>
      <div className="fixed w-full h-screen top-0 left-0  z-50">
        <FontAwesomeIcon
          icon={faXmark}
          className="text-[2.5rem] absolute right-0 p-10 z-50 
          cursor-pointer text-gray-300 hover:text-white"
          onClick={() => exitFullScreen(false)}
        />
        <div className="flex justify-center items-center h-screen">
          <img
            src={imagePath}
            alt=""
            className=" z-50 relative w-[90%] md:w-[50vw]
            lg:h-[80vh]"
          />
        </div>
        <div className="absolute w-full h-screen top-0 left-0 bg-blue-950 opacity-60 "></div>
      </div>
    </>
  );
};

ShowImageInFullScreen.propTypes = {
  exitFullScreen: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default GalleryList;
// https://demo.zozothemes.com/zozothemes-preview/#zegen
