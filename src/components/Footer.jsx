// Footer.jsx
import React from 'react';
import './css/Footer.css'
<script src="https://kit.fontawesome.com/beecd152d2.js" crossorigin="anonymous"></script>

function Footer() {
  return (
    <footer>
      {/* <h1>Find oHarlequinn here as well!</h1> */}
      {/* <p>Find oHarlequinn here as well!</p> */}
      <p>Adipiscing Elit. Vivamus Hendrerit Sit</p>

    
      <nav>
      <div className="social-links">
        <a href="https://www.youtube.com/@oHarlequinn" target="_blank" className="social-btn">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com/oharle.draws" target="_blank" className="social-btn">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://tiktok.com/@oHarlequinn" target="_blank" className="social-btn">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
      </nav>

    </footer>
  );
}

export default Footer;