import LDS from "../../../../../src/assets/pictures/LDS.svg";
import GBSC from "../../../../../src/assets/pictures/GBSC.svg";

const UpcomingEvents = () => {
  return (
    <>
      <div className="pb-10">
        <h1 
        className="text-center py-[6vh] lg:text-2xl lg:py-[6vh] font-black text-xl">
          UPCOMING SPECIAL PROGRAM
        </h1>
        <div className="lg:flex gap-[2vw] lg:px-[4vw] px-[10vw]">
          <div
            className="transistion-all delay-150 hover:-translate-y-1 
          hover:scale-[1.04] ease-in-out duration-150 ring ring-[#F66D0A]
          rounded-b-2xl shadow-xl mb-[15vh] lg:mb-0 
          "
          >
            <img src={LDS} alt="" />
            <h3 className="font-black lg:text-[1.5rem] text-center lg:py-[3vh] font-['Arial']">
              Leadership Development Summit
            </h3>
            <p className="text-center pb-[3vh] lg:px-[3vw] font-bold">
              Date: 15th-17th Sept., 2023 | Kick off Time: 7:00pm on Friday |
              Venue: Tabernacle of Mercy, opposite Baale Erube compound,
              Wasinmi-Ewekoro, Ogun State.
            </p>
          </div>
          <div
            className="transistion-all delay-150 hover:-translate-y-1 
          hover:scale-[1.04] ease-in-out duration-150 ring ring-[#F66D0A]
          rounded-b-2xl"
          >
            <img src={GBSC} alt="" />
            <h3 className="font-black lg:text-[1.5rem] text-center lg:py-[3vh] font-['Arial']">
              Global Brothers/Sisters Conference
            </h3>
            <p className="text-center pb-[3vh] lg:px-[3vw] font-bold">
              Date: 17th-19th Nov., 2023 | Kick off Time: 7:00pm on Friday |
              Venue: Tabernacle of Mercy, opposite Baale Erube compound,
              Wasinmi-Ewekoro, Ogun State.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
