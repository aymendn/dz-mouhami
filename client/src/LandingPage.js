import Footer from "./Footer";
import Navbar from "./Navbar";

import "./style/fonts.css";
import Card from "./Card";
import Services from "./Services";
import TopRated from "./TopRated";
import GetStared from "./GetStarted";
import Main from "./Main";
const LandingPage = () => {
    return ( <div>
      <Navbar></Navbar>
      <Main></Main>
      <Services></Services>
      <TopRated></TopRated>
      <GetStared></GetStared>
      <Footer></Footer>
    </div> );
}
 
export default LandingPage;