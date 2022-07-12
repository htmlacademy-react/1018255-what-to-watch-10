import React from 'react';
import FilmItem from '../../components/film-item/film-item';
import { FilmType, FilmsType } from '../../types/films-type';

type FilmsListProps = {
  films: FilmsType,
}

function renderFilmItems({name, previewImage}: FilmType): JSX.Element {
  return (
    <FilmItem
      name={name}
      previewImage={previewImage}
      key={name}
    />
  );
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const filmItems = films.map((film: FilmType) => renderFilmItems(film));

  return (
    <div className="catalog__films-list">
      {filmItems}
    </div>
  );
}

export default FilmsList;
