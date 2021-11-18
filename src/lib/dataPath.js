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
  searchHistoryBookmark: '/search-history/bookmark',
  getUserBookMark: '/bookmark/user',
  deleteUserBookMarkBaseUrl: '/bookmark',
  deleteUserBookMarkUrl: '/user',
  getLostAndFoundLost: '/amenities/lost-and-found',
  getStoreBoxList: '/amenities/store-box',
  sendUserComplain: '/amenities/user-complain',

  userBaseUrl: '/user',
  getUserEmailUrl: '/email',
  changeUserInformation: '/user-information'
};
Object.freeze(ServerPath);

export const getDeleteUserBookMarkUrl = (bookmarkId, userId) => {
  return `${process.env.REACT_APP_SERVER_ORIGIN}${ServerPath.deleteUserBookMarkBaseUrl}/${bookmarkId}${ServerPath.deleteUserBookMarkUrl}/${userId}`;
}

export const getUserEmailUrl = (userId) => {
  return `${process.env.REACT_APP_SERVER_ORIGIN}${ServerPath.userBaseUrl}/${userId}${ServerPath.getUserEmailUrl}`;
}

export const getChangeUserInformationUrl = (userId) => {
  return `${process.env.REACT_APP_SERVER_ORIGIN}${ServerPath.userBaseUrl}/${userId}${ServerPath.changeUserInformation}`;
}

export const ClientPath = {
  findPath: '/',
  signUp: '/signup',
  signIn: '/signin',
  emailVerification: '/signup/email',
  emailReauthorization: '/signup/email/reauthorization',
  myPage: '/user/',
  logOut: '/logout',
  bookmark: '/bookmark',
  lostAndFound: '/lost-and-found',
  storeBox: '/store-box',
  userComplain: '/complain',
}
Object.freeze(ClientPath);

export const ImagePath = {
  mainLogo: '/img/logo.svg',
  closeSearchPathModal: '/img/closeSearchPathModal.svg',
};
Object.freeze(ImagePath);