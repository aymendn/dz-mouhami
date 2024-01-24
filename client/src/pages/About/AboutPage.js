import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import InfoIcon from "../../assets/info.svg";
import Box from "../Dashboard/Box";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col content-start justify-between">
      <Navbar />
      <div className="mb-12 width70 flex flex-col justify-start flex-1">
        <header className="flex justify-start gap-2 mt-6 ms-2">
          <img src={InfoIcon} alt="Email Icon" className="w-8 h-8" />
          <h1 className="text-3xl mb-6 font-semibold text-[#094B72]">
            À Propos de DZ-Mouhami
          </h1>
        </header>
        {/* About content */}
        <Box>
          <section>
            <h2 class="text-2xl font-semibold mb-4">Notre Mission</h2>
            <p class="text-gray-700">
              DZ-Mouhami vise à faciliter la recherche et la connexion avec des
              avocats de confiance en Algérie. Nous nous engageons à fournir une
              plateforme transparente et efficace pour répondre à vos besoins
              juridiques.
            </p>
          </section>

          <section class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">Notre Équipe</h2>
            <p class="text-gray-700">
              L'équipe de DZ-Mouhami est composée de professionnels dévoués
              passionnés par la simplification de l'accès à des services
              juridiques de qualité. Nous croyons en la transparence, l'équité
              et la construction d'une communauté juridique fiable.
            </p>
          </section>

          <section class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">Contactez-Nous</h2>
            <p class="text-gray-700">
              Vous avez des questions ou des suggestions? N'hésitez pas à nous
              contacter à l'adresse suivante :{" "}
              <a href="mailto:contact@dzmouhami.com" class="text-blue-500">
                contact@dzmouhami.com
              </a>
              .
            </p>
          </section>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
