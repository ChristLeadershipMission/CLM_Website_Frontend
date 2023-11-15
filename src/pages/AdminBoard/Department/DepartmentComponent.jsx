import choir from "./Images/choir.png";
import drama from "./Images/drama.png";
import media from "./Images/media.png";
import organizing from "./Images/organizing.png";
import prayer from "./Images/prayer.png";
import protocol from "./Images/protocol.png";
import publicity from "./Images/publicity.png";
import sanitation from "./Images/sanitation.png";
import welfare from "./Images/welfare.png";
import shape from "./Images/shape.svg";
import PropTypes from 'prop-types';

const DepartmentComponent = ({hideSideBar}) => {
  const data = [
    {
      id: 1,
      department: "Choir",
      image: choir,
    },
    {
      id: 2,
      department: "Media",
      image: media,
    },
    {
      id: 3,
      department: "Drama",
      image: drama,
    },
    {
      id: 4,
      department: "Protocol",
      image: protocol,
    },
    {
      id: 5,
      department: "Sanitation",
      image: sanitation,
    },
    {
      id: 6,
      department: "Organizing",
      image: organizing,
    },
    {
      id: 7,
      department: "Prayer",
      image: prayer,
    },
    {
      id: 8,
      department: "Welfare",
      image: welfare,
    },
    {
      id: 8,
      department: "Publicity",
      image: publicity,
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
           md:text-[1.5rem] lg:pt-[2vh] md:w-[100vw] md:pr-[30vw] lg:pr-0"
          > 
            Event Management
          </h1>
          <h1
            className="lg:hidden text-[2rem] font-black pt-[2vh] pl-[20vw]
            md:pr-[3vw] lg:pr-0"
            onClick={() => hideSideBar(true)}
          >
            &#9776;
          </h1>
        </div>
        <div
          className="bg-[url('src\pages\AdminBoard\CampusManagement\Images\CLMLOGO.png')]
         grid lg:grid-cols-4 lg:py-10 lg:w-[78.8vw] md:pl-[2vw] lg:px-5 lg:gap-5 justify-center
         items-center md:grid-cols-2 md:h-[80.5vh] h-[80vh]  overflow-y-auto no-scrollbar"
        >
          {data.map((data) => {
            const { id, department, image } = data;
            return (
              <div key={id} className="w-[100%] relative py-5 md:py-5 lg:py-5">
                <div
                  className="bg-[#0A063E] lg:px-5 w-[80vw] relative
                  lg:h-[20vh] md:h-[20vh] overflow-hidden md:mx-[1.5vw]
                  md:w-[90%] lg:w-[100%] lg:mx-0 h-[20vh]"
                  // style={{
                  //   backgroundImage: `url(${image})`,
                  //   height: "auto",
                  //   backgroundSize: "contain",
                  //   backgroundRepeat: "no-repeat",
                  //   color: "white",
                  // }}
                >
                  <img
                    src={image}
                    alt=""
                    className="lg:w-[100%] lg:h-[100%]
                    lg:mt-2 absolute top-[-1vh] left-0"
                  />
                  <div className="lg:pt-5 mt-10 md:pt-10 relative">
                    <h1 className="text-[#F76D0A] lg:text-[2.5rem] text-[2rem] md:text-[3rem] text-center font-bold">{department}</h1>
                  </div>
                  <h3 className="text-white text-center lg:py-3 font-semibold">DEPARTMENT</h3>
                </div>
                <div
                  className="bg-white shadow-md flex justify-center lg:gap-5
                  lg:py-3 md:w-[90%] lg:w-[100%] md:mx-[1.5vw] lg:mx-0 md:py-3
                  md:gap-3 w-[80vw] py-3 gap-3"
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

DepartmentComponent.propTypes = {
  hideSideBar: PropTypes.bool,
}

export default DepartmentComponent;
