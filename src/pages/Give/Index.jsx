import Footer from "../Homepage/components/Footer/Footer";
import NavBar from "../Homepage/components/NavBar/NavBar";
import Intro from "./Intro";
import ThankYou from "./ThankYou";
import WaysToGive from "./WaysToGive";
import WhyGive from "./WhyGive";

const Give__to_church = () => {
  return (
    <div>
        <NavBar />
        <Intro />
        <ThankYou />
        <WaysToGive />
        <WhyGive />
        <Footer />
    </div>
  )
}

export default Give__to_church;