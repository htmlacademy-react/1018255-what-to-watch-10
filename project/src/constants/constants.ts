export const Settings = {
  NUMBER_OF_OFFERS: 20,
  NUMBER_OF_REVIEWS: 6,
  NUMBER_OF_GENRES: 9,
  NUMBER_OF_STARS: 10,
};

export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
