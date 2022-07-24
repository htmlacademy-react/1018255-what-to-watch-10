import React from 'react';
import Header from '../../components/header/header';
import RatingStar from '../../components/rating-star/rating-star';
import ReviewBreadcrumbs from '../../components/review-breadcrumbs/review-breadcrumbs';
import { UserType } from '../../types/user-type';
import { FilmType } from '../../types/films-type';
import { Settings } from '../../constants/constants';

type AddReviewPageProps = {
  user: UserType,
  activeFilm: FilmType,
}

function renderRatingStar(value: number): JSX.Element {
  return (
    <RatingStar
      key={`star-${value}`}
      value={value}
    />
  );
}

function AddReviewPage({user, activeFilm}: AddReviewPageProps): JSX.Element {
  const values = [...Array(Settings.NUMBER_OF_STARS).keys()].map((value) => (value += 1));
  const ratingStars = values.map((value: number) => renderRatingStar(value));

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header avatarUrl={user.avatarUrl} >
          <ReviewBreadcrumbs nameActiveFilm={activeFilm.name}/>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">

          <div className="rating">
            <div className="rating__stars">
              {ratingStars}
            </div>
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
