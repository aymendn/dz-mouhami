const Availability = ({ data }) => {
  // remote :00 of seconds from time
  const formatTime = (time) => {
    return time.slice(0, -3);
  };

  const newTimeSlots = data.map((slot) => ({
    ...slot,
    start_time: formatTime(slot.start_time),
    end_time: formatTime(slot.end_time),
  }));

  return (
    <div className="flex flex-row gap-3 flex-wrap">
      {newTimeSlots.map((slot, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white py-2 px-8  rounded-md border-2 border-blue-100 "
        >
          <div className="text-base font-semibold mb-1">{slot.day}</div>
          <div className="text-gray-700 text-sm">
            {slot.start_time} - {slot.end_time}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Availability;
