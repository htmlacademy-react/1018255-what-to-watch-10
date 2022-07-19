import React from 'react';
import { FilmType } from '../../types/films-type';

type FilmOverviewProps = {
  activeFilm: FilmType,
}

function FilmOverview({activeFilm}: FilmOverviewProps): JSX.Element {
  const {rating, description, director, starring} = activeFilm;
  const actors = `${starring.join(', ')} and other`;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {actors}</strong></p>
      </div>
    </>
  );
}

export default FilmOverview;
