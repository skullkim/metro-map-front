export const ServerPath = {
  minPath: '/path/',
  minPathStopover: '/path/stopover/',
  signUp: '/authentication/signup',
  emailVerification: '/authentication/signup/email',
  emailReauthorization: '/authentication/signup/email/reauthorization',
  signIn: '/authentication/signin',
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
  mainLogo: '/logo.svg',
};
Object.freeze(ImagePath);