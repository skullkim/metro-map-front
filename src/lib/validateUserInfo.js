export const maxLen = 30;

export const warning = {
  invalidEmail: '유효하지 않은 이메입니다',
  emptyEmail: '이메일을 입력해 주세요',
  invalidPassword: '비밀번호는 8자리 이상, 특수문자, 숫자, 알파벳을 포함해야 합니다',
  emptyPassword: '비밇번호를 입력해 주세요',
  verifyPasswordNotEqual: '비밀번호와 일치하지 않습니다',
  maxLen: `${maxLen}이하여야 합니다`
}
Object.freeze(warning);

export const regExp = {
  email: /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
}
Object.freeze(regExp);
