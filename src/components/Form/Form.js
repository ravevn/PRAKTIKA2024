import React, { useState } from 'react';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Form() {
  const [showModal1, setShowModal1] = useState(false); 
  const [showModal2, setShowModal2] = useState(false); 

  const handleSubmit = () => {
   
    setShowModal1(true); 
  };

  const handleContinue = () => {
    setShowModal1(false); 
    setShowModal2(true); 
  };

  return (
    <div className="form-container">
      <div className="task-header">
        <div className="task-icon">
          <FontAwesomeIcon icon={faEdit} />
        </div>
        <div className="task-title">
          <h3>Задание 1</h3>
          <h2>НАЗВАНИЕ ЗАДАНИЯ</h2>
        </div>
        <Link to="/"> 
          <button className="close-button">
            <span>✕</span>
          </button>
        </Link>
      </div>
      <div className="task-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua?
        </p>
      </div>
      <div className="task-input">
        <label htmlFor="answer">Ваш ответ:</label>
        <textarea id="answer" placeholder="Введите ваш ответ" />
      </div>
      <button className="submit-button" onClick={handleSubmit}>Отправить</button>

     
      {showModal1 && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">
                <h2>Спасибо за ответ!</h2>
              </div>
            </div>
            <div className="modal-body">
              <p>
                Наш HR его проверяет и в скором времени вам откроется доступ к следующему этапу.
              </p>
            </div>
            <div className="modal-footer">
              <button className="modal-button" onClick={handleContinue}>
                Продолжить
              </button>
            </div>
          </div>
        </div>
      )}

    
      {showModal2 && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">
                <h2>Поздравляем!</h2>
              </div>
            </div>
            <div className="modal-body">
              <p>
                Поздравляем, вы завершили обучение! Давайте закрепим знания итоговым
                тестированием.
              </p>
            </div>
            <div className="modal-footer">
              <button className="modal-button" onClick={() => setShowModal2(false)}>
                Перейти к тестированию
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;