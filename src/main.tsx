import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/app.css';
import App from './App';
import AuthorMap from './AuthorMap';
import GlobeApp from './GlobeApp';

const path = location.pathname;
const isAuthorMap = path.startsWith('/authors');
const isGlobe     = path.startsWith('/globe');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isAuthorMap ? <AuthorMap /> : isGlobe ? <GlobeApp /> : <App />}
  </StrictMode>,
);
