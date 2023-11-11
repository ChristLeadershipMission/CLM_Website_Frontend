import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#0C0B1A]  text-white py-[4vh] px-[4vw]">
        <div className="grid lg:grid-cols-3">
          <div className="text-center pb-[4vh]">
            <h1 className="font-black">Sunday Service</h1>
            <p className="text-sm">9:00am - 12:00pm</p>
          </div>
          <div className="text-center pb-[4vh]">
            <h1 className="font-black">
            Join us
            </h1>
            <p className="text-sm">
              Tabernacle of Mercy, opposite Baale Erube Compound, off Total
              filling station Wasinmi-Ewekoro, Ogun State.
            </p>
          </div>
          <div className="text-center pb-[4vh]">
            <h1 className="font-black">Contact us</h1>
            <p className="text-sm">+2348062593784, +2347066633509</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
