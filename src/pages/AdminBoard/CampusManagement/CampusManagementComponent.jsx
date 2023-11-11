import laspotech from "./Images/laspotech-2 1.png";
import lasu from "./Images/lasu 1.png";
import Light from "./Images/Light.png";
import MAPOLY from "./Images/Moshood-Abiola-Polytechnic-MAPOLY 1.png";
import oau from "./Images/oau.png";
import OAUSTECH from "./Images/OAUSTECH 1.png";
import oou from "./Images/oou.png";
import Recite from "./Images/Recite.png";
import TASUED from "./Images/TASUED-LOGO1 1.png";
import UniLagos from "./Images/UniLagos 1.png";
import shape from "./Images/shape.svg";

const CampusManagementComponent = ({ hideSideBar }) => {
  const data = [
    {
      id: 1,
      school: "OWUTECH Campus",
      image: Light,
    },
    {
      id: 2,
      school: "TASUED Campus",
      image: TASUED,
    },
    {
      id: 3,
      school: "OAUSTECH Campus",
      image: OAUSTECH,
    },
    {
      id: 4,
      school: "MAPOLY Campus",
      image: MAPOLY,
    },
    {
      id: 5,
      school: "OAU Campus",
      image: oau,
    },
    {
      id: 6,
      school: "OOU Campus",
      image: oou,
    },
    {
      id: 7,
      school: "LASU Campus",
      image: lasu,
    },
    {
      id: 8,
      school: "LASPOTECH Campus",
      image: laspotech,
    },
    {
      id: 9,
      school: "UNILAG Campus",
      image: UniLagos,
    },
    {
      id: 10,
      school: "UNI-IBADAN Campus",
      image: Recite,
    },
  ];

  return (
    <>
      <div className="lg:h-[90vh] overflow-y-auto">
        <div
          className="bg-white shadow-lg lg:h-[10vh] lg:p-[.5rem]
          flex justify-around lg:block lg:w-[78.8vw] overflow-hidden
          w-[100vw]
          "
        >
          <h1
            className="lg:text-2xl md:text-center lg:text-left py-[3vh] md:py-[3vh] 
           md:text-[1.5rem] lg:pt-[2vh] md:w-[100vw]"
          >
            Event Management
          </h1>
          <h1
            className="lg:hidden text-[2rem] font-black pt-[2vh] pl-[20vw]"
            onClick={() => hideSideBar(true)}
          >
            &#9776;
          </h1>
        </div>
        <div
          className="bg-[url('src\pages\AdminBoard\CampusManagement\Images\CLMLOGO.png')]
          grid lg:grid-cols-4 lg:py-10 lg:w-[78.8vw] md:pl-[5vw] lg:px-5 lg:gap-5 justify-center
          items-center md:grid-cols-2 md:h-[80.5vh] h-[80vh]  overflow-y-auto no-scrollbar
          md:gap-0"
        >
          {data.map((data) => {
            const { id, school, image } = data;
            return (
              <div
                key={id}
                className="lg:w-[100%] md:w-[90%] w-[85vw] relative py-5 md:py-5 lg:py-5"
              >
                <div className="bg-[#0A063E] lg:px-5 md:px-10">
                  <div className="flex gap-5 lg:pt-7 md:pt-10 py-10 md:py-0">
                    <h1 className="text-white lg:text-[4rem] 
                    md:text-[4rem] font-bold text-[4rem] px-5 pt-5 md:px-0
                    md:pt-0">
                      CLF
                    </h1>
                    <img
                      src={image}
                      alt=""
                      className="lg:w-[5vw] lg:h-[10vh] md:w-[15vw]
                      lg:mt-2 md:mt-0 mt-4"
                    />
                  </div>
                  <h3 
                   className="text-white text-center md:text-[1.5rem] lg:text-[1rem]
                    md:py-3 lg:py-3 font-semibold text-[1.5rem] py-3">
                    {school}
                  </h3>
                </div>
                <div
                  className="bg-white shadow-md flex justify-center lg:gap-5
                lg:py-3 py-3 gap-3"
                >
                  <span className="font-bold cursor-pointer">More info</span>
                  <img src={shape} alt="shape" className="cursor-pointer" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CampusManagementComponent;
