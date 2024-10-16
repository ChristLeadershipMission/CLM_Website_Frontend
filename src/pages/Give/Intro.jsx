import giveabeg from "../../assets/pictures/giveabeg.jpg";

const Intro = () => {
  return (
    <>
      <div
        className='bg-[url("/src\assets\shiny.jpg")] h-[90%] bg-cover text-center py-[5rem] relative
       md:pt-[12rem] lg:py-[10rem] text-white text-[1.5rem] px-8 font-semibold lg:text-[2rem] lg:font-bold'
        style={{ backgroundImage: `url(${giveabeg})` }}
      >
        <div className="bg-[rgba(10,6,62,0.7)] absolute top-0 left-0 w-screen h-full"></div>
        <h1 className="text-[2rem] font-bold mt-[-1rem] md:text-[4rem] md:text-center  md:pb-12 lg:mt-0 relative">
          Give
        </h1>
        <p className=" relative text-center">
          Each of you should give what you have decided in your heart to give,
          not reluctantly or under compulsion, for God loves a cheerful giver <br />
          2 Corinthians 9:7 (NIV)

        </p>
      </div>
    </>
  );
};

export default Intro;
