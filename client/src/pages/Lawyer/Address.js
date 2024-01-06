import LocationIcon from "../../assets/location.svg";

const Address = () => {
  return (
    <>
      <div className="flex items-center gap-1">
        <img src={LocationIcon} alt="Locationon" className="w-4" />
        <div className="font-medium text-[#0f3146]">Address</div>
      </div>
      <div className="text-sm  text-[#26495d]  ms-1">
        Rue Djouambi Mbarek, Rouached
      </div>
      <img
        src="https://file.rendit.io/n/7BGPi7Mgtq0Ra0eoUENN.png"
        alt="Image1"
        className="w-full mt-3"
      />
    </>
  );
};

export default Address;
