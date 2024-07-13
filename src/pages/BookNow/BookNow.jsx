import "./BookNow.scss";
import ServiceList from "../../components/Booking/ServiceList/ServiceList";

function BookNow({ serviceItems, cancel, location, staff }) {
  return (
    <>
      <ServiceList
        serviceItems={serviceItems}
        cancel={cancel}
        location={location}
        staff={staff}
      ></ServiceList>
    </>
  );
}

export default BookNow;
