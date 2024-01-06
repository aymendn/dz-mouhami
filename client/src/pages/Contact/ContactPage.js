import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarNoAction";
import EmailIcon from "../../assets/email.svg";
import Box from "../Dashboard/Box";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col content-start justify-between">
      <Navbar />
      <div className="mb-12 width70 flex flex-col justify-start flex-1">
        <div className="flex justify-start gap-2 mt-6 ms-2">
          <img src={EmailIcon} alt="Email Icon" className="w-8 h-8" />
          <h1 className="text-3xl mb-6 font-semibold text-[#094B72]">
            Contactez-Nous
          </h1>
        </div>
        {/* Just some text to say you can contact us via this email */}
        <Box>
          <section>
            <h2 class="text-2xl font-semibold mb-4">Coordonnées</h2>
            <p class="text-gray-700">
              Vous pouvez nous contacter aux coordonnées suivantes :
            </p>
            <ul class="list-disc ml-6 mt-2">
              <li>
                Email :{" "}
                <a href="mailto:contact@dzmouhami.com" class="text-blue-500">
                  contact@dzmouhami.com
                </a>
              </li>
              <li>Téléphone : +123 456 7890</li>
              <li>Adresse : 123 Rue de l'Exemple, Ville, Pays</li>
            </ul>
          </section>

          <section class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">Horaires d'ouverture</h2>
            <p class="text-gray-700">
              Notre équipe est disponible pour vous aider aux horaires suivants
              :
            </p>
            <ul class="list-disc ml-6 mt-2">
              <li>Lundi - Vendredi : 9h00 - 18h00</li>
              <li>Samedi : 10h00 - 15h00</li>
              <li>Dimanche : Fermé</li>
            </ul>
          </section>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
