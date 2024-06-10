import "./Header.scss";
import Hamburger from "../Hamburger/Hamburger";
import { useState } from "react";

function Header() {
  const [hamburgerState, setHamburgerState] = useState(false);

  const toggleHamburger = () => {
    setHamburgerState(!hamburgerState);
  };

  return (
    <header>
      <nav className="nav">
        <a href="/index.html" className="nav__logo">
          <img
            className="nav__logo"
            src={"/src/assets//Images/logo.jpg"}
            alt="logo-img"
          />
        </a>

        <ul
          className="nav__list"
          style={{ display: `${hamburgerState ? "flex" : "none"}` }}
        >
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">BOOK NOW</a>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger></Hamburger>
        </div>
      </nav>
      {/* <style src="/src/components/Header/Header.scss"></style> */}
    </header>
  );
}

export default Header;
