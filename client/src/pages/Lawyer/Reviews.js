import ReviewsIcon from "../../assets/reviews.svg";
import LeaveReviewDialog from "../../components/LeaveReviewDialog";
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
      <div className="flex flex-row justify-between items-center border-b border-[#e4e4e4] pb-4 mb-4">
        <div className="flex items-center gap-2">
          <img src={ReviewsIcon} alt="Locationon" className="w-5" />
          <div className="font-medium text-lg text-[#0f3146]">Reviews</div>
        </div>
        <LeaveReviewDialog
          key="appointment"
          trigger={
            <div className="bg-[#094b72] text-white text-sm font-medium  py-2 px-5 rounded-full hover:opacity-90 cursor-pointer transition-all ms-2">
              Leave a review
            </div>
          }
        />
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
