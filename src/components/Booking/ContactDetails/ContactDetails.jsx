import { Link, useLocation, Navigate, useNavigate } from "react-router-dom";
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

function ContactDetails({ serviceItems, staff }) {
  const searchParams = new URLSearchParams(useLocation().search);
  const serviceId = searchParams.get("serviceId");
  const staffId = searchParams.get("staff");
  const startAt = searchParams.get("startAt");
  const serviceVersion = searchParams.get("version");
  const serviceVariationId = searchParams.get("serviceVariationId");

  const navigate = useNavigate();

  const serviceItem = serviceItems.find((item) => item.id === serviceId);
  console.log(serviceItem);
  if (!serviceItem || !staff || !location) {
    return <div>Loading...</div>;
  }
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
          <div className="steps__step">
            <div className="steps__step-wrapper">
              <div className="steps__step-title">
                <span>Appointment time</span>
                <Link
                  to={`/availability/${staffId}/${serviceVariationId}?version=${serviceVersion}`}
                >
                  Edit
                </Link>
              </div>
              <div className="steps__step-body">
                <div className="steps__step-name">
                  {convertDateToText(startAt, location.timezone)}
                </div>
                <div className="steps__step-description">
                  {convertTimeToText(startAt, location.timezone)}
                </div>
              </div>
            </div>
          </div>
          <div className="steps__step selected">
            <div className="steps__step-wrapper">
              <div className="steps__step-title">
                <span>Enter your details</span>
                <span className="icon side-caret-selected"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="content-main">
          <h4>Enter your details</h4>
          <form
            class="sq-form-control contact-form"
            method="POST"
            action={`/booking/create?serviceId=${serviceVariationId}&staffId=${staffId}&version=${serviceVersion}&startAt=${startAt}`}
          >
            <input
              class="half-width"
              type="text"
              name="givenName"
              required
              maxlength="50"
              placeholder="First name"
            />
            <input
              class="half-width"
              type="text"
              name="familyName"
              required
              maxlength="50"
              placeholder="Last name"
            />
            <input
              class="half-width"
              name="emailAddress"
              required
              maxlength="320"
              placeholder="Email"
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              title="Invalid email address"
            />
            <textarea
              name="customerNote"
              placeholder="Appointment notes (optional)"
              maxlength="1500"
              rows="5"
            ></textarea>

            <button class="button btn-primary" type="submit">
              Book appointment
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
