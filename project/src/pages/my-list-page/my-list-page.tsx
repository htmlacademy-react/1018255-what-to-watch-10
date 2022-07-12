import React from 'react';
import Header from '../../components/header/header';
import FilmsList from '../../components/films-list/films-list';
import { FilmsType } from '../../types/films-type';
import { UserType } from '../../types/user-type';

type MyListPageProps = {
  favoriteFilms: FilmsType,
  user: UserType,
}

function MyListPage({favoriteFilms, user}: MyListPageProps): JSX.Element {
  return (
    <div className="user-page">
      <Header avatarUrl={user.avatarUrl}>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favoriteFilms}/>
      </section>

    </div>
  );
}

export default MyListPage;
