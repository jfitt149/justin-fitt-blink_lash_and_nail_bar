import "./Header.scss";
import Hamburger from "../Hamburger/Hamburger";
import { useState, useEffect } from "react";
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

  const toggleHamburger = () => {
    setHamburgerState(!hamburgerState);
  };

  return (
    <header>
      <nav className="nav">
        <Link
          to={"/"}
          // onClick={setHamburgerState(false)}
          className="nav__logo-wrapper"
        >
          <img
            className={`nav__logo ${getClass()}`}
            git
            src={`${apiUrl}/images/logo-header.svg`}
            alt="logo-img"
          />
        </Link>

        <ul
          className="nav__list"
          style={{ display: `${hamburgerState ? "flex" : "none"}` }}
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
              {/* <a href="https://squareupsandbox.com/appointments/buyer/widget/h9xjgl3ppwgwci/LRKJ0WTY1A225"> */}
              <p className="nav__list__item">BOOK NOW</p>
              {/* </a> */}
            </Link>
          </li>
        </ul>
        <div className={`hamburger ${getClass()}`} onClick={toggleHamburger}>
          <Hamburger hamburgerState={hamburgerState}></Hamburger>
        </div>
      </nav>
      {/* <style src="/src/components/Header/Header.scss"></style> */}
    </header>
  );
}

export default Header;
