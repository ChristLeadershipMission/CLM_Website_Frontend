import data from "./data";
import avatar from "./Images/avatar.png";
import shape from "./Images/shape.svg";

const MinisterComponent = ({ hideSideBar }) => {
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
            const { id, Name, role } = data;
            return (
              <div
                key={id}
                className="lg:w-[100%] md:w-[90%] w-[85vw] relative py-5 md:py-5 lg:py-5
                ring-1 ring-[#F76D0A] rounded-md lg:h-[60vh] md:h-[32vh] md:my-3 lg:my-0
                h-[53vh] my-3"
              >
                <div className="flex justify-center">
                  <img src={avatar} alt="avatar" />
                </div>
                <h1 className="text-center py-5 font-bold">{Name}</h1>
                <p className="text-center font-semibold lg:px-5 py-3">{role}</p>
                <div
                  className="shadow-md flex justify-center lg:gap-5
                lg:py-3 py-3 gap-3 bg-[#F76D0A] lg:mx-10 rounded-md
                absolute bottom-5 lg:px-5 md:px-5 items-center md:ml-[11vw]
                lg:ml-0 px-5 ml-[24vw]"
                >
                  <span className="font-medium cursor-pointer">More info</span>
                  <img src={shape} alt="shape" className="cursor-pointer" />
                </div>
                
                {/* <div className="bg-[#0A063E] lg:px-5 md:px-10">
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
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MinisterComponent;
