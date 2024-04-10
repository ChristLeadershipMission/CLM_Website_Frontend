import playButtonWhite_black from "../../../assets/pictures/playButtonWhite_black.svg";



const Audio_Integration = ({ audioUrl, category, channel, id, title }) => {
  console.log(audioUrl, title)
  return (
    <div className="bg-[rgba(10,6,62,0.85)] lg:w-[50vw] p-[2rem] rounded-md mx-2">
      <div>
        <h1 className="text-white font-bold">CLM messages (March 24)</h1>
        <div className="flex gap-[1rem]">
          <div className="bg-[rgba(10,6,62,1)] w-[10%] h-[10vh] flex 
          justify-center items-center rounded-full hover:cursor-pointer
         hover:scale-[1.05] transition ease-in-out delay-150"
          onClick={()=> window.open(`${audioUrl}`)}
          >
            <img src={playButtonWhite_black} alt="" className="w-[50%]" />
          </div>
          <div className="pt-2">
            <h1 className="text-white font-bold hover:cursor-pointer hover:opacity-[.5]
            transition ease-in-out delay-150"
            onClick={()=> window.open(`${audioUrl}`)}
            >
               {title}
            </h1>
            <p className=" text-gray-400">1:28:39, 35.9 MB</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Audio_Integration;
