import  {useFormik} from "formik";
import {useCallback, useState} from 'react';
import * as yup from 'yup';

import {
  Form,
  Input,
  InputTitle,
  LinkMessage,
  PageTitle,
  SubmitBtn,
  Wrapper
} from "../components/styles/Authorization";
import { Warning, Success } from "../components/styles/ResultMessage";
import { Api } from "../lib/customAxios";
import { ClientPath, ServerPath } from "../lib/dataPath";
import { maxLen, regExp, warning } from "../lib/validateUserInfo";




const SignUp = () => {
  const [currentFocused, setCurrentFocused] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      verifyPassword: '',
    },
    validationSchema: yup.object({
      email: yup.string()
        .required(`${warning.emptyEmail}`)
        .matches(regExp.email, {message: `${warning.invalidEmail}`})
        .max(maxLen, `${warning.maxLen}`),

      password: yup.string()
        .required(`${warning.emptyPassword}`)
        .matches(regExp.password, {message: `${warning.invalidPassword}`})
        .max(maxLen, `${warning.maxLen}`),

      verifyPassword: yup.string()
        .required(`${warning.emptyPassword}`)
        .matches(regExp.password, {message: `${warning.invalidPassword}`})
        .max(maxLen, `${warning.maxLen}`)
        .oneOf([yup.ref('password')], `${warning.verifyPasswordNotEqual}`)
    }),
    onSubmit: ({email, password}) => {
      Api({
        method: 'POST',
        url: `${process.env.REACT_APP_SERVER_ORIGIN}${ServerPath.signUp}`,
        data: {email, password}
      })
        .then(({data: {data: {message}}}) => {
          setSuccessMessage(message);
        })
        .catch(err => {
          const {response: {status, data: {error: {message}}}} = err;
          if(status === 400) {
            setErrorMessage(message);
            return;
          }
          return err;
        })
    }
  });

  const handleChange = useCallback((event) => {
    formik.handleChange(event);
  }, []);

  const handleClick = useCallback((event) => {
    event.preventDefault();
    formik.handleSubmit();
  }, []);

  const handleBlur = (event) => {
    const {target: {name}} = event;
    setCurrentFocused(name);
    formik.handleBlur(event);
  };

  return (
    <Wrapper>
      <Form>
        <PageTitle>회원가입</PageTitle>

        <InputTitle>이메일</InputTitle>
        <Input
          type='text'
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {formik.touched.email && formik.errors.email && currentFocused === 'email' ?
          <Warning>{formik.errors.email}</Warning> :
          null
        }

        <InputTitle>비밀번호</InputTitle>
        <Input
          type='password'
          name='password'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {formik.touched.password && formik.errors.password && currentFocused === 'password' ?
          <Warning>{formik.errors.password}</Warning> :
          null
        }

        <InputTitle>비밀번호 확인</InputTitle>
        <Input
          type='password'
          name='verifyPassword'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {formik.touched.verifyPassword && formik.errors.verifyPassword && currentFocused === 'verifyPassword' ?
          <Warning>{formik.errors.verifyPassword}</Warning> :
          null
        }

        <SubmitBtn type='submit' onClick={handleClick}>회원가입</SubmitBtn>
        <LinkMessage to={ClientPath.signIn}>회원이신가요? 로그인하세요</LinkMessage>
        <LinkMessage to={ClientPath.emailReauthorization}>회원인증메일 재발송</LinkMessage>
        {successMessage ? <Success>{successMessage}</Success> : null}
        {errorMessage ? <Warning>{errorMessage}</Warning> : null}
      </Form>
    </Wrapper>
  );
};

export default SignUp;
