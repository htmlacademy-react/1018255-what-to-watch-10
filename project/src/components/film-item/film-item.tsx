import React from 'react';
// import { FilmType } from '../../types/films-type';

type FilmItemProps = {
  name: string,
  previewImage: string,
}

function FilmItem({name, previewImage}: FilmItemProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

export default FilmItem;
