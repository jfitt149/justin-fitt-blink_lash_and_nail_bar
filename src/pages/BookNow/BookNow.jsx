import "./BookNow.scss";
import ServiceList from "../../components/Booking/ServiceList/ServiceList";

function BookNow({ serviceItems, cancel, location, staff }) {
  return (
    <>
      {/* <ServiceList
        serviceItems={serviceItems}
        cancel={cancel}
        location={location}
        staff={staff}
      ></ServiceList> */}
      <img src="/images/comming-soon.jpg" alt="comming-soon" />
    </>
  );
}

export default BookNow;
