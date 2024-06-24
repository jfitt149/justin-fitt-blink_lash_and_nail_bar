import "./Contact.scss";

function Contact() {
  return (
    <>
      <div className="contact__map-wrapper">
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.310317449975!2d-65.8422219242942!3d43.766416845101695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b566e51e4e3c815%3A0x6ec99f82b77df6e1!2s4702%20Nova%20Scotia%20Trunk%203%2C%20Middle%20West%20Pubnico%2C%20NS%20B0W%202M0!5e0!3m2!1sen!2sca!4v1718930590215!5m2!1sen!2sca"
          width="600"
          height="450"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>{" "}
      </div>
    </>
  );
}

export default Contact;
