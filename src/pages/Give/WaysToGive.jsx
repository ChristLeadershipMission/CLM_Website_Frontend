import whiteBg from "../../assets/pictures/whiteBg.jpg";
import copied_icon from "../../assets/pictures/copied-icon.svg";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

const WaysToGive = () => {
  const copy_text = (text) => {
    copy(text);
    toast("Text copied successfully");
  };

  return (
    <>
      <div className="relative" style={{ backgroundImage: `url(${whiteBg})` }}>
        <ToastContainer />
        <div className="absolute w-full h-full top-0 bg-gray-100 opacity-[0.8]"></div>
        <h1 className="text-center text-xl md:text-2xl lg:text-[2rem] font-bold pb-5 pt-10  md:pb-10 relative">
          Ways to Give
        </h1>
        {/* payment methods */}
        <div className="lg:flex justify-around">
          {/* payment through Zelle */}
          <div className="py-10 relative">
            <h1 className="pb-5 md:pb-10 text-xl md:text-2xl lg:text-[2rem] 
            font-semibold ml-7 text-center text-bold">
              Bank Transfer
            </h1>
            <div>
              <div>
                <div>
                  <h3 className="text-center font-bold text-[1.2rem]">
                    Account name
                  </h3>
                  <h1 className=" text-center text-blue-950 font-medium flex justify-center items-center gap-5">
                    Christ Leadership Fellowship
                    <img
                      src={copied_icon}
                      className="w-[4%] hover:cursor-pointer"
                      onClick={() => copy_text("Christ Leadership Fellowship")}
                    />
                  </h1>
                </div>
                <div>
                  <h3 className="text-center font-bold text-[1.2rem]">
                    Account number
                  </h3>
                  <h1 className=" text-center text-blue-950 font-medium flex justify-center items-center gap-5">
                    1218546191
                    <img
                      src={copied_icon}
                      className="w-[4%] hover:cursor-pointer"
                      onClick={() => copy_text("Christ Leadership Fellowship")}
                    />
                  </h1>
                </div>
                <div>
                  <h3 className="text-center font-bold text-[1.2rem]">
                    Bank name
                  </h3>
                  <h1 className=" text-center text-blue-950 font-medium flex justify-center items-center gap-5">
                    Zenith Bank
                    <img
                      src={copied_icon}
                      className="w-[4%] hover:cursor-pointer"
                      onClick={() => copy_text("Christ Leadership Fellowship")}
                    />
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* payment through Zelle */}

          {/* payment through Check */}
          <div className="py-5 relative">
            <h1 className="text-center pb-5 md:pb-10 text-xl md:text-2xl lg:text-[2rem] font-semibold">
              cheque
            </h1>
            <p className="text-center mx-8 md:text-md lg:text-xl text-text-md md:text-lg lg:2xl pb-10">
              Write to “Christ Leadership Fellowship”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaysToGive;
