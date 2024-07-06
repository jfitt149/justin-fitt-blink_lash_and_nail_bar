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

  const numbOfGalleryItems = 6;

  return (
    <section className="gallery-preview slider-container">
      <Slider {...settings}>
        {Array.from({ length: numbOfGalleryItems }, (_, i) => i + 1).map(
          (number) => (
            <div key={number} className="gallery-preview__item">
              <img
                className="gallery-preview__image"
                src={`/src/assets/Images/gallery_${number}.jpg`}
                alt={`nails-gallery-image-${number}`}
              />
            </div>
          )
        )}
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