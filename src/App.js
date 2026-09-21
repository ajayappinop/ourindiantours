import React from "react";
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import News from './pages/News';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Tours from './pages/Tours';
import TigersTour from "./pages/TigersTour";
import GreatIndianBustardTour from "./pages/GreatIndianBustardTour";
import RannofKutchh from "./pages/RannofKutchh";
import WesternGhatsBirdTour from "./pages/WesternGhatsBirdTour";


function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/greatindianbustardtour" element={<GreatIndianBustardTour />} />
          <Route path="/tours/rannofkutchh" element={<RannofKutchh />} />
          <Route path="/tours/tigerstour" element={<TigersTour />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/tours/westernghatsbirdtours" element={<WesternGhatsBirdTour />} />

          {/* Redirect old capitalized URLs so refresh/bookmarks still work */}
          <Route path="/About" element={<Navigate to="/about" replace />} />
          <Route path="/Testimonials" element={<Navigate to="/testimonials" replace />} />
          <Route path="/Contact" element={<Navigate to="/contact" replace />} />
          <Route path="/Tours" element={<Navigate to="/tours" replace />} />
          <Route path="/Services" element={<Navigate to="/services" replace />} />
          <Route path="/News" element={<Navigate to="/news" replace />} />
          <Route path="/Tours/greatindianbustardtour" element={<Navigate to="/tours/greatindianbustardtour" replace />} />
          <Route path="/Tours/rannofkutchh" element={<Navigate to="/tours/rannofkutchh" replace />} />
          <Route path="/Tours/tigerstour" element={<Navigate to="/tours/tigerstour" replace />} />
          <Route path="/Tours/westernghatsbirdtours" element={<Navigate to="/tours/westernghatsbirdtours" replace />} />

          {/* Unknown paths go home instead of blank page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
