import React from 'react';
import { FilmType } from '../../types/films-type';

type FilmDetailsProps = {
  activeFilm: FilmType,
}

function FilmDetails({activeFilm}: FilmDetailsProps): JSX.Element {
  const {director, starring, genre, released, runTime} = activeFilm;
  const actors = starring.map((star) => <div key={star}>{star}</div>);

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <div className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <div className="film-card__details-value">
            {actors}
          </div>
        </div>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmDetails;
