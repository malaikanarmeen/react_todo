import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TodosProvider } from './store/todos';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <TodosProvider>
      <App />
    </TodosProvider>
    </BrowserRouter>
  </React.StrictMode>
);
