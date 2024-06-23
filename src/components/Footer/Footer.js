import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <p>©  ЦирюльникЪ. Все права защищены</p>
      </div>
      <div className="icons">
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faVk} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;