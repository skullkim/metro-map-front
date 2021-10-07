import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  top: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageTitle = styled.h1`
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputTitle = styled.label`
  margin-top: 1em;
`;

const SignInput = styled.input`
  height: 3em;
  width: 17em;
  border: 0;
  border-radius: 0.75em;
  box-shadow: 0.2em 0.2em 0.2em #e2e2e2;
  margin-right: 0.75em;
  margin-top: 0.5em;
  font-size: 1em;
  background-color: #dfe8f3;
  padding: 0 1em;
  &:focus {
    outline: 0.1em solid #2867b2;
  }
`;

const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5em;
  height: 3em;
  color: white;
  background-color: #2867b2;
  border: 0;
  border-radius: 1em;
  font-weight: bold;
  font-size: 1em;
  margin-top: 2em;
  cursor: pointer;
  &:hover {
    background-color: #002f67;
    transition: 0.25s;
  }
`;

const LinkMessage = styled(NavLink)`
  margin-top: 1em;
  font-size: 0.75em;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #2867b2;
    text-decoration: underline;
    transition: 0.25s;
  }
`;

const SignIn = () => {
  return (
    <Wrapper>
      <Form>
        <PageTitle>로그인</PageTitle>
        <InputTitle>이메일</InputTitle>
        <SignInput type='email' />
        <InputTitle>비밀번호</InputTitle>
        <SignInput type='password' />
        <SubmitBtn>로그인</SubmitBtn>
        <LinkMessage to='/sign-up'>회원이 아니신가요? 가입하세요</LinkMessage>
      </Form>
    </Wrapper>
  );
};

export default SignIn;
