import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  formatTime,
  convertDateToText,
  convertTimeToText,
} from "../../utils/functions";
import "./SlidingMenu.scss";

function SlidingMenu({
  serviceItem,
  serviceVariationId,
  staffId,
  location,
  serviceVersion,
  startAt,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routerLocation = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="container">
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <div className="content">
            <div className="content-left">
              <Link className="button-back" to={"/booknow"}>
                <span className="icon back-arrow"></span>
                Back
              </Link>
              <div className="steps">
                <div className="steps__step">
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
                <div
                  className={`steps__step ${
                    /^\/availability/.test(routerLocation.pathname)
                      ? "selected"
                      : ""
                  }`}
                >
                  <div className="steps__step-wrapper">
                    <div className="steps__step-title">
                      <span>Appointment time</span>
                      <span className="icon side-caret-selected"></span>
                      <div
                        style={
                          /^\/contactDetails/.test(routerLocation.pathname)
                            ? { display: "auto" }
                            : { display: "none" }
                        }
                      >
                        <Link
                          to={`/availability/${staffId}/${serviceVariationId}?version=${serviceVersion}`}
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                    <div
                      style={
                        /^\/contactDetails/.test(routerLocation.pathname)
                          ? { display: "auto" }
                          : { display: "none" }
                      }
                      className="steps__step-body"
                    >
                      <div className="steps__step-name">
                        {location && startAt
                          ? convertDateToText(startAt, location.timezone)
                          : ""}
                      </div>
                      <div className="steps__step-description">
                        {location && startAt
                          ? convertTimeToText(startAt, location.timezone)
                          : ""}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`steps__step ${
                    /^\/contactDetails/.test(routerLocation.pathname)
                      ? "selected"
                      : ""
                  }`}
                >
                  <div className="steps__step-wrapper">
                    <div className="steps__step-title">
                      <span>Enter your details</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`content ${isMenuOpen ? "shifted" : ""}`}>
          <img
            src={
              isMenuOpen
                ? "/assets/Icons/arrow_back.svg"
                : "/assets/Icons/arrow_forward.svg"
            }
            // src="/assets/Icons/arrow_forward.svg"
            alt="arrow icon"
            onClick={toggleMenu}
          ></img>
        </div>
      </div>
    </>
  );
}

export default SlidingMenu;
