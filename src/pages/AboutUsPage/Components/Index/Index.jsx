import Footer from "../../../Homepage/components/Footer/Footer";
import NavBar from "../../../Homepage/components/NavBar/NavBar";
import Mission from "../Mission/Mission";
import Intro from "../Intro/Intro";
import Vision from "../Vision/Vision";

const AboutUsPage = () => {
  return (
    <div>
      <div className=" shadow-lg">
        <NavBar />
      </div>
      <Intro />
      <Vision />
      <Mission />
      <div className="lg:w-[100vw] flex justify-center">
        <div
          className="flex justify-center items-center my-[5vh]
         p-3 bg-[rgba(10,91,246,1)] lg:w-[10vw]"
        >
          <button>Next Page </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
