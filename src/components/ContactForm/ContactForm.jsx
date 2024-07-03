import "./ContactForm.scss";
import "../../styles/partials/_global.scss";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
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
        <label className="form__label">Name</label>
        <input className="form__input" type="text" name="user_name" />
        <label className="form__label">Email</label>
        <input className="form__input" type="email" name="user_email" />
        <label className="form__label">Message</label>
        <textarea
          className="form__input form__input--text-area"
          name="message"
        />
        <input className="button" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default ContactForm;
