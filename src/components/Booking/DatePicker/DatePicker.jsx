import { useEffect, useRef } from "react";
// import $ from "jquery";
// import "jquery-ui/ui/widgets/datepicker";
// import "jquery-ui/themes/base/all.css";
import DatePickerHandler from "../../../utils/date-picker-handler";

const DatePicker = ({
  availabilities,
  serviceId,
  serviceVersion,
  serviceVariationId,
  bookingId,
  location,
}) => {
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

    $(datepickerRef.current).datepicker({
      beforeShowDay: (date) => datePickerHandler.isSelectable(date),
      dateFormat: "yy-mm-dd",
      minDate: 0,
      maxDate: "30d",
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
      <h4>Select appointment date</h4>
      <div id="datepicker" ref={datepickerRef}></div>
      <h4>Available Times</h4>
      <p>
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
};

export default DatePicker;
