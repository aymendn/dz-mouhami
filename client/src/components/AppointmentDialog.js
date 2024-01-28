import { useMutation } from "react-query";
import timesListFromTimeSlot from "../utils/TimeSlotUtils";
import Dialog from "./Dialog";
import LoadingOverlay from "./LoadingOverlay";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import { useState } from "react";
import axios from "axios";
import { useToken } from "../utils/UseTokenHook";
import { toast } from "react-toastify";

const createAppointment = async ({
  lawyerId,
  timeSlotId,
  startTime,
  note,
  token,
  close,
}) => {
  try {
    const res = await axios(
      `/core/${lawyerId}/schedule-appointment/${timeSlotId}/`,
      {
        method: "post",
        data: {
          startTime: startTime,
          note: note,
        },
        headers: {
          Authorization: token,
        },
      }
    );

    toast.success("Appointment created successfully");
  } catch (error) {
    console.log(error);
    toast.error("Appointment creation failed");
  } finally {
    close();
  }
};

const AppointmentDialog = ({ trigger, timeSlots, lawyerId }) => {
  // ===== Getting the token =====
  const token = useToken();

  // ===== Handling the backend request =====
  const { mutate, isLoading, isSuccess, isError, error } = useMutation(
    createAppointment,
    {
      onSuccess: () => {
        console.log("Appointment created successfully");
      },
      onError: (error) => {
        console.log("Appointment creation failed", error);
      },
    }
  );

  const handleCreateAppointment = (close) => {
    mutate({ lawyerId, timeSlotId, startTime: exactTime, note, token, close });
  };
  // ===============================================

  // ===== Handling local logic state =====
  const allTimeSlots = timeSlots || [];

  const [timeSlotId, setTimeSlotId] = useState(allTimeSlots[0] || null);

  const timeSlotFromId = (id) => {
    return allTimeSlots.find((ts) => ts.id.toString() === id.toString());
  };

  const timesListOfDay = timesListFromTimeSlot(timeSlotFromId(timeSlotId));

  const [exactTime, setExactTime] = useState(timesListOfDay[0] || null);

  const [note, setNote] = useState("");

  const handleTimeSlotChange = (e) => {
    const selectedSlotId = e.target.value;
    if (selectedSlotId) {
      setExactTime(null);
      setTimeSlotId(selectedSlotId);
    }
  };

  const handleExactTimeChange = (e) => {
    if (e.target.value === "Select a time" || e.target.value === null) {
      console.log("null");
    }
    setExactTime(e.target.value);
  };
  // ===============================================

  return (
    <Dialog trigger={trigger}>
      {(close) => (
        <LoadingOverlay isLoading={isLoading}>
          <div className="flex flex-col gap-12 w-full items-start max-w-[600px] mx-auto">
            <div className="flex flex-col gap-3 w-full mx-auto items-center">
              <div className="text-center text-2xl font-bold text-[#094b72]">
                Planifiez une Consultation Juridique
              </div>
              <div className="text-center text-sm text-[#496c80] ms-4 md:w-5/6">
                Sélectionnez une date et un créneau horaire pour rencontrer
                votre avocat et discuter de votre affaire en toute
                confidentialité.
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full items-start">
              <div className="flex flex-col gap-2 w-full items-start">
                <div className="flex flex-col sm:flex-row gap-4 w-full items-start">
                  {/* Replace with real interactive dropdown */}
                  <SelectField
                    id={"Jour"}
                    label={"Jour"}
                    placeholder={"Select a day"}
                    divClassName={"w-full"}
                    onChange={handleTimeSlotChange}
                    value={timeSlotId}
                    options={timeSlots.map((ts) => ({
                      value: ts.id,
                      label: ts.day,
                    }))}
                  />
                  {/* Replace with real interactive dropdown */}
                  <SelectField
                    id={"Heure"}
                    label={"Heure"}
                    placeholder={"Select a time"}
                    divClassName={"w-full"}
                    onChange={handleExactTimeChange}
                    value={exactTime}
                    options={timesListOfDay.map((exactTime) => ({
                      value: exactTime,
                      label: exactTime,
                    }))}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 w-full font-['DM_Sans'] items-start">
              <TextAreaField
                id={"note"}
                name={"note"}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                divClassName={"w-full"}
                placeholder="Additional Notes or Comments...."
                label="Additional Notes or Comments"
              />

              <div className="flex flex-row gap-5 w-full items-start max-w-xl mx-auto">
                <button
                  onClick={close}
                  className="text-center text-sm font-medium text-[#09283a] bg-[#e5f2fa] flex flex-row justify-center items-center px-6 py-3 rounded-full w-full hover:bg-[#d8ebf6]"
                >
                  Annuler
                </button>
                <button
                  onClick={() => handleCreateAppointment(close)}
                  className="text-center text-sm font-medium text-[#f5fbff] bg-[#094b72] flex flex-row justify-center items-center px-6 py-3 rounded-full w-full hover:opacity-90"
                >
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        </LoadingOverlay>
      )}
    </Dialog>
  );
};

export default AppointmentDialog;
