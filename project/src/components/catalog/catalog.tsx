import React from 'react';
import GenreItem from '../genre-item/genre-item';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
import { FilmsType } from '../../types/films-type';

type CatalogProps = {
  films: FilmsType,
}

function renderGenreItems(genreItem: string): JSX.Element {
  return (
    //активному элементу устанавливается catalog__genres-item--active
    <GenreItem
      genreItem={genreItem}
      key={genreItem}
    />
  );
}

function Catalog({films}: CatalogProps): JSX.Element {
  const genres = Array.from(new Set(films.map((film) => film.genre))).slice(0, 9);
  // genres.unshift('All genres');
  const genreItems = genres.map((genre: string) => renderGenreItems(genre));

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a className="catalog__genres-link" href='https://ru.reactjs.org/docs/getting-started.html'>All genres</a>
          </li>

          {genreItems}
        </ul>

        <FilmsList films={films}/>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Catalog;

