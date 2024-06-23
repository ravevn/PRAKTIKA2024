import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Импортируем Link и useNavigate
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import './Home.css';
import Form from '../Form/Form.js';

function Home() {
  const [selectedCity, setSelectedCity] = useState('Калининград');
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); 

  const cities = ['Калининград', 'Москва', 'Санкт-Петербург', 'Екатеринбург', 'Новосибирск', 'Владивосток'];

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setShowDropdown(false);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="hero">
          <div className="hero-image">
            <img src="./images/man.png" />
          </div>
          <div className="text-content">
            <h1 className="title">Lorem ipsum</h1>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <Link to="/task-list" className="primary-button">Приступить к обучению</Link>
        <h2 className="vacancy-title">Вакансии</h2>
        <p className="vacancy-description">Актуальные вакансии в салонах ЦирюльникЪ</p>
        <div className="location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <div className="city-dropdown">
            <div
              className="city-dropdown-button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {selectedCity}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 5l7 7-7 7"></path>
              </svg>
            </div>
            {showDropdown && (
              <ul className="city-dropdown-list">
                <li>
                  <input
                    type="text"
                    placeholder="Найти город"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                  />
                </li>
                {filteredCities.map((city) => (
                  <li key={city} onClick={() => handleCityChange(city)}>
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="vacancies-list">
          <div className="vacancy">
            <h3 className="vacancy-name">Женский парикмахер</h3>
            <ul className="vacancy-details">
              <li>Советский проспект, 2а</li>
            </ul>
            <button className="primary-button" onClick={() => navigate('/form')}>Пройти обучение</button> {/* Используем navigate */}
          </div>
          <div className="vacancy">
            <h3 className="vacancy-name">Мужской парикмахер</h3>
            <ul className="vacancy-details">
              <li>Советский проспект, 2а</li>
            </ul>
            <button className="primary-button" onClick={() => navigate('/form')}>Пройти обучение</button> {/* Используем navigate */}
          </div>
          <div className="vacancy">
            <h3 className="vacancy-name">Администратор</h3>
            <ul className="vacancy-details">
              <li>Советский проспект, 2а</li>
            </ul>
            <button className="primary-button" onClick={() => navigate('/form')}>Пройти обучение</button> {/* Используем navigate */}
          </div>
          <div className="vacancy">
            <h3 className="vacancy-name">Промоутер</h3>
            <ul className="vacancy-details">
              <li>Советский проспект, 2а</li>
            </ul>
            <button className="primary-button" onClick={() => navigate('/form')}>Пройти обучение</button> {/* Используем navigate */}
          </div>
          <div className="vacancy">
            <h3 className="vacancy-name">Мастер маникюра</h3>
            <ul className="vacancy-details">
              <li>Советский проспект, 2а</li>
            </ul>
            <button className="primary-button" onClick={() => navigate('/form')}>Пройти обучение</button> {/* Используем navigate */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;