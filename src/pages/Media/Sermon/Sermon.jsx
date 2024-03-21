import SermonList from "./SermonList";
// import sermonlink from "../../../datas/media/sermonLink";

const Sermon = () => {
  return (
    <>
      <div
        className="bg-[#D9D9D9] relative py-[20vh] lg:p-[10rem] bg-cover bg-no-repeat"
        // style={{ backgroundImage: `url(${clmLogo})` }}
      >
        <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 w-screen h-screen"></div>
        <LiveStream />
        <SermonList />
      </div>
    </>
  );
};

const LiveStream = () => {
  return (
    <>
      <div
        className="lg:flex lg:justify-center lg:gap-[4rem] lg:items-center
         lg:py-[3rem] ml-[10vw] lg:ml-[9vw] w-[80%] bg-[#0A063E] rounded-md
          shadow-sm shadow-white py-5 text-white relative"
      >
        <div className="font-['Arial'] font-black text-2xl text-center lg:text-left">
          Join us through livestream <br />{" "}
          <span className="lg:text-lg font-bold">Sundays at 10:30am</span>
        </div>
        <button
          className="bg-white rounded-md w-[50%] md:w-[30%] md:h-[4rem] h-[3rem]  lg:w-[20%] lg:h-[3rem]
           hover:bg-amber-100 lg:text-xl font-bold shadow-md transition-all duration-150
           ml-[5rem] md:ml-[15rem] lg:ml-0 my-5 lg:my-0 opacity-20 text-black"
        >
          Watch Live
        </button>
      </div>
    </>
  );
};

export default Sermon;
