import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
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
import ContactDetails from "./components/Booking/ContactDetails/ContactDetails";
import ConfirmBooking from "./components/Booking/ConfirmBooking/ConfirmBooking";

function App() {
  // const [currentServices, setCurrentServices] = useState([]);
  const [serviceItems, setServiceItems] = useState([]);
  const [cancel, setCancel] = useState([]);
  const [location, setLocation] = useState([]);
  const [staff, setStaff] = useState([]);
  const [bookingId, setBookingId] = useState([]);

  setHamburgerState(false);

  const serverUrl = import.meta.env.VITE_API_URL;

  const getServiceItems = async () => {
    try {
      const response = await axios.get(serverUrl + "services");
      setServiceItems(response.data.items);
      setCancel(response.data.cancel);
    } catch (error) {
      console.log(error);
    }
  };

  const getLocation = async () => {
    try {
      const response = await axios.get(serverUrl + "locations");
      setLocation(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getStaff = async () => {
    try {
      const response = await axios.get(serverUrl + "staff");
      setStaff(response.data.teamMembers[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServiceItems();
    getLocation();
    getStaff();
  }, []);

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
                serviceItems={serviceItems}
                cancel={cancel}
                location={location}
                staff={staff}
              />
            }
          />
          <Route
            path="/availability/:staffId/:serviceVariationId"
            element={
              <Timeslot
                serviceItems={serviceItems}
                cancel={cancel}
                location={location}
                staff={staff}
                bookingId={bookingId}
              />
            }
          ></Route>
          <Route
            path="/contactDetails"
            element={
              <ContactDetails serviceItems={serviceItems} staff={staff} />
            }
          ></Route>
          <Route
            path="/booking/:bookingId"
            element={
              <ConfirmBooking
                location={location}
                staff={staff}
                serviceItems={serviceItems}
              />
            }
          ></Route>
          {/* <Route
            path="/service-details"
            element={
              <ServiceDetails
                currentServices={currentServices}
                setCurrentServices={setCurrentServices}
              />
            }
          />
          <Route path="/timeslot" element={<Timeslot />}></Route> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
