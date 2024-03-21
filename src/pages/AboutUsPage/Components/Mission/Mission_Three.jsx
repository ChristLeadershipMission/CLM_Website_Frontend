import Leadership from "../../../../assets/pictures/Leadership.png";
import ReadMoreButton from "../../Utils/ReadMoreButton";

const Mission_Three = () => {
  return (
    <div className="mb-[10vh] relative ">
      <div className=" lg:flex w-[100%] lg:mx-[2rem]">
        <img src={Leadership} alt="" className=" lg:w-[40%] lg:h-[70vh]" />
        <div className="bg-[rgba(12,11,26,1)] lg:h-[70vh] md:h-[30vh] h-[35vh]
        ">
          <h3
            className="lg:text-[1.5rem] text-center lg:px-[10vw]
            text-white lg:pt-[20vh] pt-[2vh] px-[2rem] md:text-[1.5rem]
           "
          >
            Leadership Development Summit holds to develop aspiring and
            prospective leaders with integrity and fear of God for the home, the
            church, industries and societies at large. On Leadership, we believe
            in character, competence and capacity
          </h3>
          <div className="text-center flex justify-center w-full absolute md:bottom-[5vh]
            lg:relative lg:bottom-[-5vh] bottom-[7vh]">
            <ReadMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission_Three;
