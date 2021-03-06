import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import PageContent from '../../components/page-content/page-content';
import Genre from '../../components/genre/genre';
import Films from '../../components/films/films';
import { FilmType } from '../../types/films-type';
import { UserType } from '../../types/user-type';
import { Settings } from '../../constants/constants';

type MainPageProps = {
  user: UserType,
  promoFilm: FilmType,
  films: FilmType[],
}

function renderGenre(genre: string): JSX.Element {
  return (
    <Genre
      genre={genre}
      key={genre}
    />
  );
}

function MainPage({user, promoFilm, films}: MainPageProps): JSX.Element {
  const genres = [...new Set(films.map((film) => film.genre))].slice(0, Settings.NUMBER_OF_GENRES);
  const genreList = genres.map((genre: string) => renderGenre(genre));

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.previewImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header avatarUrl={user.avatarUrl}/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageContent>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <Link className="catalog__genres-link" to="#">All genres</Link>
            </li>

            {genreList}
          </ul>

          <Films films={films}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
      </PageContent>
    </>
  );
}

export default MainPage;
