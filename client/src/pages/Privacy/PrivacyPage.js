import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarNoAction";
import PrivacyIcon from "../../assets/privacy.svg";
import Box from "../Dashboard/Box";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col content-start justify-between">
      <Navbar />
      <div className="mb-12 width70 flex flex-col justify-start flex-1">
        <div className="flex justify-start gap-2 mt-6 ms-2">
          <img src={PrivacyIcon} alt="Email Icon" className="w-8 h-8" />
          <h1 className="text-3xl mb-6 font-semibold text-[#094B72]">
            Politique de Confidentialité - DZ-Mouhami
          </h1>
        </div>
        {/* Just some text to say you can contact us via this email */}
        <Box>
          <section>
            <h2 class="text-2xl font-semibold mb-4">Collecte d'Informations</h2>
            <p class="text-gray-700">
              Nous collectons des informations personnelles lorsque vous créez
              un compte, cherchez des avocats, ou planifiez des rendez-vous. Ces
              informations peuvent inclure votre nom, adresse email, numéro de
              téléphone, et d'autres détails pertinents.
            </p>
          </section>

          <section class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">
              Utilisation des Informations
            </h2>
            <p class="text-gray-700">
              Les informations collectées sont utilisées pour faciliter la
              recherche d'avocats, la planification de rendez-vous, et
              l'amélioration de nos services. Vos informations ne seront pas
              partagées avec des tiers sans votre consentement.
            </p>
          </section>

          <section class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">Sécurité des Données</h2>
            <p class="text-gray-700">
              Nous mettons en place des mesures de sécurité pour protéger vos
              informations personnelles. Cependant, aucune méthode de
              transmission sur internet, ni de stockage électronique, n'est
              totalement sécurisée. Nous ne pouvons donc garantir une sécurité
              absolue.
            </p>
          </section>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
