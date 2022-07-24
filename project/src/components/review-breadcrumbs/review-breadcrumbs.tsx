import React from 'react';
import { Link } from 'react-router-dom';

type ReviewBreadcrumbsProps = {
  nameActiveFilm: string,
}

function ReviewBreadcrumbs({nameActiveFilm}: ReviewBreadcrumbsProps): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to="/films/:id">{nameActiveFilm}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to="/films/:id/review">Add review</Link>
        </li>
      </ul>
    </nav>
  );
}

export default ReviewBreadcrumbs;
