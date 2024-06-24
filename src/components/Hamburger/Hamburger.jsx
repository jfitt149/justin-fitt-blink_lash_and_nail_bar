function Hamburger({ hamburgerState }) {
  return (
    <div
      className={`${
        hamburgerState ? "hamburger__icon--active" : "hamburger__icon--inactive"
      }`}
    ></div>
  );
}

export default Hamburger;
