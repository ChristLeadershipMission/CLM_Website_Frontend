import ClmOneFamily from "../ClmOneFamily/ClmOneFamily";
import Intro from "../Intro/Intro";
import NavBar from "../NavBar/NavBar";
import Messages from "../previous Message/Messages";
import UpcomingEvents from "../upcomingEvents/UpcomingEvents.jsx";
import Footer from "../Footer/Footer";
import "./Index.css";
// import { useEffect, useState } from "react";
import ClmPrayer from "../ClmOneFamily/ClmPrayer";

const HomePage = () => {

  // const [scrollHeight, setScrollHeight] = useState();
  // const height = window.pageYOffset;

  // const handleScroll = () => {
  //   console.log(window.pageYOffset - height);
  //   setScrollHeight(window)
  //   // console.log(scrollHeight);
  // };

  // // Attach the scroll event to the window
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollHeight,handleScroll]);

  return (
      <div>
        <NavBar />
        <Intro />
        <ClmOneFamily />
        <ClmPrayer />
        <UpcomingEvents />
        <Messages />
        <Footer />
      </div>
  );
};

export default HomePage;
