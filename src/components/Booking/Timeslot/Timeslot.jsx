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

// import $ from "jquery";
// import "jquery-ui/ui/widgets/datepicker";
// import "jquery-ui/themes/base/all.css";
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

function Timeslot({ serviceItems, cancel, location, staff, bookingId }) {
  const [availability, setAvailability] = useState([]);
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

  console.dir(events);
  console.dir(availability);

  return (
    <>
      <div className="content">
        <div className="content-left">
          <Link className="button" to={"/booknow"}>
            <span className="icon back-arrow"></span>
            Back
          </Link>
          <div className="steps">
            <div className="steps__step-wrapper">
              <div className="steps__step-title">
                <span>Services</span>
                <Link to={"/booknow"}>Edit</Link>
              </div>
              <div className="steps__step-body">
                <div className="steps__step-name">
                  {serviceItem.itemData.name}
                </div>
                <div className="steps__step-description">
                  {formatTime(
                    serviceItem.itemData.variations.find(
                      (variation) => variation.id === serviceVariationId
                    )?.itemVariationData.serviceDuration
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="steps__step selected">
            <div className="steps__step-wrapper">
              <div className="steps__step-title">
                <span>Appointment time</span>
                <span className="icon side-caret-selected"></span>
              </div>
            </div>
          </div>
          <div className="steps__step">
            <div className="steps__step-wrapper">
              <div className="steps__step-title">
                <span>Enter your details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-main">
        {/* <DatePicker
          availabilities={availability}
          serviceId={serviceId}
          serviceVersion={serviceVersion}
          serviceVariationId={serviceVariationId}
          // bookingId={bookingId}
          location={location}
        ></DatePicker> */}
      </div>

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
