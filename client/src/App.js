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
import { useUser } from "./utils/UseTokenHook";
import Redirector from "./pages/Redirector/Redirector";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const isFalsy = (value) => {
  if (!value) {
    return true;
  }
  return false;
};

function App() {
  const { t } = useTranslation();
  const languageCode = t("languageCode");

  const queryClient = new QueryClient();

  const { user, logout } = useUser();

  const isClient = user?.isClient || false;
  const isLawyer = user?.isLawyer || false;
  const isSuperUser = user?.isSuperUser || false;
  const isSignup = user?.isSignup || false;
  const isLoggedIn = !!user;

  useEffect(() => {
    document.documentElement.lang = languageCode;
  }, [languageCode]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={languageCode}>
        <button onClick={logout} className="bg-red-500 ">
          Logout
        </button>
        <div>{"token: " + JSON.stringify(user?.token)}</div>
        <div>{"isLoggedIn: " + isLoggedIn}</div>
        <div>{"isClient: " + isClient}</div>
        <div>{"isLawyer: " + isLawyer}</div>
        <div>{"isSuperUser: " + isSuperUser}</div>
        <div>{"isSignup: " + isSignup}</div>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Can be accessed by logged in users only */}
            {isLoggedIn && <Route path="/choice" Component={ChoicePage} />}
            {isLoggedIn && (
              <Route path="/user-registration" Component={UserFormPage} />
            )}
            {isLoggedIn && (
              <Route
                path="/user-registration/validation"
                Component={SuccessUserPage}
              />
            )}
            {isLoggedIn && (
              <Route
                path="/lawyer-registrationStep1"
                Component={LawyerForm1Page}
              />
            )}
            {isLoggedIn && (
              <Route
                path="/lawyer-registrationStep2"
                Component={LawyerForm2Page}
              />
            )}
            {isLoggedIn && (
              <Route
                path="/lawyer-registrationStep2/validation"
                Component={SuccessLawyerPage}
              />
            )}

            {/* Can be accessed by clients only */}
            {isLoggedIn && isClient && (
              <Route path="/user-edit" Component={UserEditProfilePage} />
            )}

            {/* Can be accessed by lawyers only */}
            {isLoggedIn && isLawyer && (
              <Route path="/dashboard" Component={DashboardPage} />
            )}
            {isLoggedIn && isLawyer && (
              <Route path="/requests" Component={RequestsPage} />
            )}
            {isLoggedIn && isLawyer && (
              <Route path="/appointments" Component={AppointementPage} />
            )}
            {isLoggedIn && isLawyer && (
              <Route path="/edit" Component={EditProfilePage} />
            )}

            {/* Can be accessed by admin only */}
            {isLoggedIn && isSuperUser && (
              <Route path="/admin" Component={AdminPage} />
            )}

            {/* Can be accessed by anyone */}
            <Route path="/" Component={LandingPage} />
            <Route path="/lawyer/:id" Component={LawyerPage} />
            {isLoggedIn && <Route path="/search" Component={SearchPage} />}
            <Route path="/login-handler" Component={LoginHandler} />
            <Route path="/contact" Component={ContactPage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/privacy" Component={PrivacyPage} />
            <Route path="/terms" Component={TermsPage} />

            {/* To redirect every private or unknown route to the landing page */}
            <Route path="*" Component={Redirector} />
          </Routes>
        </Router>
      </div>
      <ToastContainer position="bottom-left" />
    </QueryClientProvider>
  );
}

export default App;
