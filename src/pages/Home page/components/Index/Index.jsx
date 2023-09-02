import ClmOneFamily from "../ClmOneFamily/ClmOneFamily";
import Intro from "../Intro/Intro";
import NavBar from "../NavBar/NavBar";
import Messages from "../previous Message/Messages";
import UpcomingEvents from "../upcomingEvents/UpcomingEvents";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
        <NavBar />
        <Intro />
        <ClmOneFamily />
        <UpcomingEvents />
        <Messages />
        <Footer />
    </>
  )
}

export default HomePage;