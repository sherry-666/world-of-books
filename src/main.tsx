import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/app.css';
import App from './App';
import AuthorMap from './AuthorMap';

const isAuthorMap = location.pathname.startsWith('/authors');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isAuthorMap ? <AuthorMap /> : <App />}
  </StrictMode>,
);
