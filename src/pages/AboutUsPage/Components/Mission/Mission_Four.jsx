import ReadMoreButton from "../../Utils/ReadMoreButton";
import Students from "../../../../assets/pictures/Students.png";

const Mission_Four = () => {
  return (
    <div
    className="text-center relative lg:mb-[20vh] bg-black bg-fixed lg:h-[70vh] md:h-[40vh] h-[50vh]"
      style={{ backgroundImage: `url(${Students})` }}
    >
      <div className="bg-[rgba(0,0,0,0.7)] absolute top-0 h-full w-full"></div>
      <h3
       className="lg:text-[1.5rem] text-center lg:px-[20vw] md:text-[1.5rem]
       text-white relative flex h-full justify-center items-center px-[5vw]"
      >
        Annual Global Students & Youths conference holds to affect more lives,
        homes, community, churches positively for the expansion of the kingdom
        of God on earth and for the purpose of proclamation of the gospel to the
        unreached places.
      </h3>
      <div className="text-center flex justify-center absolute w-full bottom-[8vh]">
        <ReadMoreButton />
      </div>
    </div>
  );
};

export default Mission_Four;
