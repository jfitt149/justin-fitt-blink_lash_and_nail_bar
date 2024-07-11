import "./Hero.scss";

function Hero() {
  return (
    <div className="hero__container">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <img
          className="hero__logo"
          src="../../../assets/Images/logo.svg"
          alt="blink-lash-and-nail-bar-logo"
        />
        <p className="hero__content--slogan">Where Elegance Meets Excellence</p>
      </div>
    </div>
  );
}

export default Hero;
