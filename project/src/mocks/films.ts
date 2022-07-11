import { FilmType } from '../types/films-type';
import { getUniqItem, getAnyItem } from '../utils/get-item';
import { nameFilms, previewImages, genres} from './auxiliary';
import { Settings } from '../constants/constants';

function generateFilm() {
  return {
    'id': 1,
    'name': getUniqItem(nameFilms),
    'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'previewImage': getUniqItem(previewImages),
    'backgroundImage': 'img/the-grand-budapest-hotel-bg.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://some-link',
    'previewVideoLink': 'https://some-link',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes friend of Gustave and protege.',
    'rating': 8.9,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray'
    ],
    'runTime': 99,
    'genre': getAnyItem(genres),
    'released': 2014,
    'isFavorite': false,
  };
}

export const film: FilmType = generateFilm();
export const films: FilmType[] = new Array(Settings.NUMBER_OF_OFFERS).fill(undefined).map(() => generateFilm());
