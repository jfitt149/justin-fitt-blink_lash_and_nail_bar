import "./Gallery.scss";

function Gallery() {
  const imageCount = 6;
  const imageNumbers = Array.from({ length: imageCount }, (_, i) => i + 1);
  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <main className="gallery">
      <h1 className="gallery__title">Gallery</h1>
      <div id="gallery__wrapper">
        {imageNumbers.map((num) => (
          <img
            key={num}
            className="gallery__image"
            src={`${apiUrl}images/gallery/gallery_${num}.jpg`}
            alt={`gallery-image-${num}`}
          />
        ))}
      </div>
    </main>
  );
}

export default Gallery;
