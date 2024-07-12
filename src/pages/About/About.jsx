import "./About.scss";

function About() {
  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <main className="about">
      <h1 className="about__title">About</h1>
      <img className="about__img" src={`${apiUrl}images/jody.jpg`} alt="jody" />
      <p className="about__content">
        Welcome to Blink, where beauty meets expertise. Led by Jody Spinney, a
        licensed and registered lash and nail technician, we are dedicated to
        enhancing your natural beauty and ensuring you feel your absolute best.
        At Blink, we offer a comprehensive range of services designed to cater
        to your unique beauty needs, from luxurious lash extensions to exquisite
        nail artistry and beyond. <br />
        <br /> Our commitment to excellence and personalized care ensures that
        each visit leaves you feeling pampered and revitalized. Whether you're
        looking to book an appointment for a specific service or simply explore
        the possibilities, we invite you to experience the exceptional quality
        and professional touch that Blink is known for. <br />
        <br /> We look forward to welcoming you and helping you achieve your
        beauty goals. <br />
        <br />
        Cheers, <br />
        The Blink Team
      </p>
    </main>
  );
}

export default About;
