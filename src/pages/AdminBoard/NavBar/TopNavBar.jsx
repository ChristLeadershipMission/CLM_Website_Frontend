


const TopNavBar = () => {
  return (
    <>
      <div className="w-screen h-[10vh] bg-[#043E7D] flex justify-between px-[2vw] text-white">
        <div className="flex gap-[1vw]">
          <img
            src="src\assets\churchImglogo.png"
            alt=""
            className="lg:w-[5%] lg:h-[60%] lg:mt-[1.9vh] md:w-[4%] md:h-[60%] md:mt-[2vh] w-[20%] h-[60%] mt-[2vh]"
          />
          <h3
            className=' lg:text-[2vw] font-bold font-["Lobster"] 
            tracking-widest lg:w-[20vw] lg:mt-[1.2vh] md:mt-[2.5vh] 
            md:tracking-widest hidden md:block'>
            CLM
          </h3>
        </div>
        <div className="max-[1024px]:mr-[15vw] max-[1280px]:mr-[15vw]">
        <h3 
          className=' lg:text-[3vh] lg:mt-[3vh] 
          font-bold font-["Arial"] lg:w-[25vw] md:mt-[3vh] 
          w-[50vw] mt-[3.2vh] text-[2.3vh] md:text-[2.5vh]'>
            Dashboard Management
          </h3>
        </div>
        <div>
          <img
            src="src\components\AdminBoard\Management\images\profileIcon.svg"
            alt=""
            className="mt-[2vh]"
          />
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
