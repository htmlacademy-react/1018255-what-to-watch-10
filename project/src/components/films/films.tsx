import React from 'react';
import Film from '../film/film';
import { FilmType } from '../../types/films-type';

type FilmsListProps = {
  films: FilmType[],
}

function renderFilm({name, previewImage}: FilmType): JSX.Element {
  return (
    <Film
      name={name}
      previewImage={previewImage}
      key={name}
    />
  );
}

function Films({films}: FilmsListProps): JSX.Element {
  const filmItems = films.map((film: FilmType) => renderFilm(film));

  return (
    <div className="catalog__films-list">
      {filmItems}
    </div>
  );
}

export default Films;
