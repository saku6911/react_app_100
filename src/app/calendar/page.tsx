import CalendarScreen from "./components/calendarScreen";
import ScheduleScreen from "./components/scheduleScreen";

export default function Calendar() {
  return (
    <div className="flex max-lg:flex-col-reverse text-gray-800 md:p-10 gap-20">
      <ScheduleScreen />
      <CalendarScreen />
    </div>
  );
}
