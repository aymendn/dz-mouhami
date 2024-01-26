import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/fonts.css";
import "./style/loading.css";
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
import AboutPage from "./pages/About/AboutPage";
import PrivacyPage from "./pages/Privacy/PrivacyPage";
import TermsPage from "./pages/Terms/TermsPage";
import UserEditProfilePage from "./pages/UserEditProfile/UserEditProfilePage";
import ScrollToTop from "./utils/ScrollToTop";
import AdminPage from "./pages/Admin/AdminPage";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import LoginHandler from "./pages/LoginHandler/LoginHandler";

function App() {
  const { t } = useTranslation();
  const languageCode = t("languageCode");

  const queryClient = new QueryClient();

  useEffect(() => {
    document.documentElement.lang = languageCode;
  }, [languageCode]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={languageCode}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" Component={LandingPage}></Route>
            <Route path="/choice" Component={ChoicePage}></Route>
            <Route path="/user-registration" Component={UserFormPage}></Route>
            <Route
              path="/user-registration/validation"
              Component={SuccessUserPage}
            ></Route>
            <Route
              path="/lawyer-registrationStep1"
              Component={LawyerForm1Page}
            ></Route>
            <Route
              path="/lawyer-registrationStep2"
              Component={LawyerForm2Page}
            ></Route>
            <Route
              path="/lawyer-registrationStep2/validation"
              Component={SuccessLawyerPage}
            ></Route>
            <Route path="/dashboard" Component={DashboardPage}></Route>
            <Route path="/requests" Component={RequestsPage}></Route>
            <Route path="/appointments" Component={AppointementPage}></Route>
            <Route path="/edit" Component={EditProfilePage}></Route>
            <Route path="/search" Component={SearchPage}></Route>
            <Route path="/lawyer/:id" Component={LawyerPage}></Route>
            <Route path="/contact" Component={ContactPage}></Route>
            <Route path="/about" Component={AboutPage}></Route>
            <Route path="/privacy" Component={PrivacyPage}></Route>
            <Route path="/terms" Component={TermsPage}></Route>
            <Route path="/user-edit" Component={UserEditProfilePage}></Route>
            <Route path="/admin" Component={AdminPage}></Route>
            <Route path="/login-handler" Component={LoginHandler}></Route>
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
    // </ScrollToTop>
  );
}

export default App;
