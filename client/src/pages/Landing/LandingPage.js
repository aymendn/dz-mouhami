import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../style/fonts.css";
import Services from "./Services";
import TopRated from "./TopRated";
import GetStared from "./GetStarted";
import Main from "./Main";
import BgImage from "../../assets/bg.svg";
import { useTranslation } from "react-i18next";
import axios from "axios";
const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar></Navbar>
      <div
        className="bg-cover h-full bg-center border border-transparent border-spacing-0"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
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
