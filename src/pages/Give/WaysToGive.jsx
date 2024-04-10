import whiteBg from "../../assets/pictures/whiteBg.jpg";
import copied_icon from "../../assets/pictures/copied-icon.svg";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

const WaysToGive = () => {

  const copy_text = (text)=>{
    copy(text);
    toast('Text copied successfully');
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
            <h1 className="text-left pb-5 md:pb-10 text-xl md:text-2xl lg:text-[2rem] font-semibold ml-7">
              Bank Transfer
            </h1>
            <p className="text-left mx-8 md:text-md lg:text-xl lg:w-[40rem]">
              Before sending, ensure that: <br />
              <div className="text-left">
                <p className="flex gap-5">
                  i. The bank name is: <b>Christ Leadership Fellowship</b>
                  <img src={copied_icon} className="w-[2%] hover:cursor-pointer" onClick={()=>copy_text("Christ Leadership Fellowship")} />
                </p>
                <p className="flex gap-5">
                  ii. The account number is: <b>1218546191</b>
                  <img src={copied_icon} className="w-[2%] hover:cursor-pointer" onClick={()=>copy_text(1218546191)} />
                </p>
                <p className="flex gap-5">
                  iii. And bank is: Zenith Bank.
                  <img src={copied_icon} className="w-[2%] hover:cursor-pointer" onClick={()=>copy_text("Zenith")} />
                </p>
              </div>
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
