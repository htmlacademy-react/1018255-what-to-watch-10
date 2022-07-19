import React from 'react';

type GenreProps = {
  genre: string,
}

function Genre({genre}: GenreProps): JSX.Element {
  return (
    <li className="catalog__genres-item">
      <a className="catalog__genres-link" href='https://ru.reactjs.org/docs/getting-started.html'>{genre}</a>
    </li>
  );
}

export default Genre;
