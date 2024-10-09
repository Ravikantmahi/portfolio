import React from 'react'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id='contact'>
      <div className="footer-container">
        <p>&copy; 2024 Your Ravikant. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="https://www.instagram.com/ravikantmahi011/profilecard/?igsh=ajQ1Zjg3ZmpsYnQ3" target="_blank">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/ravi-k-049bba285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/Ravikantmahi" target="_blank">Github</a></li>
          <li><a href="https://www.geeksforgeeks.org/user/ravikantmahi/" target="_blank">GFG</a></li>
          <li><a href="https://replit.com/@Ravikantmahi" target="_blank">Replit</a></li>
          <li><a href="https://www.facebook.com/ravikantmahi011" target="_blank">Facebook</a></li>
          <li><a href="mailto:ravikantmahi011@gmail.com">ravikantmahi011@gmail.com</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
