import ArrowRight from "../../../assets/pictures/ArrowRight.png";

const ReadMoreButton = () => {
  return (
    <div className="lg:w-[10vw] hover:cursor-not-allowed">
      <div 
        className="flex justify-center items-center gap-5
         bg-[#854c23] w-[100%] p-2 rounded-md hover:cursor-not-allowed
         lg:text-[1rem] md:text-[1.5rem] font-semibold
         ">
        <button className="hover:cursor-not-allowed">Read More</button>
        <img src={ArrowRight} alt="" className="lg:w-[1%] hover:cursor-not-allowed" />
      </div>
    </div>
  );
};

export default ReadMoreButton;
