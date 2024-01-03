import CardLawyer from "../../components/CardLawyer";
import lawyerPlaceholder from "../../assets/lawyer_placeholder.png";

const SearchResults = () => {
  const laywerData = {
    name: "Marzouk Lounes",
    location: "Tizi-Ouzou, Algeria",
    categories: ["Usurpation ", "Criminologie"],
    description:
      "je suis un avocat specialisé en affaire de crimes et d'usurpation d'identite  , je suis devouée et je suis passioné par mon travail",
    image: lawyerPlaceholder,
  };

  const lawyersData = [
    laywerData,
    laywerData,
    laywerData,
    laywerData,
    // Ajoutez d'autres avocats selon vos besoins
  ];

  return (
    // a list of cards with a title, cards should be in 1 row
    <div className="flex flex-col pt-4 w-full">
      {lawyersData.map((lawyer, index) => (
        <CardLawyer key={index} {...lawyer} />
      ))}
    </div>
  );
};

export default SearchResults;
