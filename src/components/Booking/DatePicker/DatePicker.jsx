import { useEffect, useRef } from "react";
import "./DatePicker.scss";
// import "../../../assets/stylesheets/datepicker.css";
import DatePickerHandler from "../../../utils/date-picker-handler";

function DatePicker({
  availabilities,
  serviceId,
  serviceVersion,
  serviceVariationId,
  bookingId,
  location,
}) {
  const datepickerRef = useRef(null);

  useEffect(() => {
    const datePickerHandler = new DatePickerHandler(
      availabilities,
      serviceId,
      serviceVersion,
      serviceVariationId,
      bookingId,
      location.timezone
    );

    // const setWeekRange = (date) => {
    //   const day = date.getDay();
    //   const start = new Date(date);
    //   start.setDate(start.getDate() - day);
    //   const end = new Date(start);
    //   end.setDate(start.getDate() + 6);
    //   return { start, end };
    // };

    $(datepickerRef.current).datepicker({
      beforeShowDay: (date) => datePickerHandler.isSelectable(date),
      dateFormat: "yy-mm-dd",
      minDate: 0,
      maxDate: "30d",
      // beforeShow: function (input, inst) {
      //   const currentDate = new Date();
      //   const { start, end } = setWeekRange(currentDate);
      //   $(this).datepicker("option", {
      //     minDate: start,
      //     maxDate: end,
      //   });
      // },
    });

    $(datepickerRef.current).on("change", function () {
      datePickerHandler.selectNewDate($(this).val());
    });

    return () => {
      $(datepickerRef.current).datepicker("destroy");
    };
  }, [availabilities, serviceId, serviceVersion, bookingId, location.timezone]);

  const getLocalTimezone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  };

  return (
    <div className="availability">
      <h2>Select appointment date</h2>
      <div id="datepicker" ref={datepickerRef}></div>
      <h2>Available Times</h2>
      <p className="availability__note">
        You can schedule an appointment between 4 hours and 30 days ahead of
        time.
      </p>

      {getLocalTimezone() !== location.timezone && (
        <div className="timezone-warning">
          <span className="notify-icon">&#9888;</span>
          <span>
            <b>HEADS UP!</b> It looks like you're in a different timezone. Times
            below are shown in {location.timezone} time.
          </span>
        </div>
      )}

      <div id="available-times"></div>
    </div>
  );
}

export default DatePicker;
