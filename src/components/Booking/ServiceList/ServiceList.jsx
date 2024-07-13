import "./ServiceList.scss";

import { formatTime, formatMoney } from "../../../utils/functions";

import { Link } from "react-router-dom";

function ServiceList({ serviceItems, cancel, location, staff }) {
  if (!serviceItems || !staff || !location) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main>
        <div className="content">
          <div className="content-left business">
            <div className="business__location">
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
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ServiceList;
