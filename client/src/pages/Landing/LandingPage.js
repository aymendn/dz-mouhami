import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../style/fonts.css";
import Services from "./Services";
import TopRated from "./TopRated";
import GetStared from "./GetStarted";
import Main from "./Main";
const LandingPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
      <Services></Services>
      <TopRated></TopRated>
      <GetStared></GetStared>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
