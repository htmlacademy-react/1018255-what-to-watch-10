import React from 'react';
import { Link } from 'react-router-dom';

type FilmProps = {
  name: string,
  previewImage: string,
}

function Film({name, previewImage}: FilmProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="/films/:id">{name}</Link>
      </h3>
    </article>
  );
}

export default Film;
