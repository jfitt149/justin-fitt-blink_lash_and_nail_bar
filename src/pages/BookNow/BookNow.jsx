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
      <section className="wrapper">
        <img
          src="/images/coming_soon.jpg"
          alt="coming-soon"
          className="coming-soon"
        />
      </section>
    </>
  );
}

export default BookNow;
