import messages from "./data";

const Messages = () => {
  return (
    <>
      <div
        className="ring ring-[#F66D0A] lg:mx-[4vw] mb-[5vw] 
        py-[4vw] rounded-xl mx-[9vw] px-[4vw]"
      >
        <h1 className="text-center text-xl lg:text-[1.6rem] pb-[4vh] font-black text-[#F66D0A]">Check out some Excerpts from our previous Messages</h1>
        <div
          className="grid lg:grid-cols-4 gap-[4vw] lg:px-[5vw] md:grid-cols-2
             grid-cols-1 
            "
        >
          {messages.map((data) => {
            const { id, img } = data;

            return (
              <div key={id} className="shadow-xl">
                <div className="flex justify-center">
                  <img src={img} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Messages;
