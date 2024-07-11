import "./Hero.scss";

function Hero() {
  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <div className="hero__container">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <img
          className="hero__logo"
          src={`${apiUrl}images/logo.svg`}
          alt="blink-lash-and-nail-bar-logo"
        />
        <p className="hero__content--slogan">Where Elegance Meets Excellence</p>
      </div>
    </div>
  );
}

export default Hero;
