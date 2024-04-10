import giveabeg from "../../assets/pictures/giveabeg.jpg";

const Intro = () => {
  return (
    <>
      <div className='bg-[url("/src\assets\shiny.jpg")] h-[90%] bg-cover text-center pt-[15rem] relative
       md:pt-[12rem] lg:py-[10rem] text-white text-[1.5rem] px-8 font-semibold lg:text-[2rem] lg:font-bold'
       style={{backgroundImage: `url(${giveabeg})`}}
       >
        <div className="bg-[rgba(10,6,62,0.7)] absolute top-0 left-0 w-screen h-full"></div>
        <h1 className="text-[2rem] font-bold mt-10 md:text-[4rem] md:text-center  md:pb-12 lg:mt-0 relative">
          Give
        </h1>
        <p className=" relative">
          Baba give joor,  na jesus money 😂😂.!
        </p>
      </div>
    </>
  );
};

export default Intro;
