import Dialog from "./Dialog";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";

const AppointmentDialog = ({ trigger }) => {
  return (
    <Dialog trigger={trigger}>
      {(close) => (
        <div className="flex flex-col gap-12 w-full items-start max-w-[600px] mx-auto">
          <div className="flex flex-col gap-3 w-full mx-auto items-center">
            <div className="text-center text-2xl font-bold text-[#094b72]">
              Planifiez une Consultation Juridique
            </div>
            <div className="text-center text-sm text-[#496c80] ml-4 md:w-5/6">
              Sélectionnez une date et un créneau horaire pour rencontrer votre
              avocat et discuter de votre affaire en toute confidentialité.
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
                  options={[
                    { value: "Samedi", label: "Samedi" },
                    { value: "Dimanche", label: "Dimanche" },
                    { value: "Lundi", label: "Lundi" },
                    { value: "Mardi", label: "Mardi" },
                    { value: "Mercredi", label: "Mercredi" },
                    { value: "Jeudi", label: "Jeudi" },
                    { value: "Vendredi", label: "Vendredi" },
                  ]}
                />
                {/* Replace with real interactive dropdown */}
                <SelectField
                  id={"Heure"}
                  label={"Heure"}
                  placeholder={"Select a time"}
                  divClassName={"w-full"}
                  options={[
                    { value: "10:00", label: "10:00" },
                    { value: "10:30", label: "10:30" },
                    { value: "11:00", label: "11:00" },
                    { value: "11:30", label: "11:30" },
                    { value: "12:00", label: "12:00" },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full font-['DM_Sans'] items-start">
            <TextAreaField
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

export default AppointmentDialog;
