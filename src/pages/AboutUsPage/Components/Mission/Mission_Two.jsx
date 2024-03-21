import Marriage from "../../../../assets/pictures/Marriage.png";
import ReadMoreButton from "../../Utils/ReadMoreButton";

const Mission_Two = () => {
  return (
    <div
      className="text-center relative lg:mb-[20vh] bg-black bg-fixed lg:h-[70vh] md:h-[40vh] h-[50vh]"
      style={{ backgroundImage: `url(${Marriage})` }}
    >
        <div className="bg-[rgba(0,0,0,0.7)] absolute top-0 h-full w-full"></div>
      <h3
        className="lg:text-[1.5rem] text-center lg:px-[20vw] md:text-[1.5rem]
        text-white relative flex h-full justify-center items-center px-[5vw]"
      >
        Relationship and Marriage seminars for the singles and married holds
        periodically where seasoned ministers rooted in the word of God disect
        God’s mind to solve relational and marital issues.
      </h3>
      <div className="text-center flex justify-center absolute w-full bottom-[8vh]">
        <ReadMoreButton />
      </div>
    </div>
  );
};

export default Mission_Two;
