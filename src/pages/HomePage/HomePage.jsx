import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import ServicesPreview from "../../components/ServicesPreview/ServicesPreview";
import GalleryPreview from "../../components/GalleryPreview/GalleryPreview";
import FacebookFeatured from "../../components/FacebookFeatured/FacebookFeatured";
import Contact from "../Contact/Contact";
import Testimonials from "../../components/Testimonials/Testimonials";

function HomePage() {
  return (
    <>
      <Hero></Hero>
      <ServicesPreview></ServicesPreview>

      {/* <FacebookFeatured></FacebookFeatured> */}
      <Testimonials></Testimonials>
      <Contact></Contact>
      <GalleryPreview></GalleryPreview>
    </>
  );
}

export default HomePage;
