import "./BookNow.scss";
import ServiceList from "../../components/Booking/ServiceList/ServiceList";
import ServiceDetails from "../../components/Booking/ServiceDetails/ServiceDetails";
import { useState } from "react";

// import square from "square";

function BookNow({ serviceItems, cancel, location, staff }) {
  // const parseBigInt = (jsonString) => {
  //   return JSON.parse(jsonString, (key, value) =>
  //     value && value.$bigint ? BigInt(value.$bigint) : value
  //   );
  // };

  return (
    <>
      {/* <div>
        {Object.entries(serviceItems).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {renderServiceItem(value)}
          </div>
        ))}
      </div> */}
      <ServiceList
        serviceItems={serviceItems}
        cancel={cancel}
        location={location}
        staff={staff}
      ></ServiceList>
      {/* <ServiceDetails
        currentServices={currentServices}
        setCurrentServices={setCurrentServices}
      ></ServiceDetails> */}
    </>
  );
}

export default BookNow;
