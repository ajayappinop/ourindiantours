import React from "react";
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
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
          <Route path="/Services" element={<Services />} />
          <Route path="/News" element={<News />} />
          <Route path="/tours/westernghatsbirdtours" element={<WesternGhatsBirdTour />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
