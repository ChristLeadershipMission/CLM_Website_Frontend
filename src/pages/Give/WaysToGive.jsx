import whiteBg from "../../assets/pictures/whiteBg.jpg";

const WaysToGive = () => {
  return (
    <>
      <div className="relative" 
      style={{backgroundImage: `url(${whiteBg})`}}
      >
        <div className="absolute w-full h-full top-0 bg-gray-100 opacity-[0.8]"></div>
        <h1 className="text-center text-xl md:text-2xl lg:text-[2rem] font-bold pb-5 pt-10  md:pb-10 relative">
          Ways to Give
        </h1>
        {/* payment methods */}
        <div className="lg:flex justify-around">
          {/* payment through Zelle */}
          <div className="py-10 relative">
            <h1 className="text-center pb-5 md:pb-10 text-xl md:text-2xl lg:text-[2rem] font-semibold">
              Zelle
            </h1>
            <p className="text-center mx-8 md:text-md lg:text-xl lg:w-[40rem]">
              Before sending, ensure that you add &quot;Kingshill City Church&quot; in the
              notes section and use our account name{" "}
              <a
                href="mailto:give@kingshillcity.org"
                className="bg-blue-500 text-white px-2"
              >
                give@kingshillcity.org
              </a>{" "}
              to transfer donations through Zelle.
            </p>
          </div>
          {/* payment through Zelle */}

          {/* payment through Check */}
          <div className="py-5 relative">
            <h1 className="text-center pb-5 md:pb-10 text-xl md:text-2xl lg:text-[2rem] font-semibold">
              Check
            </h1>
            <p className="text-center mx-8 md:text-md lg:text-xl text-text-md md:text-lg lg:2xl pb-10">
              Write to “Kingshill City Church”
            </p>
          </div>
          {/* payment through Check */}
        </div>
        {/* payment methods */}
      </div>
    </>
  );
};

export default WaysToGive;
