import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarNoAction";
import UserEditView from "./UserEditView";

const UserEditProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-7xl mx-auto mb-12 gap-6 width70 ">
        <div className="rounded-2xl border-2 border-slate-100 p-8 ">
          <UserEditView />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserEditProfilePage;
