import ReviewsIcon from "../../assets/reviews.svg";
import ReviewCard from "../../components/ReviewCard";

const Reviews = () => {
  // imageUrl, fullName, date, rating, reviewContent;
  const reviews = Array(2)
    .fill()
    .map((item) => ({
      imageUrl: "https://picsum.photos/200",
      date: "July 2021",
      rating: 4,
      reviewContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae, ultricies in sit. ",
    }));

  return <p>Reviews commented in code</p>;
  // TODO: uncomment this when backend is ready
  // return (
  //   <div className="flex flex-col gap-10 mt-6">
  //     {reviews.map((review, index) => (
  //       <div className="border-b border-[#e4e4e4] pb-6 last:border-transparent">
  //         <ReviewCard key={index} {...review} />
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default Reviews;
