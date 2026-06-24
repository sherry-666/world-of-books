import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/app.css';
import App from './App';
import AuthorMap from './AuthorMap';
import GlobeApp from './GlobeApp';
import GlobeAuthorMap from './GlobeAuthorMap';

const path = location.pathname;
const isAuthorMap    = path.startsWith('/authors');
const isGlobeAuthors = path.startsWith('/globe/authors');
const isGlobe        = path.startsWith('/globe') && !isGlobeAuthors;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isAuthorMap    ? <AuthorMap />      :
     isGlobeAuthors ? <GlobeAuthorMap /> :
     isGlobe        ? <GlobeApp />       :
                      <App />}
  </StrictMode>,
);
