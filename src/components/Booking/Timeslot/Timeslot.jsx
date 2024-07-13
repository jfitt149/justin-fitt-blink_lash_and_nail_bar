import "./Timeslot.scss";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import {
  formatTime,
  formatMoney,
  getStaffInitials,
  convertDateToText,
  convertTimeToText,
  getLocalTimezone,
  stringifyJSON,
  formatDateToParts,
} from "../../../utils/functions";
import DatePicker from "../DatePicker/DatePicker";
import SlidingMenu from "../../SlidingMenu/SlidingMenu";

// import $ from "jquery";
// import "jquery-ui/ui/widgets/datepicker";
// import "jquery-ui/themes/base/all.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const events = [{ title: "Meeting", start: new Date() }];

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      {/* <i>{eventInfo.event.title}</i> */}
    </>
  );
}

function Timeslot({ serviceItems, cancel, location, staff, bookingId }) {
  const [availability, setAvailability] = useState([]);
  const [calenderView, setCalenderView] = useState("dayGridWeek");
  const [calenderKey, setCalenderKey] = useState(0);
  const [calenderDate, setCalenderDate] = useState();
  const [formattedEvents, setFormattedEvents] = useState([]);
  const { staffId, serviceVariationId, variationVersion } = useParams();
  console.log(serviceVariationId);
  const serviceItem = serviceItems.find((item) =>
    item.itemData.variations.some(
      (variation) => variation.id === serviceVariationId
    )
  );
  console.log(serviceItem);

  const serverUrl = import.meta.env.VITE_API_URL;

  const getAvailability = async () => {
    try {
      const response = await axios.get(
        serverUrl +
          "availability/" +
          staffId +
          "/" +
          serviceVariationId +
          "?version=" +
          serviceItem.version
      );
      setAvailability(response.data.availabilities);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAvailability();
  }, [staffId, serviceItem]);

  // const serviceItem = serviceItems.filter(
  //   (serviceItem) => serviceItem.itemData.variations.id === serviceVariationId
  // );
  if (!serviceItem || !staff || !location) {
    return <div>Loading...</div>;
  }
  const serviceId = serviceItem.id;
  const serviceVersion = serviceItem.version;

  const formatEvents = (events) => {
    return events.map((event) => {
      const { startAt, appointmentSegments } = event;
      const durationMinutes = appointmentSegments[0].durationMinutes;
      const endAt = new Date(
        new Date(startAt).getTime() + durationMinutes * 60000
      ).toISOString();

      return {
        start: startAt,
        end: endAt,
        title: "Appointment Time",
      };
    });
  };

  const handleDateClick = (event) => {
    setCalenderView("dayGridDay");
    setCalenderKey((calenderKey) => calenderKey + 1);
    setFormattedEvents(formatEvents(availability));
    setCalenderDate(event.date);
    console.log(event);
  };

  const handleEventClick = (event) => {};

  return (
    <>
      <SlidingMenu
        serviceItem={serviceItem}
        serviceVariationId={serviceVariationId}
      ></SlidingMenu>

      <div className="content-main">
        <DatePicker
          availabilities={availability}
          serviceId={serviceId}
          serviceVersion={serviceVersion}
          serviceVariationId={serviceVariationId}
          // bookingId={bookingId}
          location={location}
        ></DatePicker>
      </div>

      {/* <div className="calender">
        <h1>Demo App</h1>
        <FullCalendar
          key={calenderKey}
          plugins={[dayGridPlugin, interactionPlugin]}
          // initialView="dayGridDay"
          initialView={calenderView}
          initialDate={calenderDate}
          weekends={false}
          events={formattedEvents}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          dateClick={handleDateClick}
          // editable={true}
          headerToolbar={{
            left: "dayGridWeek",
          }}
        />
      </div> */}
    </>
  );
}

export default Timeslot;
