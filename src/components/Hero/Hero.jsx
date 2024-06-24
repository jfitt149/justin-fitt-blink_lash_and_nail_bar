import "./Hero.scss";

function Hero() {
  return (
    <div className="hero__container">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <img
          className="hero__logo"
          src="/src/assets/Images/logo.svg"
          alt="blink-lash-and-nail-bar-logo"
        />
      </div>
    </div>
  );
}

export default Hero;
