import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import SlidingMenu from "../../SlidingMenu/SlidingMenu";
import "./ContactDetails.scss";

function ContactDetails({ serviceItems, staff, location }) {
  const [formData, setFormData] = useState({
    givenName: "",
    familyName: "",
    emailAddress: "",
    customerNote: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

  const apiUrl = import.meta.env.VITE_API_URL;
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(JSON.stringify(formData));
    const createBooking = async () => {
      try {
        const response = await axios.post(
          apiUrl + "booking/create",
          {
            givenName: formData.givenName,
            familyName: formData.familyName,
            emailAddress: formData.emailAddress,
            customerNote: formData.customerNote,
          },
          {
            params: {
              serviceId: serviceVariationId,
              staffId: staffId,
              version: serviceVersion,
              startAt: startAt,
            },
          }
        );
        console.log(response.data);
        const bookingId = response.data;
        navigate("/booking/" + bookingId);
      } catch (error) {
        console.error(error);
      }
    };
    createBooking();
  };

  return (
    <>
      <SlidingMenu
        serviceItem={serviceItem}
        serviceVariationId={serviceVariationId}
        staffId={staffId}
        location={location}
        serviceVersion={serviceVersion}
        startAt={startAt}
      ></SlidingMenu>
      <div className="content">
        <div className="content-main">
          <h2>Enter your details</h2>
          <form
            className="sq-form-control contact-form"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              className="half-width"
              type="text"
              name="givenName"
              required
              maxLength="50"
              placeholder="First name"
              value={formData.givenName}
              onChange={handleChange}
            />
            <input
              className="half-width"
              type="text"
              name="familyName"
              required
              maxLength="50"
              placeholder="Last name"
              value={formData.familyName}
              onChange={handleChange}
            />
            <input
              className="half-width"
              name="emailAddress"
              required
              maxLength="320"
              placeholder="Email"
              value={formData.emailAddress}
              onChange={handleChange}
              type="email"
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              title="Invalid email address"
            />
            <textarea
              name="customerNote"
              placeholder="Appointment notes (optional)"
              maxLength="1500"
              rows="5"
              value={formData.customerNote}
              onChange={handleChange}
            ></textarea>

            <button
              className="contact-button contact-btn-primary"
              type="submit"
            >
              Book appointment
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
