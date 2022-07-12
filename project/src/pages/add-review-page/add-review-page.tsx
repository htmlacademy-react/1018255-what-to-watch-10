import React from 'react';
import Header from '../../components/header/header';
import { UserType } from '../../types/user-type';
import { FilmType } from '../../types/films-type';

type AddReviewPageProps = {
  user: UserType,
  activeFilm: FilmType,
}

function renderStarsRating() {
  return (
    <div className="rating__stars">
      {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((item) => (
        <React.Fragment key={item}>
          <input
            className="rating__input"
            type="radio"
            name="rating"
            id={`star-${item}`}
            value={item}
          />
          <label
            className="rating__label"
            htmlFor={`star-${item}`}
          >
            Rating {item}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}

function AddReviewPage({user, activeFilm}: AddReviewPageProps): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header avatarUrl={user.avatarUrl}>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href='https://ru.reactjs.org/docs/getting-started.html'>Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">

          <div className="rating">
            {renderStarsRating()}
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>

        </form>
      </div>
    </section>
  );
}

export default AddReviewPage;
