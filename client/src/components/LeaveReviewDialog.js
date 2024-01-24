import Rating from "react-rating";
import Dialog from "./Dialog";
import starFilled from "../assets/star_filled.svg";
import star from "../assets/star.svg";
import TextAreaField from "./TextAreaField";

const LeaveReviewDialog = ({ trigger }) => {
  return (
    <Dialog trigger={trigger}>
      {(close) => (
        <div className="flex flex-col gap-12 w-full items-start max-w-[600px] mx-auto">
          <div className="flex flex-col gap-3 w-full mx-auto items-center">
            <div className="text-center text-2xl font-bold text-[#094b72]">
              Leave a Review
            </div>
            <div className="text-center text-sm text-[#496c80] ml-4 md:w-5/6">
              Please share your experience with us and help us improve our
              services.
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full items-start">
            <div className="flex flex-col gap-2 w-full items-start">
              <div className="opacity-80 text-sm font-medium text-[#094b72] ml-1">
                Rating
              </div>
              <Rating
                emptySymbol={<img src={star} className="icon" width={36} />}
                fullSymbol={
                  <img src={starFilled} className="icon" width={36} />
                }
              />
            </div>
            {/* Repeat the above structure for the Deuxieme Créneau section */}
          </div>

          <div className="flex flex-col gap-8 w-full font-['DM_Sans'] items-start">
            <TextAreaField
              divClassName={"w-full"}
              placeholder="Additional Notes or Comments...."
              label="Comment"
            />

            <div className="flex flex-row gap-5 w-full items-start max-w-xl mx-auto">
              <button
                onClick={close}
                className="text-center text-sm font-medium text-[#09283a] bg-[#e5f2fa] flex flex-row justify-center items-center px-6 py-3 rounded-full w-full hover:bg-[#d8ebf6]"
              >
                Annuler
              </button>
              <button
                onClick={close}
                className="text-center text-sm font-medium text-[#f5fbff] bg-[#094b72] flex flex-row justify-center items-center px-6 py-3 rounded-full w-full hover:opacity-90"
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default LeaveReviewDialog;
