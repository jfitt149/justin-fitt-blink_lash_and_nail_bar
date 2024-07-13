import "./ConfirmBooking.scss";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../../utils/functions";
import { formatDateToParts, getStaffInitials } from "../../../utils/functions";

function ConfirmBooking({ location, staff, serviceItems }) {
  //   const { bookingId, staffId, serviceVariationId, variationVersion } =
  //     useParams();
  //   const serviceItem = serviceItems.find((item) =>
  //     item.itemData.variations.some(
  //       (variation) => variation.id === serviceVariationId
  //     )
  //   );

  const bookingId = useParams();

  const [booking, setBooking] = useState([]);
  const [serviceItem, setServiceItem] = useState([]);
  const [serviceVariation, setServiceVariation] = useState([]);
  const [teamMemberBookingProfile, setTeamMemberBookingProfile] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  const getBooking = async () => {
    try {
      console.log(bookingId.bookingId);
      const response = await axios.get(
        apiUrl + "booking/" + bookingId.bookingId
      );
      console.log(response.data);
      setBooking(response.data.booking);
      setServiceItem(response.data.serviceItem);
      setServiceVariation(response.data.serviceVariation);
      setTeamMemberBookingProfile(response.data.teamMemberBookingProfile);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBooking();
  }, []);

  const navigate = useNavigate();

  const rescheduleHandler = () => {
    alert("Please use contact form to reschedule your appointment.");
    navigate("/Contact");
  };

  const cancelHandler = () => {
    alert("Your appointment has been canceled.");
    navigate("/");
  };

  if (
    !serviceItem ||
    booking.length === 0 ||
    !serviceVariation ||
    !teamMemberBookingProfile
  ) {
    return <div>Loading...</div>;
  }

  console.log(serviceItem, booking, serviceVariation, teamMemberBookingProfile);

  return (
    <>
      <div className="confirm-container">
        <div className="content__service message">
          <h3>Thank you for booking with us</h3>
          <div className="content__service message-sm">
            <span> Your appointment has been approved.</span>
          </div>
        </div>
        <div className="content__card">
          <div className="content__card-wrapper">
            <div>
              <div className="staff__card-wrapper confirm">
                <div className="staff__card-picture-wrapper">
                  {teamMemberBookingProfile &&
                  teamMemberBookingProfile.profileImageUrl ? (
                    <img
                      src={teamMemberBookingProfile.profileImageUrl}
                      alt="team-member-profile-image"
                    />
                  ) : teamMemberBookingProfile ? (
                    <p>
                      {getStaffInitials(teamMemberBookingProfile.displayName)}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="staff__card-details--confirm">
                  <span className="message-sm">Scheduled with</span>
                  <h4>{teamMemberBookingProfile.displayName}</h4>
                </div>
              </div>
            </div>
            <div className="content__card-date">
              <h5>
                {formatDateToParts(
                  booking.startAt,
                  location.timezone,
                  booking.appointmentSegments[0].durationMinutes
                )}
              </h5>
            </div>
            <div className="content__card-description">
              <span>
                {serviceItem.itemData.name} -
                {serviceVariation.itemVariationData.name}
              </span>
            </div>
            <div className="business__location">
              <div>
                {location.address ? (
                  <>
                    <span>{location.address.addressLine1},</span>
                    <span>{location.address.addressLine2}</span>
                    <span>
                      {location.address.locality},
                      {location.address.administrativeDistrictLevel1},
                      {location.address.postalCode}
                    </span>
                  </>
                ) : (
                  <span>No location information</span>
                )}
              </div>
            </div>
            <div className="button__group">
              <button
                className="confirm-button"
                type="submit"
                onClick={rescheduleHandler}
              >
                Reschedule booking
              </button>

              <button
                className="confirm-button"
                type="submit"
                onClick={cancelHandler}
              >
                Cancel booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmBooking;
