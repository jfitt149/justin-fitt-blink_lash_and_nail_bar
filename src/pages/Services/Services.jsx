import "./Services.scss";

function Services() {
  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <>
      <main className="services">
        <h1 className="services__title">Services</h1>
        <img
          className="services__img"
          src={`/images/lashes_7.jpg`}
          alt="rainbow-lashes"
        />
        <h2 className="services__subtitle">Lashes</h2>

        <p className="services__item">
          <span>Classic lashes</span> | full set - $120.00
        </p>
        <p className="services__item">
          <span>Classic fill</span> - $120.00
        </p>
        <p className="services__item">
          <span>Hybrid lashes</span> | full set - $140.00
        </p>
        <p className="services__item">
          <span>Hybrid fill</span> - $55.00
        </p>
        <p className="services__item">
          <span>Volume lashes</span> | full set - $160.00
        </p>
        <p className="services__item">
          <span>Volume fill</span> - $65.00
        </p>
        <p className="services__item">
          <span>Mega volume lashes</span> | full set - $180.00
        </p>
        <p className="services__item">
          <span>Mega volume fill</span> - $75.00
        </p>
        <p className="services__item">
          <span>Lash lift & tint</span> - $85.00
        </p>
        <br />
        <p className="services__item">Add 10.00 UV/ LED Method</p>
        <img
          className="services__img"
          src={`/images/nails_1.jpg`}
          alt="rainbow-lashes"
        />
        <h2 className="services__subtitle">Nails</h2>
        <p className="services__item">
          <span>Gel nails</span> | full set - $65.00
        </p>
        <p className="services__item">
          <span>Gel fill</span> - $45.00
          <br />
          (any additional nail art is $5 and up)
        </p>
        <p className="services__item">
          <span>Gel nail removal</span> - $25.00
        </p>
        <p className="services__item">
          <span>Gel polish manicure</span> - $45.00
        </p>
        <p className="services__item">
          <span>Classic manicure</span> - $30.00
        </p>
        <p className="services__item">
          <span>Paraffin wax</span> - $10.00 xtra
        </p>
        <img
          className="services__img"
          src={`/images/footcare.jpg`}
          alt="rainbow-lashes"
        />
        <h2 className="services__subtitle">Footcare</h2>
        <p className="services__item">
          <span>Gel polish pedicure</span> - $50.00
        </p>
        <p className="services__item">
          <span>Classic pedicure</span> - $40.00
        </p>
        <p className="services__item">
          <span>Foot care</span> - $30.00
          <br />
          (foot care includes soak, clipping, scrub and massage)
        </p>
        <p className="services__item">
          <span>Foot facial</span> - $10.00 xtra
        </p>
        <p className="services__item">
          <span>Paraffin wax or scrub</span> - $10.00 xtra
        </p>
        <img
          className="services__img"
          src={`/images/tanning.jpg`}
          alt="rainbow-lashes"
        />
        <h2 className="services__subtitle">Tanning</h2>
        <p className="services__item">
          <span>Booster bed tan</span> - $6.00 / session
          <br />
          (or $100.00 unlimited tanning for 1 year )
        </p>
        <h2 className="services__subtitle">Teeth Whitening</h2>
        <p className="services__item">
          <span>In store teeth whitening</span> - $85.00
        </p>
        <p className="services__item">
          <span>Blue light teeth whitening</span> | home kits - $120.00
        </p>
        <h2 className="services__subtitle">Facials</h2>
        <p className="services__item">
          <span>Reflexology cold facial</span> - $70.00
        </p>

        <h2 className="services__subtitle">Massages</h2>
        <p className="services__item">
          <span>Leg & foot massage</span> - $35.00
        </p>
        <p className="services__item">
          <span>Arm & hand massage</span> - $35.00
        </p>
        <p className="services__item">
          <span>Indian head massage</span> - $65.00
        </p>
      </main>
    </>
  );
}

export default Services;
