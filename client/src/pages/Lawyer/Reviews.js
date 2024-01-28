import ReviewsIcon from "../../assets/reviews.svg";
import LeaveReviewDialog from "../../components/LeaveReviewDialog";
import ReviewCard from "../../components/ReviewCard";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import { useToken } from "../../utils/UseTokenHook";

const getReviews = async ({ lawyerId }) => {
  const res = await axios.get(`/core/lawyer-view/${lawyerId}/reviews/`, {});

  console.log(res);

  return res.data;
};

const Reviews = ({ lawyerId, hasAction = true }) => {
  const { t } = useTranslation();
  const token = useToken();

  const { data, isLoading, isError, error } = useQuery(
    ["reviews", { lawyerId }],
    () => getReviews({ lawyerId, token })
  );

  const currentView = () => {
    if (isLoading) {
      return <Loading className="py-24 px-4" />;
    }

    if (isError) {
      return (
        <div className="text-red-500 flex flex-col justify-center items-center p-8">
          Error: {error.message}
          <div className="text-sm text-gray-500 text-center">
            Error data: {JSON.stringify(error)}
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-10 mt-4">
        {data.map((review, index) => (
          <div className="border-b border-[#e4e4e4] pb-6 last:border-transparent">
            <ReviewCard key={index} {...review} />
          </div>
        ))}
      </div>
    );
  };

  // return <p>{JSON.stringify(data)}</p>;
  return (
    <>
      <div className="flex flex-row justify-between items-center border-b border-[#e4e4e4] pb-4 mb-4">
        <div className="flex items-center gap-2">
          <img src={ReviewsIcon} alt="Locationon" className="w-5" />
          <div className="font-medium text-lg text-[#0f3146]">
            {t("reviews")}
          </div>
        </div>
        {hasAction && (
          <LeaveReviewDialog
            key="appointment"
            lawyerId={lawyerId}
            trigger={
              <div className="bg-[#094b72] text-white text-sm font-medium  py-2 px-5 rounded-full hover:opacity-90 cursor-pointer transition-all ms-2">
                {t("leaveAReview")}
              </div>
            }
          />
        )}
      </div>
      {currentView()}
    </>
  );
};

export default Reviews;
