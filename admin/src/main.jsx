import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  // Correct import
import { BrowserRouter } from 'react-router-dom'; // For routing
import App from './App.jsx';  // Make sure your App component is correctly referenced
import './index.css';

// Create root and render
const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);  // Correct usage of createRoot
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );

