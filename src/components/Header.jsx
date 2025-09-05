import React from 'react';
import logoImage from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg p-0 navbar-dark" aria-label="Main Navigation">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/" aria-label="Visit Home Page - Our Indian Tours">
            <img src={logoImage} alt="Our Indian Tours Logo" />
          </Link>

          {/* Mobile Toggle */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation menu" >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/testimonials">Testimonials</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="" id="toursDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
                  Tours <i className="fas fa-chevron-down" aria-hidden="true"></i>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="toursDropdown">
                  <li><Link className="dropdown-item" to="/tours">All Tours</Link></li>
                  <li><Link className="dropdown-item" to="/tours/greatindianbustardtour">Great Indian Bustard Tour</Link></li>
                  <li><Link className="dropdown-item" to="/tours/rannofkutchh">Rann of Kutchh</Link></li>
                  <li><Link className="dropdown-item" to="/tours/tigerstour">Tiger Tour</Link></li>
                  <li><Link className="dropdown-item" to="/tours/westernghatsbirdtours">Western Ghats Bird Tour</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>

              {/* Social Media Icons */}
              <li
                className="nav-item d-none d-lg-flex border-start border-1 border-light ps-md-5 ms-md-5 d-flex align-items-center gap-4"
                aria-label="Social Media Links"
              >
                <Link to="#" className="text-white" aria-label="Follow us on Facebook">
                  <i className="fab fa-facebook-f" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="text-white" aria-label="Follow us on Twitter">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="text-white" aria-label="Follow us on Instagram">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="text-white" aria-label="Subscribe to our YouTube channel">
                  <i className="fab fa-youtube" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
