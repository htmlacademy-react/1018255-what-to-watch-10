import React from 'react';

type GenreItemProps = {
  genreItem: string,
}

function GenreItem({genreItem}: GenreItemProps): JSX.Element {
  return (
    <li className="catalog__genres-item">
      <a className="catalog__genres-link" href='https://ru.reactjs.org/docs/getting-started.html'>{genreItem}</a>
    </li>
  );
}

export default GenreItem;
