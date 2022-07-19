import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { film, films } from './mocks/films';
import { user } from './mocks/user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      user={user}
      promoFilm={film}
      films={films}
    />
  </React.StrictMode>,
);
