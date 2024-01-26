import CardLawyer from "../../components/CardLawyer";
import lawyerPlaceholder from "../../assets/lawyer_placeholder.png";

const SearchResults = ({ data }) => {
  console.log(data);
  return (
    // a list of cards with a title, cards should be in 1 row
    <div className="flex flex-col pt-4 w-full">
      {data.search_results.map((lawyer, index) => (
        <CardLawyer key={index} {...lawyer} />
      ))}
    </div>
  );
};

export default SearchResults;
