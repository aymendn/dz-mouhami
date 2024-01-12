import Popup from "reactjs-popup";
import { motion } from "framer-motion";
import Dialog from "./Dialog";

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

          <div className="flex flex-col gap-8 w-full items-start">
            <div className="flex flex-col gap-2 w-full items-start">
              <div className="opacity-80 text-sm font-medium text-[#094b72] ml-1">
                Premier Créneau
              </div>
              <div className="flex flex-row gap-4 w-full items-start">
                {/* Replace with real interactive dropdown */}
                <div className="border-[#d8ebf6] border-2 rounded-full w-full">
                  <select className=" bg-white flex justify-start  items-center  px-4 py-3  rounded-full w-full">
                    <option value="jeudi">Jeudi</option>
                    <option value="vendredi">Vendredi</option>
                  </select>
                </div>
                {/* Replace with real interactive dropdown */}
                <div className="border-[#d8ebf6] border-2 rounded-full w-full">
                  <select className=" bg-white flex justify-start  items-center  px-4 py-3  rounded-full w-full">
                    <option value="jeudi">10:30</option>
                    <option value="jeudi">11:00</option>
                  </select>
                </div>
              </div>
              <div className="opacity-80 text-sm font-medium text-[#094b72] ml-1 mt-4">
                Deuxieme Créneau
              </div>
              <div className="flex flex-row gap-4 w-full items-start">
                {/* Replace with real interactive dropdown */}
                <div className="border-[#d8ebf6] border-2 rounded-full w-full">
                  <select className=" bg-white flex justify-start  items-center  px-4 py-3  rounded-full w-full">
                    <option value="jeudi">Jeudi</option>
                    <option value="vendredi">Vendredi</option>
                  </select>
                </div>
                {/* Replace with real interactive dropdown */}
                <div className="border-[#d8ebf6] border-2 rounded-full w-full">
                  <select className=" bg-white flex justify-start  items-center  px-4 py-3  rounded-full w-full">
                    <option value="jeudi">10:30</option>
                    <option value="jeudi">11:00</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Repeat the above structure for the Deuxieme Créneau section */}
          </div>

          <div className="flex flex-col gap-8 w-full font-['DM_Sans'] items-start">
            <div className="flex flex-col gap-2 w-full items-start">
              <div className="opacity-80 text-sm font-medium text-[#094b72] ml-1">
                Additional Notes or Comments
              </div>
              <textarea
                className="text-sm text-[#a6bdcb] border-solid border-[#d8ebf6] bg-white flex flex-row w-full min-h-[100px] items-start  border-2 rounded-xl py-2 px-4"
                placeholder="Additional Notes or Comments...."
              ></textarea>
            </div>

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
