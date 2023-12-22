import LandingPage from "./LandingPage";
import Choice from "./Choice";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from "./UserForm";
import SuccessUser from "./SuccessUser";
import LawyerForm from "./LawyerForm";
import LawyerForm1 from "./LawyerForm1";
import SuccessLawyer from "./SuccessLawyer";
import Requests from "./Requests";
import Appointement from "./Appointment";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={LandingPage}></Route>
        <Route path='/Choice' Component={Choice}></Route>
        <Route path='/UserRegistration' Component={UserForm}></Route>
        <Route path='/UserRegistration/validation' Component={SuccessUser}></Route>
        <Route path='/LawyerRegistrationStep1' Component={LawyerForm}></Route> 
        <Route path='/LawyerRegistrationStep2' Component={LawyerForm1}></Route> 
        <Route path='/LawyerRegistrationStep2/validation' Component={SuccessLawyer}></Route>
        <Route path='/Requests' Component={Requests}></Route>
        <Route path='/Appointment' Component={Appointement}></Route>
           </Routes>
    </Router>
  );
}

export default App;
