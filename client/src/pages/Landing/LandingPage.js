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
      <div className="bg-[url(https://file.rendit.io/n/2s9oGSOzkVnPaqGsNxh2.svg)] bg-cover h-full bg-center">
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
