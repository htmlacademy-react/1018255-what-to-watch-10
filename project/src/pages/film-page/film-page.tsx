import React from 'react';
import Header from '../../components/header/header';
import PageContent from '../../components/page-content/page-content';
import Films from '../../components/films/films';
import FilmOverview from '../../components/film-overview/film-overview';
import FilmDetails from '../../components/film-details/film-details';
import Reviews from '../../components/reviews/reviews';
import { FilmType } from '../../types/films-type';
import { UserType } from '../../types/user-type';
import { ReviewType } from '../../types/review-type';

type FilmPageProps = {
  user: UserType,
  activeFilm: FilmType,
  films: FilmType[],
  reviews: ReviewType[],
}

function FilmPage({user, activeFilm, films, reviews}: FilmPageProps): JSX.Element {
  const {name, previewImage, genre, released} = activeFilm;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={previewImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header avatarUrl={user.avatarUrl} />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
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
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a className="film-nav__link" href='https://ru.reactjs.org/docs/getting-started.html'>Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a className="film-nav__link" href='https://ru.reactjs.org/docs/getting-started.html'>Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a className="film-nav__link" href='https://ru.reactjs.org/docs/getting-started.html'>Reviews</a>
                  </li>
                </ul>
              </nav>

              <FilmOverview activeFilm={activeFilm}/>
              <FilmDetails activeFilm={activeFilm}/>
              <Reviews reviews={reviews}/>

            </div>
          </div>
        </div>
      </section>

      <PageContent>
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <Films films={films}/>
        </section>
      </PageContent>
    </>
  );
}

export default FilmPage;
