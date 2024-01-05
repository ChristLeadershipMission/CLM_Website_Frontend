import SundayService from "./Images/SundayService.svg";
import location from "./Images/location.svg";
import contact from "./Images/contact.svg";
import whatsapp from "./Images/whatsapp.svg";
import facebook from "./Images/facebook.svg";
import telegram from "./Images/telegram.svg";
import twitter from "./Images/twitter.svg";

const Footer = () => {
  const date = new Date().getFullYear();
  console.log(date, "date");
  return (
    <>
      <div
        className="bg-[#0C0B1A]  text-white py-[4vh] px-[4vw]
      z-[800] relative
      "
      >
        <div className="lg:flex">
          <div className="pb-[4vh] lg:w-[33%]">
            <div className="flex justify-center items-center">
              <img
                src={SundayService}
                alt=""
                className=" lg:w-[10%] md:w-[10%] w-[10%]"
              />
            </div>
            <div className="text-center">
              <h1 className="font-black text-[1.2rem] md:text-[1.5rem]">
                Sunday Service
              </h1>
              <p className="text-sm md:text-[1.2rem] lg:text-[1rem]">
                9:00am - 12:00pm
              </p>
            </div>
          </div>
          <div className="pb-[4vh] lg:w-[33%]">
            <div className="flex justify-center items-center">
              <img
                src={location}
                alt=""
                className=" lg:w-[10%] md:w-[10%] w-[10%]"
              />
            </div>
            <div className="text-center">
              <h1 className="font-black text-[1.2rem] md:text-[1.5rem]">
                Join us
              </h1>
              <p className="text-sm md:text-[1.2rem] lg:text-[1rem] px-[1rem] lg:px-0 leading-[1.5rem]">
                Tabernacle of Mercy, opposite Baale Erube Compound, off Total
                filling station Wasinmi-Ewekoro, Ogun State.
              </p>
            </div>
          </div>
          <div className="text-center pb-[4vh] lg:w-[33%]">
            <div className="flex justify-center items-center">
              <img
                src={contact}
                alt=""
                className=" lg:w-[10%] md:w-[10%] w-[10%]"
              />
            </div>
            <div className="text-center">
              <h1 className="font-black text-[1.2rem] md:text-[1.5rem]">
                Contact us
              </h1>
              <p className="text-sm md:text-[1.2rem] lg:text-[1rem]">
                +2348062593784, +2347066633509
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center md:text-[1.2rem] lg:text-[.8rem]">
            Want to get update from us? Please, subscribe.
          </h1>
          <div className="flex justify-center items-center my-2">
            <input
              type="text"
              placeholder="email@example.com"
              className="lg:h-[2rem] placeholder:text-gray-400 px-5 bg-white
              text-black outline-none rounded-l-md md:h-[3rem] h-[2.5rem]
              "
            />
            <button className="bg-[rgba(246,109,1)] lg:h-[2rem] px-6 rounded-r-md md:h-[3rem] h-[2.5rem]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 my-5">
          <img src={whatsapp} alt="" className="lg:w-[3%] w-[10%] md:w-[8%]" />
          <img src={facebook} alt="" className="lg:w-[3%] w-[10%] md:w-[8%]" />
          <img src={telegram} alt="" className="lg:w-[3%] w-[10%] md:w-[8%]" />
          <img src={twitter} alt="" className="lg:w-[3%] w-[10%] md:w-[8%]" />
        </div>
        <div className="text-center">
          <p>Copyright  {date} | Powered by CLM Tech Team</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
