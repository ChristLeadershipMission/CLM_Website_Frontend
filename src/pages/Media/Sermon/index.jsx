import Sermon from "./Sermon";
import NavBar from "../../Homepage/components/NavBar/NavBar";
import Footer from "../../Homepage/components/Footer/Footer";


const SermonPage = () => {
  return (
    <>
    <div>
      <NavBar/>
      <Sermon />
      <hr className="hidden lg:block lg:mx-7 ring-1"/>
      <Footer />
    </div>
    </>
  )
}

export default SermonPage;