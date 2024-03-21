import MissionImage from "../../../../assets/pictures/MissionImage.png";
import ReadMoreButton from "../../Utils/ReadMoreButton";

const Mission_0ne = () => {
  return (
    <div className="mb-[5vh] relative">
      <div className=" lg:flex w-[100%] lg:mx-[2rem]">
        <img src={MissionImage} alt="" className=" lg:w-[40%] lg:h-[60vh]" />
        <div
          className="bg-[rgba(12,11,26,1)] lg:h-[60vh] md:h-[20vh] h-[24vh]
        "
        >
          <h3
            className="lg:text-[1.5rem] text-center lg:px-[10vw]
           text-white lg:pt-[20vh] pt-[2vh] px-[2rem] md:text-[1.5rem]
          "
          >
            In achieving the vision of the ministry, the Mission holds intensive
            study of God’s word so Dearly and with premium priority.
          </h3>
          <div
            className="text-center flex justify-center w-full absolute md:bottom-[4.5vh]
            lg:relative lg:bottom-[-5vh] bottom-[5vh]"
          >
            <ReadMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission_0ne;
