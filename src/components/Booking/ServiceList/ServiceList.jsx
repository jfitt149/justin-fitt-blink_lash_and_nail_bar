import "./ServiceList.scss";

import { formatTime, formatMoney } from "../../../utils/functions";

import { Link, useNavigate, useParams } from "react-router-dom";
useNavigate;

function ServiceList({ serviceItems, cancel, location, staff }) {
  const navigate = useNavigate();

  // const updateCurrentServices = (item) => {
  //   setCurrentServices((currentServices) => [...currentServices, item]);
  // };
  console.log(serviceItems);

  const bookServiceHandler = (item) => {
    // updateCurrentServices(item);
    // console.log(currentServices);
    navigate("/service-details");
  };

  if (!serviceItems || !staff || !location) {
    return <div>Loading...</div>;
  }

  // const staffMember = staff[0];
  // console.log(staffMember);

  return (
    <>
      <main>
        <div className="content">
          <div className="content-left business">
            {/* <div className="business__logo">
              {location.logoUrl ? (
                <img src={location.logoUrl}></img>
              ) : (
                <img src={"../../../assets/Images/logo.svg"}></img>
              )}
            </div>
            <h3>{location.businessName || location.name}</h3>
            {location.description ? <h5>{location.description}</h5> : ""} */}
            <div className="business__location">
              {/* <h4>Location</h4>
              <div>
                {location.address ? (
                  location.address.addressLine1 ? (
                    <span>{location.address.addressLine1}</span>
                  ) : (
                    ""(
                      location.address.addressLine2 ? (
                        <span>{location.address.addressLine2}</span>
                      ) : (
                        ""
                      )
                    )(
                      <span>
                        {location.address.locality}
                        {location.address.administrativeDistrictLevel1}
                        {location.address.postalCode}
                      </span>
                    )
                  )
                ) : (
                  <span>No location information</span>
                )}
              </div> */}
              {/* <div className="business__contact">
                <h4>Contact</h4>
                Email: <span>{location.businessEmail}</span>
                <br />
                Phone: <span>{location.phoneNumber}</span>
              </div> */}
              {cancel === "success" ? (
                <div className="success-toast">
                  <div>
                    <img src={serverUrl + "images/success.svg"} alt="success" />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="content-main">
              <h2> Book an appointment </h2>
              <h2 className="title">Services</h2>
              <h4 className="underline"></h4>
              <div className="cards">
                {serviceItems.map((item) =>
                  item.itemData.variations.map((variation) => (
                    // <a
                    //   href={`/staff/${variation.id}?version=${variation.version}`}
                    // >
                    <Link
                      key={item.id}
                      to={`/availability/${staff.id}/${variation.id}`}
                    >
                      <div className="card__wrapper">
                        <div className="card__info">
                          <h4>
                            {item.itemData.name} -{" "}
                            {variation.itemVariationData.name}
                          </h4>
                          <h5 className="card__description">
                            {item.itemData.description}
                          </h5>
                          <span className="card__details">
                            {variation.itemVariationData.pricingType ===
                            "FIXED_PRICING" ? (
                              formatMoney(
                                variation.itemVariationData.priceMoney.amount,
                                variation.itemVariationData.priceMoney.currency
                              )
                            ) : (
                              <p>Price Varies</p>
                            )}
                            <p>
                              •{" "}
                              {formatTime(
                                variation.itemVariationData.serviceDuration
                              )}
                            </p>
                          </span>
                        </div>
                      </div>
                    </Link>
                    // {/* </a> */}
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
    // <main className="service-list">
    //   <h1>Service List</h1>
    //   {serviceItems.map((serviceItem) => (
    //     <div key={serviceItem.id}>
    //       <p>{serviceItem.itemData.name}</p>
    //       <button
    //         onClick={() => {
    //           setCurrentServices((currentServices) => [
    //             ...currentServices,
    //             serviceItem,
    //           ]);
    //           bookServiceHandler(serviceItem);
    //         }}
    //       >
    //         BOOK
    //       </button>
    //     </div>
    //   ))}
    // </main>
  );
}

export default ServiceList;
