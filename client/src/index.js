
import React from 'react'; // Importing the React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering components
import './index.css'; // Importing CSS file for styling
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals'; // Importing web vitals reporting function

// Creating a root React DOM container using createRoot() and specifying the element with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component inside the root container
root.render(
  // Wrapping the App component inside React.StrictMode for strict mode features
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Logging web vitals data to console or sending to analytics endpoint
reportWebVitals();
