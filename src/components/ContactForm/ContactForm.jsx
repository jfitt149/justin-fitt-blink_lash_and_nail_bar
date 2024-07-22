import "./ContactForm.scss";
import "../../styles/partials/_global.scss";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

  const [emptyFields, setEmptyFields] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      message: formData.get("message"),
    };

    if (!data.name) errors.name = true;
    if (!data.email) errors.email = true;
    if (!data.message) errors.message = true;
    setEmptyFields(errors);

    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your email has been sent successfully! 😊");
          navigate("/");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="form-wrapper">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="form--left">
          <label className="form__label">Name</label>
          <input
            className={`form__input ${emptyFields.name ? "error" : ""}`}
            type="text"
            name="user_name"
          />
          <label className="form__label">Email</label>
          <input
            className={`form__input ${emptyFields.email ? "error" : ""}`}
            type="email"
            name="user_email"
          />
        </div>
        <div className="form--right">
          <label className="form__label">Message</label>
          <textarea
            className={`form__input form__input--text-area ${
              emptyFields.message ? "error" : ""
            }`}
            name="message"
          />
          <input
            className="services-preview__see-more-wrapper"
            type="submit"
            value="SEND"
          />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
