import "./Gallery.scss";

function Gallery() {
  const imageCountNails = 8;
  const imageCountLashes = 5;

  const imageNumbersNails = Array.from(
    { length: imageCountNails },
    (_, i) => i + 1
  );
  const imageNumbersLashes = Array.from(
    { length: imageCountLashes },
    (_, i) => i + 1
  );

  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <main className="gallery">
      <h1 className="gallery__title">Gallery</h1>
      <div id="gallery__wrapper">
        {imageNumbersNails.map((num) => (
          <img
            key={num}
            className="gallery__image"
            src={`/images/gallery/nails_${num}.jpg`}
            alt={`gallery-image-nails-${num}`}
          />
        ))}
        {imageNumbersLashes.map((num) => (
          <img
            key={num}
            className="gallery__image"
            src={`/images/gallery/lashes_${num}.jpg`}
            alt={`gallery-image-lashes-${num}`}
          />
        ))}
      </div>
    </main>
  );
}

export default Gallery;
