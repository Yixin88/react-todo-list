import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TaskContext from './context/TaskContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskContext>
      <App />
    </TaskContext>
  </React.StrictMode>
);