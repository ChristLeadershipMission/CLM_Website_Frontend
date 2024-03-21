import cross from "../../../../assets/pictures/cross.png";
import ReadMoreButton from "../../Utils/ReadMoreButton";

const Mision_Five = () => {
  return (
    <div>
      <h1 className=" text-center font-extrabold font-['Arial'] text-[1.5rem]
       lg:text-[3rem] md:text-[2rem] lg:mb-[3.5rem] md:mb-[2rem] mb-[1.5rem]">
        Discipleship
      </h1>
      <div className="text-center relative lg:mb-[20vh] lg:h-[70vh]  lg:flex mb-[3rem]">
        <div className="flex justify-center items-center">
          <img
            src={cross}
            alt=""
            className="lg:w-[90%] lg:h-[80vh] lg:rounded-3xl rounded-md"
          />
        </div>
        <div
          className="relative lg:w-[40%] bg-blue-950 lg:rounded-3xl 
       lg:mr-[1rem] rounded-md md:h-[40vh] lg:h-[85vh] h-[50vh]"
        >
          <h3
            className="lg:text-[1.5rem] text-center lg:px-[2vw] md:text-[1.5rem]
        text-white relative flex h-full justify-center items-center px-[5vw]"
          >
            Discipleship is following Jesus under the hand of a man that is
            ahead of one in Christ. CLM has her core mandate in discipleship, as
            we believe that anyone following Jesus must also have a disciple
            maker that he or she is accountable to in Christ.
          </h3>
          <div className="text-center flex justify-center absolute w-full bottom-[8vh]">
            <ReadMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mision_Five;
