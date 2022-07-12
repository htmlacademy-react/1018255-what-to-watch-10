import { FilmType } from '../types/films-type';
import { getUniqItem, getAnyItem } from '../utils/get-item';
import { nameFilms, previewImages, genres} from './auxiliary';
import { Settings } from '../constants/constants';

function generateFilm(): FilmType {
  return {
    'id': 1,
    'name': getUniqItem(nameFilms),
    'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'previewImage': getUniqItem(previewImages),
    'backgroundImage': 'img/the-grand-budapest-hotel-bg.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://some-link',
    'previewVideoLink': 'https://some-link',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes friend of Gustave and protege.Gustave prides himself on providing first-class service to the guests of hotel, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave`s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    'rating': 8.9,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
    ],
    'runTime': 99,
    'genre': getAnyItem(genres),
    'released': 2014,
    'isFavorite': false,
  };
}

export const film: FilmType = generateFilm();
export const films: FilmType[] = new Array(Settings.NUMBER_OF_OFFERS).fill(undefined).map(() => generateFilm());
