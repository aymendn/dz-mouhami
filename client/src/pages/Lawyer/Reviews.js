import ReviewsIcon from "../../assets/reviews.svg";
import LeaveReviewDialog from "../../components/LeaveReviewDialog";
import ReviewCard from "../../components/ReviewCard";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import qs from "qs";
import { stringify } from "json5";

const getReviews = async ({ lawyerId, token }) => {
  // const { data } = await axios.get(`/core/lawyer-view/${lawyerId}/reviews/`, {
  //   token: token,
  // });
  // return data;
  // const data = await axios.get(
  //   `/core/lawyer-view/${lawyerId}/reviews/`,
  //   qs.stringify({
  //     token: token,
  //   }),
  //   {
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //   }
  // );

  // var obj = {
  //   method: "GET",
  //   body: JSON.stringify({
  //     token: token,
  //   }),
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  //   },
  // };
  // const data = await fetch(
  //   `http://127.0.0.1:8000/core/lawyer-view/${lawyerId}/reviews/`,
  //   obj
  // );

  const data = await axios.get(`/core/lawyer-view/${lawyerId}/reviews/`, {
    headers: {
      Authorization: "fdb2c4b7c75d21ea4410177f3128f5e8627dd125",
    },
  });

  console.log(data);

  return data;
};

const Reviews = ({ lawyerId }) => {
  const { t } = useTranslation();

  const token = "fdb2c4b7c75d21ea4410177f3128f5e8627dd125";

  const { data, isLoading, isError, error } = useQuery(
    ["reviews", { lawyerId }],
    () => getReviews({ lawyerId, token })
  );

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

  return <p>{JSON.stringify(data)}</p>;
  // return (
  //   <>
  //     <div className="flex flex-row justify-between items-center border-b border-[#e4e4e4] pb-4 mb-4">
  //       <div className="flex items-center gap-2">
  //         <img src={ReviewsIcon} alt="Locationon" className="w-5" />
  //         <div className="font-medium text-lg text-[#0f3146]">
  //           {t("reviews")}
  //         </div>
  //       </div>
  //       <LeaveReviewDialog
  //         key="appointment"
  //         trigger={
  //           <div className="bg-[#094b72] text-white text-sm font-medium  py-2 px-5 rounded-full hover:opacity-90 cursor-pointer transition-all ms-2">
  //             {t("leaveAReview")}
  //           </div>
  //         }
  //       />
  //     </div>
  //     {/* review cards here */}
  //     <div className="flex flex-col gap-10 mt-4">
  //       {data.map((review, index) => (
  //         <div className="border-b border-[#e4e4e4] pb-6 last:border-transparent">
  //           <ReviewCard key={index} {...review} />
  //         </div>
  //       ))}
  //     </div>
  //   </>
  // );
};

export default Reviews;
