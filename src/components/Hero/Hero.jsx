import "./Hero.scss";
import { Link } from "react-router-dom";

function Hero() {
  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <>
      <div className="hero__container">
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <img
            className="hero__logo"
            src={`${apiUrl}images/logo.svg`}
            alt="blink-lash-and-nail-bar-logo"
          />
          <p className="hero__content--slogan">
            Where Elegance Meets Excellence
          </p>
        </div>
      </div>
      <div className="hero__bottom">
        <p className="hero__statement">
          <span className="hero__statement--bold">
            Enhance Your Natural Beauty: Expert Lash and Nail Services at Blink
          </span>
          <br />
          <br />
          <span>
            Indulge in luxury and style with our professional treatments. Book
            your appointment today for the ultimate beauty experience.
          </span>
        </p>
        <div className="hero__bottom--right">
          {" "}
          <img
            className="hero__img"
            src={`${apiUrl}images/lashes_7.jpg`}
            alt="rainbow-lashes"
          />
          <div className="hero__see-more-wrapper">
            <Link className="hero__see-more" to={"/bookow"}>
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
