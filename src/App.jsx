import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import BookNow from "./pages/BookNow/BookNow";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import setHamburgerState from "./components/Hamburger/Hamburger";
import Footer from "./components/Footer/Footer";
import ServiceDetails from "./components/Booking/ServiceDetails/ServiceDetails";
import Timeslot from "./components/Booking/Timeslot/Timeslot";

function App() {
  const [currentServices, setCurrentServices] = useState([]);
  setHamburgerState(false);
  return (
    <>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/booknow"
            element={
              <BookNow
                currentServices={currentServices}
                setCurrentServices={setCurrentServices}
              />
            }
          />
          <Route
            path="/service-details"
            element={
              <ServiceDetails
                currentServices={currentServices}
                setCurrentServices={setCurrentServices}
              />
            }
          />
          <Route path="/timeslot" element={<Timeslot />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
