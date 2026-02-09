// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import './styles.css';
import './i18n';

// Force the visible URL back to the root once the SPA loads.
// This ensures the address bar is always https://aiaestheticapp.netlify.app
try {
  if (typeof window !== 'undefined' && window.location.pathname !== '/') {
    window.history.replaceState(null, '', '/');
  }
} catch {
  // no-op: if history API isn't available, just ignore
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </React.StrictMode>
);
