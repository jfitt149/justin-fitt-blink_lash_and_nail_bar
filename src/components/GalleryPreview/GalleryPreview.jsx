import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./GalleryPreview.scss";
import { PrevArrow, NextArrow } from "./SliderArrows/SliderArrows";

function GalleryPreview() {
  const settings = {
    // className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "3rem",
    slidesToShow: 1,
    speed: 500,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <section className="gallery-preview slider-container">
      <Slider {...settings}>
        <div className="gallery-preview__item">
          <img
            className="gallery-preview__image"
            src="/src/assets/Images/gallery_1.jpg"
            alt="nails-gallery-image-1"
          />
        </div>
        <div className="gallery-preview__item">
          <img
            className="gallery-preview__image"
            src="/src/assets/Images/gallery_2.jpg"
            alt="nails-gallery-image-2"
          />
        </div>
        <div className="gallery-preview__item">
          <img
            className="gallery-preview__image"
            src="/src/assets/Images/gallery_3.jpg"
            alt="nails-gallery-image-3"
          />
        </div>
        <div className="gallery-preview__item">
          <img
            className="gallery-preview__image"
            src="/src/assets/Images/gallery_4.jpg"
            alt="nails-gallery-image-4"
          />
        </div>
        <div className="gallery-preview__item">
          <img
            className="gallery-preview__image"
            src="/src/assets/Images/gallery_5.jpg"
            alt="nails-gallery-image-5"
          />
        </div>
        <div className="gallery-preview__item">
          <img
            className="gallery-preview__image"
            src="/src/assets/Images/gallery_6.jpg"
            alt="nails-gallery-image-6"
          />
        </div>
      </Slider>
      <div className="gallery-preview__see-more-wrapper">
        <Link className="gallery-preview__see-more" to={"/gallery"}>
          {/* gallery-preview__see-more */}
          SEE MORE
        </Link>
      </div>
    </section>
  );
}

export default GalleryPreview;
