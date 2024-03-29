import CalendarIcon from "../../assets/calendar.svg";
import EmailIcon from "../../assets/email.svg";
import CallIcon from "../../assets/call.svg";
import AppointmentDialog from "../../components/AppointmentDialog";
import { useTranslation } from "react-i18next";

const Contact = ({ lawyerData }) => {
  const { t } = useTranslation();

  const lawyerId = lawyerData.id;
  const timeSlots = lawyerData.time_slots;

  console.log("lawyerData", lawyerData);
  console.log("timeSlots", timeSlots);
  console.log("lawyerId", lawyerId);
  return (
    <>
      <p className="mb-4">{t("contactDescription")}</p>
      <AppointmentDialog
        key="appointment"
        lawyerId={lawyerId}
        timeSlots={timeSlots}
        trigger={
          <div className="bg-[#094b72] flex flex-row justify-center gap-2 py-3 px-5 rounded-full hover:opacity-90 cursor-pointer transition-all mb-2">
            <img src={CalendarIcon} alt="Calendar Icon" />
            <div className="text-white text-base font-medium">
              {t("scheduleAnAppointment")}
            </div>
          </div>
        }
      />

      <div className="bg-[#E5F2FA] flex flex-row justify-center gap-2 py-3 px-5 rounded-full hover:bg-[#d5eaf4] cursor-pointer transition-all mb-2">
        <img src={EmailIcon} alt="Calendar Icon" />
        <div className="text-[#094b72] text-base font-medium">
          {t("sendEmail")}
        </div>
      </div>
      <div className="bg-[#E5F2FA] flex flex-row justify-center gap-2 py-3 px-5 rounded-full hover:bg-[#d5eaf4] cursor-pointer transition-all mb-2">
        <img src={CallIcon} alt="Calendar Icon" />
        <div className="text-[#094b72] text-base font-medium">
          {t("makeCall")}
        </div>
      </div>
    </>
  );
};

export default Contact;
