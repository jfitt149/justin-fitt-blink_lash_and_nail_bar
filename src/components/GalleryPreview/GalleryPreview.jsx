import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./GalleryPreview.scss";

function GalleryPreview() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  const numbOfGalleryItems = 5;
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <section className="gallery-preview slider-container">
      <h2 className="gallery-preview__subheader">Check out our gallery!</h2>
      <Slider {...settings}>
        {Array.from({ length: numbOfGalleryItems }, (_, i) => i + 1).map(
          (number) => (
            <div key={number} className="gallery-preview__item">
              <img
                className="gallery-preview__image"
                src={`${apiUrl}/images/gallery/gallery_${number}.jpg`}
                alt={`nails-gallery-image-${number}`}
              />
            </div>
          )
        )}
      </Slider>
      <div className="gallery-preview__see-more-wrapper">
        <Link className="gallery-preview__see-more" to={"/gallery"}>
          SEE MORE
        </Link>
      </div>
    </section>
  );
}

export default GalleryPreview;
