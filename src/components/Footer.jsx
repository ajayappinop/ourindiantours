import React from 'react';

function Footer() {
  return (
    <footer className="text-white py-5">
      <div className="container">
        <nav aria-label="Social media links">
          <ul className="socialmedia list-inline d-flex mb-5">
            <li className="list-inline-item">
              <a
                href="https://www.facebook.com"
                className="text-white"
                aria-label="Follow us on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.twitter.com"
                className="text-white"
                aria-label="Follow us on Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.instagram.com"
                className="text-white"
                aria-label="Follow us on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.youtube.com"
                className="text-white"
                aria-label="Subscribe to our YouTube channel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Footer navigation">
          <ul className="footeremnu list-unstyled d-flex flex-wrap mb-5">
            <li><a href="/" className="text-white text-decoration-none">Home</a></li>
            <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
            <li><a href="/testimonials" className="text-white text-decoration-none">Testimonials</a></li>
            <li><a href="/tours" className="text-white text-decoration-none">Tours</a></li>
            <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
            <li><a href="/news" className="text-white text-decoration-none">News</a></li>
            <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
          </ul>
        </nav>
      <div className="copyright text-center">
              © 2025 Our Indian Tours. All Rights Reserved.
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
