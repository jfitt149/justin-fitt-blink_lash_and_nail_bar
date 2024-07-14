import "./Testimonials.scss";
import { ElfsightWidget } from "react-elfsight-widget";

function Testimonials() {
  return (
    <>
      <main className="testimonials">
        <h2 className="tesimonials__subheader">Testimonials</h2>
        <ElfsightWidget
          className="testimonials__widget"
          widgetId="cb022cc8-f98b-4a82-a52c-19e536246f45"
        ></ElfsightWidget>
      </main>
    </>
  );
}

export default Testimonials;
