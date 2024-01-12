const Availability = () => {
  const availability = [
    {
      day: "Monday",
      startHour: "9:00",
      endHour: "12:00",
    },
    {
      day: "Tuesday",
      startHour: "9:00",
      endHour: "12:00",
    },
    {
      day: "Tuesday",
      startHour: "14:00",
      endHour: "17:00",
    },
  ];

  return (
    <div className="flex flex-row gap-3 flex-wrap">
      {availability.map((slot, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white py-2 px-8  rounded-md border-2 border-blue-100 "
        >
          <div className="text-base font-semibold mb-1">{slot.day}</div>
          <div className="text-gray-700 text-sm">
            {slot.startHour} - {slot.endHour}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Availability;
