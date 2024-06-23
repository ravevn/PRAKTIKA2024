import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="back-arrow">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </a>
        <a href="#" className="profile-icon">
          <FontAwesomeIcon icon={faUser} />
        </a>
      </div>
    </header>
  );
}

export default Header;