// import clmlogo from "./Images/clmlogo.png";

const TopNavBar = () => {
  return (
    <>
      <div 
       className="w-screen lg:h-[10vh] bg-[#0A063E] flex 
       justify-center lg:px-[2vw] text-white h-[5vh]">
        {/* <div className="lg:ml-[15vw] md:ml-[15vw] ml-[5vw]">
        </div> */}
        <h3 
          className=' lg:text-[3vh] lg:mt-[3vh] 
          font-bold font-["Arial"] lg:w-[25vw] text-center 
          w-[50vw] mt-[1vh] text-[2.3vh] md:text-[2.5vh]'>
            Admin Dashboard
          </h3>
      </div>
    </>
  );
};

export default TopNavBar;
