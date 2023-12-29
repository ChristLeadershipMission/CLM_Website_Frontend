import ClmOneFamily from "../ClmOneFamily/ClmOneFamily";
import Intro from "../Intro/Intro";
import NavBar from "../NavBar/NavBar";
import Messages from "../previous Message/Messages";
import UpcomingEvents from "../upcomingEvents/UpcomingEvents.jsx";
import Footer from "../Footer/Footer";
import FaceOfClm from "../faceOfClm/FaceOfClm.jsx";
import "./Index.css";
// import { useEffect, useState } from "react";
import ClmPrayer from "../ClmOneFamily/ClmPrayer";

const HomePage = () => {

  return (
      <div>
        <NavBar />
        <Intro />
        <ClmOneFamily />
        <ClmPrayer />
        <UpcomingEvents />
        <FaceOfClm 
          name={"Moyinoluwa Michael"}
           campus={"UNILAG"} maritalStatus={"Engaged"} occupation={"Software Engineer"} favoriteVerse={"Genesis 1:3"}/>
        {/* <Messages /> */}
        <Footer />
      </div>
  );
};

export default HomePage;
