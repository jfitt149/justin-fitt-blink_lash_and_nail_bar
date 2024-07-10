import { Link } from "react-router-dom";
import "./ServicesPreview.scss";

function ServicesPreview() {
  const backendURL = import.meta.env.VITE_API_URL;

  return (
    <section className="services-preview slider-container">
      <h2 className="services-preview__subheader">Our Services</h2>
      <p className="services-preview__content">
        For perfectly polished hands and feet, radiant skin, stunning lashes and
        brows, or a sun-kissed glow, Blink has everything you need to shine! 🌞
      </p>
      <div className="services-preview__see-more-wrapper">
        <Link className="services-preview__see-more" to={"/services"}>
          {/* gallery-preview__see-more */}
          VIEW SERVICES
        </Link>
      </div>
    </section>
  );
}

export default ServicesPreview;
