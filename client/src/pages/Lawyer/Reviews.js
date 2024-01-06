import ReviewsIcon from "../../assets/reviews.svg";
import ReviewCard from "../../components/ReviewCard";

const Reviews = () => {
  // imageUrl, fullName, date, rating, reviewContent;
  const reviews = Array(5)
    .fill()
    .map((item) => ({
      imageUrl: "https://picsum.photos/200",
      fullName: "John Doe",
      date: "July 2021",
      rating: 4.5,
      reviewContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae, ultricies in sit. ",
    }));

  return (
    <>
      <div className="flex items-center gap-1">
        <img src={ReviewsIcon} alt="Locationon" className="w-4" />
        <div className="font-medium text-[#0f3146]">Reviews</div>
      </div>
      {/* review cards here */}
      <div className="flex flex-col gap-10 mt-4">
        {reviews.map((review, index) => (
          <div className="border-b border-[#e4e4e4] pb-6 last:border-transparent">
            <ReviewCard key={index} {...review} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
