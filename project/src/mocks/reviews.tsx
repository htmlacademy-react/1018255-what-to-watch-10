import { ReviewType } from '../types/reviews-type';
import { getRandomArbitrary, getUniqItem, getAnyItem } from '../utils/get-item';
import { comments, usersName} from './auxiliary';
import { Settings } from '../constants/constants';


function generateReview(): ReviewType {
  return {
    'comment': getUniqItem(comments),
    'date': 'Tue Jul 12 2022 13:48:14 GMT+0300 (Москва, стандартное время)',
    'id': 1,
    'rating': getRandomArbitrary(0, 10),
    'user': {
      'id': 4,
      'name': getAnyItem(usersName)
    }
  };
}

export const reviews: ReviewType[] = new Array(Settings.NUMBER_OF_REVIEWS).fill(undefined).map(() => generateReview());
