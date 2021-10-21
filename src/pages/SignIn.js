import {
  Form,
  Input,
  InputTitle,
  LinkMessage,
  PageTitle,
  SubmitBtn,
  Wrapper,
} from '../components/styles/Authorization';
import { ClientPath } from '../lib/dataPath';


const SignIn = () => {
  return (
    <Wrapper>
      <Form>
        <PageTitle>로그인</PageTitle>
        <InputTitle>이메일</InputTitle>
        <Input type='text' />
        <InputTitle>비밀번호</InputTitle>
        <Input type='password' />
        <SubmitBtn>로그인</SubmitBtn>
        <LinkMessage to={ClientPath.signUp}>회원이 아니신가요? 가입하세요</LinkMessage>
        <LinkMessage to={ClientPath.emailReauthorization}>회원인증메일 재발송</LinkMessage>
      </Form>
    </Wrapper>
  );
};

export default SignIn;
