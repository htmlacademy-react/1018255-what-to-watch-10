import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import FilmPage from '../../pages/film-page/film-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { ReviewType } from '../../types/review-type';
import { FilmType } from '../../types/films-type';
import { UserType } from '../../types/user-type';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../constants/constants';

type AppProps = {
  user: UserType,
  promoFilm: FilmType,
  activeFilm: FilmType,
  films: FilmType[],
  favoriteFilms: FilmType[],
  reviews: ReviewType[],
  }

function App({user, promoFilm, activeFilm, films, favoriteFilms, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage
              user={user}
              promoFilm={promoFilm}
              films={films}
            />
          }
        />

        <Route
          path={AppRoute.Login}
          element={<SignInPage /> }
        />

        <Route
          path="/films/:id"
          element={
            <FilmPage
              user={user}
              activeFilm={activeFilm}
              films={films}
              reviews={reviews}
            />
          }
        />

        <Route
          path="/player/:id"
          element={
            <PlayerPage />
          }
        />

        <Route
          path="/films/:id/review"
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <AddReviewPage
                user={user}
                activeFilm={activeFilm}
              />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListPage
                user={user}
                favoriteFilms={films}
              />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            <NotFoundPage />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
