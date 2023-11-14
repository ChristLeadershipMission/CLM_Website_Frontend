import PropTypes from "prop-types";

const ShowMoreCampusInfo = ({ showMoreInfoData }) => {
  console.log(showMoreInfoData);
  const address = `${showMoreInfoData[0].address.state} ${showMoreInfoData[0].address.country}`
  return (
    <>
      <div
        className="flex justify-center items-center 
      lg:h-[80vh] fixed z-[500] bg-[rgba(7,19,48,0.7)] lg:w-[78.7vw]"
      >
        <div className="bg-white p-[10%]">
          <div>
            <span>Campus: </span> <span>{showMoreInfoData[0].name}</span>
          </div>
          <div>
            <span>Email: </span> <span>{showMoreInfoData[0].email}</span>
          </div>
          <div>
            <span>Address: </span> <span>{address}</span>
          </div>
        </div>
      </div>
    </>
  );
};

ShowMoreCampusInfo.propTypes = {
  showMoreInfoData: PropTypes.func.isRequired,
};

export default ShowMoreCampusInfo;
