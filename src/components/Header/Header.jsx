import "./Header.scss";
import Hamburger from "../Hamburger/Hamburger";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [hamburgerState, setHamburgerState] = useState(false);

  const location = useLocation();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setHamburgerState(false);
  }, [location]);

  const getClass = () => {
    if (location.pathname !== "/") {
      return "nav--filter";
    }
  };

  const toggleHamburger = () => setHamburgerState(!hamburgerState);

  return (
    <header>
      <nav className="nav">
        <Link to={"/"} className="nav__logo-wrapper">
          <img
            className={`nav__logo ${getClass()}`}
            src={`${apiUrl}/images/logo-header.svg`}
            alt="logo-img"
          />
        </Link>

        <ul
          className={`nav__list ${
            hamburgerState ? "nav__list--open" : "nav__list--closed"
          }`}
        >
          <li>
            <Link to={"/"}>
              <p className="nav__list__item">Home</p>
            </Link>
          </li>
          <li>
            <Link to={"/services"}>
              <p className="nav__list__item">Services</p>
            </Link>
          </li>
          <li>
            <Link to={"/gallery"}>
              <p className="nav__list__item">Gallery</p>
            </Link>
          </li>
          <li>
            <Link to={"/About"}>
              <p className="nav__list__item">About</p>
            </Link>
          </li>
          <li>
            <Link to={"/Contact"}>
              <p className="nav__list__item">Contact</p>
            </Link>
          </li>
          <li>
            <Link to={"/BookNow"}>
              <p className="nav__list__item">BOOK NOW</p>
            </Link>
          </li>
        </ul>
        <div className={`hamburger ${getClass()}`} onClick={toggleHamburger}>
          <Hamburger hamburgerState={hamburgerState}></Hamburger>
        </div>
      </nav>
    </header>
  );
}

export default Header;
