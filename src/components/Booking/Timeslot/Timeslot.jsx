import "./Timeslot.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [{ title: "Meeting", start: new Date() }];

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function Timeslot() {
  return (
    <>
      <div className="calender">
        <h1>Demo App</h1>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          events={events}
          eventContent={renderEventContent}
        />
      </div>
    </>
  );
}

export default Timeslot;
