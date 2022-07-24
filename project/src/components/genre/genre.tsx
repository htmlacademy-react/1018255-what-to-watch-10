import React from 'react';
import { Link } from 'react-router-dom';

type GenreProps = {
  genre: string,
}

function Genre({genre}: GenreProps): JSX.Element {
  return (
    <li className="catalog__genres-item">
      <Link className="catalog__genres-link" to='/'>{genre}</Link>
    </li>
  );
}

export default Genre;
