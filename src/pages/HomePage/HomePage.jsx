import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import GalleryPreview from "../../components/GalleryPreview/GalleryPreview";
import FacebookFeatured from "../../components/FacebookFeatured/FacebookFeatured";
import Contact from "../Contact/Contact";
import Testimonials from "../../components/Testimonials/Testimonials";

function HomePage() {
  return (
    <>
      <Hero></Hero>
      <GalleryPreview></GalleryPreview>
      {/* <FacebookFeatured></FacebookFeatured> */}
      <Testimonials></Testimonials>
      <Contact></Contact>
    </>
  );
}

export default HomePage;
