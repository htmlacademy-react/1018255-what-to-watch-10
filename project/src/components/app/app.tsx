import MainPage from '../../pages/main-page/main-page';
import { FilmType } from '../../types/films-type';
import { UserType } from '../../types/user-type';

type AppProps = {
  user: UserType,
  promoFilm: FilmType,
  films: FilmType[],
}

function App({user, promoFilm, films}: AppProps): JSX.Element {
  return (
    <MainPage user={user} promoFilm={promoFilm} films={films}/>
  );
}

export default App;
