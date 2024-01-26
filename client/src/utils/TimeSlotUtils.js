/* {
   "id": 2,
   "day": "Monday",
   "start_time": "09:00:00",
   "end_time": "17:00:00"

   to:

   ["09:00", "09:45", "10:30", "11:15", "12:00", "12:45", "13:30", "14:15", "15:00", "15:45", "16:30"]
},
*/

function timesListFromTimeSlot(interval) { 
   if (!interval) return [];

  const start = new Date(`01/01/2001 ${interval.start_time}`);
  const end = new Date(`01/01/2001 ${interval.end_time}`);
  const slots = [];

  while (start < end) {
    const time = start.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    slots.push(time);
    start.setMinutes(start.getMinutes() + 45);
  }

  return slots;
}

// TEST The function
const timeSlot = {
  id: 2,
  day: "Monday",
  start_time: "09:00:00",
  end_time: "17:00:00",
};

const timesList = timesListFromTimeSlot(timeSlot);

console.log(timesList);

export default timesListFromTimeSlot;