import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarNoAction";
import EmailIcon from "../../assets/email.svg";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col content-start justify-between">
      <Navbar />
      <div className="mb-12 width70 flex flex-col justify-start flex-1">
        <div className="flex justify-start gap-2 mt-6 ms-2">
          <img src={EmailIcon} alt="Email Icon" className="w-8 h-8" />
          <h1 className="text-3xl mb-6 font-semibold text-[#094B72]">
            Contact Us
          </h1>
        </div>
        {/* Just some text to say you can contact us via this email */}
        <div className="text-[#496C80]">
          You can contact us via this email:{" "}
          <a href="mailto:" className="text-[#094B72]">
            contact@lawyered
          </a>
        </div>

        {/* Additional content to fill the page */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-[#094B72]">Our Office</h2>
          <p className="text-[#496C80]">
            Visit us at our main office located at:
          </p>
          <address className="text-[#496C80]">
            123 Legal Street, Law City, LC 12345
          </address>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
