import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskListPage from './components/TaskList/TaskList';
import HomePage from './components/Home/Home.js'; 
import Form from './components/Form/Form.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
    
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/task-list" element={<TaskListPage />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;