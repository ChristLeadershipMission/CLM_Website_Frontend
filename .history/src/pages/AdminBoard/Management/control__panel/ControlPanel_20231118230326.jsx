import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import churchActivities from "./data";
import PropTypes from "prop-types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ControlPanel = ({hideSideBar}) => {

  
  return (
    <>
      <div className="  lg:w-[82%] h-[90vh] ">
        <div className="bg-white shadow-lg lg:h-[10vh] lg:p-[.5rem] flex justify-around lg:block">
          <h1 className="lg:text-2xl md:text-center lg:text-left py-[3vh] md:py-[3vh] md:text-[1.5rem] lg:pt-[2vh]">
            Welcome to CLM Dashboard
          </h1>
          <h1 className="lg:hidden text-[2rem] font-black pt-[2vh] pl-[20vw]" onClick={()=>hideSideBar(true)}>&#9776;</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:py-[2rem] lg:pl-[8rem] ml-[15vw] md:ml-0">
        {churchActivities.map((data) => {
  const { id, description, viewMore, image } = data;
  return (
    <div
      key={id}
      className="w-[80%] md:h-[25vh] lg:h-[30vh] rounded-lg 
                  shadow-lg my-[1rem] md:ml-[5.5vw] md:mt-[6vh] lg:mt-0 
                  lg:ml-0 bg-[#F66D0A]"
    >
      <div
        className="text-center flex gap-[2vw] lg:pl-[2vw] 
                        bg-[#0A063E] md:h-[20vh] lg:h-[23vh] rounded-t-lg"
      >
        <div className="text-2xl lg:w-['auto'] overflow-hidden mt-[3vh] md:ml-[1.5rem] lg:ml-0 text-white">
          <div className="text-4xl font-bold">{100}</div>
          <b
          {description}
        </div>
        <div>
          <img
            src={image}
            alt=""
            className="w-[50%] h-[50%] mt-[4vh]"
          />
        </div>
      </div>
      <div
        className="text-center text-xl font-bold pt-[1vh] pl-[1vw]"
      >
        {viewMore}{" "}
        <span className="pl-[2vw]">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
    </div>
  );
})}
        </div>
      </div>
    </>
  );
};

ControlPanel.propTypes = {
  hideSideBar: PropTypes.bool,
}

export default ControlPanel;
