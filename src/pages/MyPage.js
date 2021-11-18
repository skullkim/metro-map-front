import { useFormik } from 'formik';
import {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';

import { Wrapper } from '../components/styles/Authorization';
import PageTitle from '../components/styles/PageTitle';
import { Warning } from '../components/styles/ResultMessage';
import { InputBox, SubmitButton } from '../components/styles/UserComplainMyPageInput';
import TokenApi from '../lib/customAxios';
import { ClientPath, getChangeUserInformationUrl, getUserEmailUrl } from '../lib/dataPath';
import { getUserInfo, removeUserInfo } from '../lib/localStorage';
import { maxLen, regExp, warning } from '../lib/validateUserInfo';
import indexStore from '../stores/indexStore';

const MyPageBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyPage = () => {
  const userInfo = getUserInfo();
  const {Login} = indexStore();
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');
  const [currentFocused, setCurrentFocused] = useState('');

  useEffect(() => {
    TokenApi({
      method: 'GET',
      url: `${getUserEmailUrl(userInfo.userId)}`,
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`
      }
    })
      .then(({data: {data: {email}}}) => {
        setUserEmail(email);
      })
      .catch(err => err);
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      previousPassword: '',
      newPassword: '',
      verifyNewPassword: '',
    },
    validationSchema: yup.object({
      email: yup.string()
        .matches(regExp.email, {message: `${warning.invalidEmail}`})
        .max(maxLen, `${warning.maxLen}`),
      previousPassword: yup.string()
        .matches(regExp.password, {message: `${warning.invalidPassword}`})
        .max(maxLen, `${warning.maxLen}`),
      newPassword: yup.string()
        .matches(regExp.password, {message: `${warning.invalidPassword}`})
        .max(maxLen, `${warning.maxLen}`),
      verifyNewPassword: yup.string()
        .matches(regExp.password, {message: `${warning.invalidPassword}`})
        .max(maxLen, `${warning.maxLen}`)
        .oneOf([yup.ref('newPassword')], `${warning.verifyNewPasswordNotEqual}`)
    }),
    onSubmit: ({email, previousPassword, newPassword}) => {
      TokenApi({
        method: 'PUT',
        url: `${getChangeUserInformationUrl()}`,
        headers: {
          Authorization: `Bearer ${userInfo.accessToken}`,
        },
        data: {
          email, previousPassword, newPassword
        }
      })
        .catch(err => err)
        .finally(() => {
          removeUserInfo();
          Login.setUserId('');
          history.push(ClientPath.findPath);
        });
    }
  });

  const handleChange = (event) => {
    formik.handleChange(event);
  }

  const handleBlur = (event) => {
    const {target: {name}} = event;
    setCurrentFocused(name);
    formik.handleBlur(event);
  }

  const handleClick = (event) => {
    event.preventDefault();
    formik.handleSubmit();
  }

  return (
    <Wrapper>
      <MyPageBox>
        <PageTitle>나의 정보 수정</PageTitle>
        {userEmail ?
          <>
            <InputBox
              type='text'
              name='email'
              placeholder={userEmail}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formik.touched.email && formik.errors.email && currentFocused === 'email' ?
              <Warning>{formik.errors.email}</Warning> :
              null
            }
            <InputBox
              type='password'
              name='previousPassword'
              placeholder='기존 비밀번호'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formik.touched.previousPassword && formik.errors.previousPassword && currentFocused === 'previousPassword' ?
              <Warning>{formik.errors.previousPassword}</Warning> :
              null
            }
            <InputBox
              type='password'
              name='newPassword'
              placeholder='새로운 비밀번호'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formik.touched.newPassword && formik.errors.newPassword && currentFocused === 'newPassword' ?
              <Warning>{formik.errors.newPassword}</Warning> :
              null
            }
            <InputBox
              type='password'
              name='verifyNewPassword'
              placeholder='비밀번호 확인'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formik.touched.verifyNewPassword && formik.errors.verifyNewPassword && currentFocused === 'verifyNewPassword' ?
              <Warning>{formik.errors.verifyNewPassword}</Warning> :
              null
            }
            <SubmitButton type='submit' onClick={handleClick}>
              나의 정보 수정하기
            </SubmitButton>
          </> : null
        }
      </MyPageBox>
    </Wrapper>
  );
}

export default MyPage;