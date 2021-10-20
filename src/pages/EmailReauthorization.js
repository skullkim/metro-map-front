import {useFormik} from "formik";
import {useCallback, useState} from 'react';
import * as yup from 'yup';

import {Wrapper, PageTitle, Form, InputTitle, Input, SubmitBtn} from "../components/styles/Authorization";
import { Success, Warning } from "../components/styles/ResultMessage";
import { Api } from "../lib/customAxios";
import { ServerPath } from "../lib/dataPath";
import { maxLen, regExp, warning } from "../lib/validateUserInfo";

const EmailReauthorization = () => {
  const [currentFocused, setCurrentFocused] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object({
      email: yup.string()
        .required(`${warning.emptyEmail}`)
        .matches(regExp.email, {message: `${warning.invalidEmail}`})
        .max(maxLen, `${warning.maxLen}`),
    }),
    onSubmit: ({email}) => {
      Api({
        method: 'POST',
        url: `${process.env.REACT_APP_SERVER_ORIGIN}${ServerPath.emailReauthorization}`,
        data: {email}
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
        <PageTitle>인증 이메일 재발송</PageTitle>
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
        <SubmitBtn type='submit' onClick={handleClick}>인증 이메일 재발송</SubmitBtn>
        {successMessage ? <Success>{successMessage}</Success> : null}
        {errorMessage ? <Warning>{errorMessage}</Warning> : null}
      </Form>
    </Wrapper>
  )
}

export default EmailReauthorization;