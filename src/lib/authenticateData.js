import { ClientPath, ServerPath } from './dataPath';

export const authType = {
  signUp: 'signUp',
  emailReauthorization: 'email',
  signIn: 'signIn',
};
Object.freeze(authType);

export const authData = {
  signUp: {
    type: authType.signUp,
    title: '회원가입',
    LinkMessage1: '회원이신가요? 로그인하세요',
    LinkMessage2: '회원인증메일 발송',
    LinkMessage1Path: ClientPath.signIn,
    LinkMessage2Path: ClientPath.emailReauthorization,
    submitBtn: '회원가입',
  },
  emailReauthorization: {
    type: authType.emailReauthorization,
    title: '인증 이메일 재발송',
    LinkMessage1: '',
    LinkMessage2: '',
    LinkMessage1Path: '',
    LinkMessage2Path: '',
    submitBtn: '회원인증메일 재발송',
  },
  signIn: {
    type: authType.signIn,
    title: '로그인',
    LinkMessage1: '회원이 아니신가요? 가입하세요',
    LinkMessage2: '회원인증메일 발송',
    LinkMessage1Path: ClientPath.signUp,
    LinkMessage2Path: ClientPath.emailReauthorization,
    submitBtn: '로그인'
  }
}

export const getAuthenticateUrl = (authenticateType) => {
  switch(authenticateType) {
    case authType.signUp:
      return `${process.env.REACT_APP_SERVER_ORIGIN}${ServerPath.signUp}`;
    case authType.emailReauthorization:
      return `${process.env.REACT_APP_SERVER_ORIGIN}${ServerPath.emailReauthorization}`;
    case authType.signIn:
      return `${process.env.REACT_APP_SERVER_ORIGIN}${ServerPath.signIn}`;
    default:
      throw new Error('invalid authenticateType');
  }
}