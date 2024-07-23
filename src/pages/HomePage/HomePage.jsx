import Hero from "../../components/Hero/Hero";
import ServicesPreview from "../../components/ServicesPreview/ServicesPreview";
import GalleryPreview from "../../components/GalleryPreview/GalleryPreview";
import Contact from "../Contact/Contact";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./HomePage.scss";

function HomePage() {
  return (
    <>
      <Hero></Hero>
      <div className="max-width">
        <ServicesPreview></ServicesPreview>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <GalleryPreview></GalleryPreview>
      </div>
    </>
  );
}

export default HomePage;
