import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="footer__list">
          <li>
            <Link to={"/"}>
              <p className="footer__list__item">Home</p>
            </Link>
          </li>
          <li>
            <Link to={"/services"}>
              <p className="footer__list__item">Services</p>
            </Link>
          </li>
          <li>
            <Link to={"/gallery"}>
              <p className="footer__list__item">Gallery</p>
            </Link>
          </li>
          <li>
            <Link to={"/About"}>
              <p className="footer__list__item">About</p>
            </Link>
          </li>
          <li>
            <Link to={"/Contact"}>
              <p className="footer__list__item">Contact</p>
            </Link>
          </li>
          <li>
            <Link to={"/BookNow"}>
              {/* <a href="https://squareupsandbox.com/appointments/buyer/widget/h9xjgl3ppwgwci/LRKJ0WTY1A225"> */}
              <p className="footer__list__item">BOOK NOW</p>
              {/* </a> */}
            </Link>
          </li>
        </ul>
        <p className="footer__copywrite">© 2024 Blink Lash & Nail Bar</p>
      </footer>
    </>
  );
}

export default Footer;
