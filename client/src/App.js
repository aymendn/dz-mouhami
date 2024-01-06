import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/fonts.css";
import LandingPage from "./pages/Landing/LandingPage";
import UserFormPage from "./pages/UserForm/UserFormPage";
import SuccessUserPage from "./pages/SuccessUser/SuccessUserPage";
import LawyerForm1Page from "./pages/LawyerForm1/LawyerForm1Page";
import LawyerForm2Page from "./pages/LawyerForm2/LawyerForm2Page";
import SuccessLawyerPage from "./pages/SuccessLawyer/SuccessLawyerPage";
import RequestsPage from "./pages/Requests/RequestsPage";
import AppointementPage from "./pages/Appointment/AppointmentPage";
import EditProfilePage from "./pages/EditProfile/EditProfilePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import SearchPage from "./pages/Search/SearchPage";
import ChoicePage from "./pages/Choice/ChoicePage";
import LawyerPage from "./pages/Lawyer/LawyerPage";
import ContactPage from "./pages/Contact/ContactPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage}></Route>
        <Route path="/choice" Component={ChoicePage}></Route>
        <Route path="/userRegistration" Component={UserFormPage}></Route>
        <Route
          path="/userRegistration/validation"
          Component={SuccessUserPage}
        ></Route>
        <Route
          path="/lawyerRegistrationStep1"
          Component={LawyerForm1Page}
        ></Route>
        <Route
          path="/lawyerRegistrationStep2"
          Component={LawyerForm2Page}
        ></Route>
        <Route
          path="/lawyerRegistrationStep2/validation"
          Component={SuccessLawyerPage}
        ></Route>
        <Route path="/dashboard" Component={DashboardPage}></Route>
        <Route path="/requests" Component={RequestsPage}></Route>
        <Route path="/appointments" Component={AppointementPage}></Route>
        <Route path="/edit" Component={EditProfilePage}></Route>
        <Route path="/search" Component={SearchPage}></Route>
        <Route path="/lawyer" Component={LawyerPage}></Route>
        <Route path="/contact" Component={ContactPage}></Route>
      </Routes>
    </Router>
  );
}

export default App;
