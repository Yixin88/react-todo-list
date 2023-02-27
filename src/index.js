import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TaskContext from './context/TaskContext';
import Counter from './context/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskContext>
      <Counter>
        <App />
      </Counter>
    </TaskContext>
  </React.StrictMode>
);