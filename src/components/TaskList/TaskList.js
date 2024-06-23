import React from 'react';
import './TaskList.css'; 
import Header from '../Header/Header.js'; 
import Footer from '../Footer/Footer.js'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClock, faCircle } from '@fortawesome/free-solid-svg-icons';

function TaskList() {
  return (
    <div className="task-list-page">
      <Header /> 
      <div className="content-wrapper"> {/* Новый контейнер для центрирования */}
        <div className="title">
          <h1>НАЗВАНИЕ ВАКАНСИИ</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <ul className="tasks">
          <li className="task first">
            <div className="task-status done">
              <div className="status-icon">
                <FontAwesomeIcon icon={faCircle} /> 
              </div>
            </div>
            <div className="task-content">
              <h3>НАЗВАНИЕ ЗАДАНИЯ</h3>
              <p>Задание выполнено</p>
              <button className="view-task">Посмотреть задание</button>
            </div>
            <div className="task-line top"></div>
          </li>
          <li className="task">
            <div className="task-status pending">
              <div className="status-icon">
                <FontAwesomeIcon icon={faCircle} /> 
              </div>
            </div>
            <div className="task-content">
              <h3>НАЗВАНИЕ ЗАДАНИЯ</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="status-task">
                Задание проверяется
                <FontAwesomeIcon icon={faClock} className="clock-icon" /> {/* Часы внутри кнопки */}
              </button>
            </div>
            <div className="task-line middle"></div>
          </li>
          <li className="task">
            <div className="task-status available">
              <div className="status-icon">
                <FontAwesomeIcon icon={faCircle} /> 
              </div>
            </div>
            <div className="task-content">
              <h3>НАЗВАНИЕ ЗАДАНИЯ</h3>
              <button className="view-task gray">Посмотреть задание</button> {/* Серый цвет */}
            </div>
            <div className="task-line middle"></div>
          </li>
          <li className="task">
            <div className="task-status available">
              <div className="status-icon">
                <FontAwesomeIcon icon={faCircle} /> 
              </div>
            </div>
            <div className="task-content">
              <h3>НАЗВАНИЕ ЗАДАНИЯ</h3>
              <button className="view-task gray">Посмотреть задание</button> {/* Серый цвет */}
            </div>
            <div className="task-line middle"></div>
          </li>
          <li className="task">
            <div className="task-status available">
              <div className="status-icon">
                <FontAwesomeIcon icon={faCircle} /> 
              </div>
            </div>
            <div className="task-content">
              <h3>НАЗВАНИЕ ЗАДАНИЯ</h3>
              <button className="view-task gray">Посмотреть задание</button> {/* Серый цвет */}
            </div>
            <div className="task-line middle"></div>
          </li>
        </ul>
      </div>
      <Footer /> 
    </div>
  );
}

export default TaskList;