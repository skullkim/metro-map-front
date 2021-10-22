// import  {useFormik} from "formik";
// import {useCallback, useState} from 'react';
// import * as yup from 'yup';
//
// import {
//   Form,
//   Input,
//   InputTitle,
//   LinkMessage,
//   PageTitle,
//   SubmitBtn,
//   Wrapper
// } from "../components/styles/Authorization";
// import { Warning, Success } from "../components/styles/ResultMessage";
// import { Api } from "../lib/customAxios";
// import { ClientPath, ServerPath } from "../lib/dataPath";
// import { maxLen, regExp, warning } from "../lib/validateUserInfo";




import ValidateUserAccount from '../components/user/ValidateUserAccount';
import { authData } from '../lib/authenticateData';

const SignUp = () => {
  return <ValidateUserAccount authData={authData.signUp} />
};

export default SignUp;
