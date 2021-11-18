export const maxLen = 30;
export const minLen = 10;
export const maxComplainContextLen = 300;

export const warning = {
  invalidEmail: '유효하지 않은 이메입니다',
  emptyEmail: '이메일을 입력해 주세요',
  invalidPassword: '비밀번호는 8자리 이상, 특수문자, 숫자, 알파벳을 포함해야 합니다',
  emptyPassword: '비밇번호를 입력해 주세요',
  verifyPasswordNotEqual: '비밀번호와 일치하지 않습니다',
  verifyNewPasswordNotEqual: '새로운 비밀번호와 일치하지 않습니다',
  maxLen: `${maxLen}이하여야 합니다`,
  emptySubwayLine: '지하철 호선을 선택해 주세요',
  invalidSubwayLine: '지하철 호선이 잘못되었습니다',
  emptyComplainContext: '민원 내용이 비어있습니다',
  complainContextIsTooShort: '민원 내용은 10글자 이상이여야 합니다',
  complainContextIsTooLong: '민원 내용은 300글자 미만이여야 합니다',
}
Object.freeze(warning);

export const regExp = {
  email: /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
  subwayLine: /[1-9]/,
}
Object.freeze(regExp);