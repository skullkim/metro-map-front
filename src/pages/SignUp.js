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
import WarningMessage from "../components/styles/WarningMessage";
import { Api } from "../lib/customAxios";
import {Path} from '../lib/dataServerPath';
import { maxLen, regExp, warning } from "../lib/validateUserInfo";




const SignUp = () => {
  const [currentFocused, setCurrentFocused] = useState('');
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
        url: `${process.env.REACT_APP_SERVER_ORIGIN}${Path.signUp}`,
        data: {email, password}
      })
        .then((data) => {
          // eslint-disable-next-line no-console
          console.log(data);
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        })
    }
  });

  const handleChange = useCallback((event) => {
    formik.handleChange(event);
  }, []);

  const handleClick = useCallback(() => {
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
          <WarningMessage>{formik.errors.email}</WarningMessage> :
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
          <WarningMessage>{formik.errors.password}</WarningMessage> :
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
          <WarningMessage>{formik.errors.verifyPassword}</WarningMessage> :
          null
        }

        <SubmitBtn onClick={handleClick}>회원가입</SubmitBtn>
        <LinkMessage to='/sign-in'>회원이신가요? 로그인하세요</LinkMessage>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
