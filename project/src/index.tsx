import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { film, films } from './mocks/films';
import { user } from './mocks/user';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App user={user} promoFilm={film} activeFilm={film} films={films} favoriteFilms={films} reviews={reviews}/>
  </React.StrictMode>,
);
