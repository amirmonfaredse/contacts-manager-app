import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import "react-confirm-alert/src/react-confirm-alert.css"
import 'react-toastify/dist/ReactToastify.css';
import ErrorUnknownProblem from './components/errors/ErrorUnknownProblem';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='contacts-manager-app'>
      <HelmetProvider>
        <ErrorBoundary FallbackComponent={ErrorUnknownProblem}>
          <App />
        </ErrorBoundary>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);


