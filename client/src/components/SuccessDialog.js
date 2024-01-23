const SuccessDialog = () => {
  return (
    <div className="flex flex-col gap-12 w-full items-start max-w-[400px] mx-auto">
      <div className="flex flex-col gap-3 w-full mb-0 md:ml-10 mx-auto items-center">
        <div className="text-center text-2xl font-bold text-[#094b72]">
          Success
        </div>
        <div className="text-center text-sm text-[#496c80] ml-4 md:w-5/6">
          Your appointment has been scheduled successfully.
        </div>
      </div>

      <div className="flex flex-row gap-5 w-full items-start max-w-xl mx-auto">
        <button
          onClick={close}
          className="text-center text-sm font-medium text-[#f5fbff] bg-[#094b72] flex flex-row justify-center items-center px-6 py-3 rounded-full w-full hover:opacity-90"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default SuccessDialog;
