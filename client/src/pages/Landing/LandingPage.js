import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../style/fonts.css";
import Services from "./Services";
import TopRated from "./TopRated";
import GetStared from "./GetStarted";
import Main from "./Main";
import BgImage from "../../assets/bg.svg";
const LandingPage = () => {
  return (
    <div>
      <div
        className="bg-cover h-full bg-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <Navbar></Navbar>
        <Main></Main>
      </div>
      <Services></Services>
      <TopRated></TopRated>
      <GetStared></GetStared>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
