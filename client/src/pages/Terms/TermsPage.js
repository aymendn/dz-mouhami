import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import TermsIcon from "../../assets/terms.svg";
import Box from "../Dashboard/Box";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col content-start justify-between">
      <Navbar />
      <div className="mb-12 width70 flex flex-col justify-start flex-1">
        <div className="flex justify-start gap-2 mt-6 ms-2">
          <img src={TermsIcon} alt="Email Icon" className="w-8 h-8" />
          <h1 className="text-3xl mb-6 font-semibold text-[#094B72]">
            Conditions d'Utilisation
          </h1>
        </div>
        {/* Just some text to say you can contact us via this email */}
        <Box>
          <section>
            <h2 class="text-2xl font-semibold mb-4">
              Acceptation des Conditions
            </h2>
            <p class="text-gray-700">
              En utilisant DZ-Mouhami, vous acceptez les présentes conditions
              d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne
              pas utiliser notre plateforme.
            </p>
          </section>

          <section class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">
              Utilisation de la Plateforme
            </h2>
            <p class="text-gray-700">
              Vous vous engagez à utiliser la plateforme de manière responsable,
              à respecter les lois en vigueur, et à ne pas violer les droits
              d'autrui. Nous nous réservons le droit de suspendre ou fermer
              votre compte en cas de non-respect des règles.
            </p>
          </section>

          <section class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">
              Modification des Conditions
            </h2>
            <p class="text-gray-700">
              Nous nous réservons le droit de modifier les présentes conditions
              d'utilisation à tout moment. Les modifications seront effectives
              dès leur publication sur la plateforme.
            </p>
          </section>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;
