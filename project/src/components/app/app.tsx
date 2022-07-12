import MainPage from '../../pages/main-page/main-page';
// import FilmPage from '../../pages/film-page/film-page';
// import MyListPage from '../../pages/my-list-page/my-list-page';
// import SignInPage from '../../pages/sign-in-page/sign-in-page';
// import AddReviewPage from '../../pages/add-review-page/add-review-page';
// import PlayerPage from '../../pages/player-page/player-page';
import { FilmType, FilmsType } from '../../types/films-type';
import { UserType } from '../../types/user-type';
import { ReviewsType } from '../../types/reviews-type';

type AppProps = {
  user: UserType,
  promoFilm: FilmType,
  activeFilm: FilmType,
  films: FilmsType,
  favoriteFilms: FilmsType,
  reviews: ReviewsType,
}

function App({user, promoFilm, activeFilm, films, favoriteFilms, reviews}: AppProps): JSX.Element {
  return (
    <MainPage user={user} promoFilm={promoFilm} films={films}/>
    // <FilmPage user={user} activeFilm={activeFilm} films={films} reviews={reviews}/>
    // <MyListPage user={user} favoriteFilms={films}/>
    // <SignInPage />
    // <AddReviewPage user={user} activeFilm={activeFilm}/>
    // <PlayerPage />
  );
}

export default App;
