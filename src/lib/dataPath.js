export const ServerPath = {
  minPath: '/path/',
  minPathStopover: '/path/stopover/',
  signUp: '/authentication/signup',
  emailVerification: '/authentication/signup/email',
  emailReauthorization: '/authentication/signup/email/reauthorization',
  signIn: '/authentication/signin',
  logOut: '/authentication/logout',
  reissuingAccessToken: '/authentication/refresh-token',
  searchHistory: '/search-history/user',
  searchHistoryBookmark: '/search-history/bookmark'
};
Object.freeze(ServerPath);

export const ClientPath = {
  findPath: '/',
  signUp: '/signup',
  signIn: '/signin',
  emailVerification: '/signup/email',
  emailReauthorization: '/signup/email/reauthorization',
  myPage: '/user/',
  logOut: '/logout',
}
Object.freeze(ClientPath);

export const ImagePath = {
  mainLogo: '/img/logo.svg',
};
Object.freeze(ImagePath);