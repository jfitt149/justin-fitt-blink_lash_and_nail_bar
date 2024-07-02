import "./Contact.scss";
import ContactForm from "../../components/ContactForm/ContactForm";

function Contact() {
  return (
    <>
      <main className="contact">
        <h1>Contat Us!</h1>
        <ContactForm />
        <div className="contact__map-wrapper">
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.310317449975!2d-65.8422219242942!3d43.766416845101695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b566e51e4e3c815%3A0x6ec99f82b77df6e1!2s4702%20Nova%20Scotia%20Trunk%203%2C%20Middle%20West%20Pubnico%2C%20NS%20B0W%202M0!5e0!3m2!1sen!2sca!4v1718930590215!5m2!1sen!2sca"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>{" "}
        </div>
        <div className="contact__info">
          <h2>Address: </h2>
          <p>4702 Nova Scotia Trunk 3, Central Argyle, NS B0W 2M0</p>
          <h2>Phone: </h2>
          <p>+1 (902) 740-3160</p>
          <h2>Email: </h2>
          <p>madebymee@gmail.com</p>
        </div>
      </main>
    </>
  );
}

export default Contact;
