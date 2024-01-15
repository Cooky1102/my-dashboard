import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "@/styles/calendar.scss";

const localizer = dayjsLocalizer(dayjs);

const CalendarPage = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        // events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CalendarPage;
