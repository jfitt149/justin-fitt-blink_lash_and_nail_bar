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

function App() {
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
          <Route path="/booknow" element={<BookNow />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
