import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/app.css';
import GlobeApp from './GlobeApp';
import GlobeAuthorMap from './GlobeAuthorMap';

const path = location.pathname;
const isAuthorMap = path.startsWith('/authors') || path.startsWith('/globe/authors');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isAuthorMap ? <GlobeAuthorMap /> : <GlobeApp />}
  </StrictMode>,
);
