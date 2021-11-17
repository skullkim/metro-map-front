import {useEffect, useState} from 'react';
import styled from 'styled-components';

import { Wrapper } from '../components/styles/Authorization';
import PageTitle from '../components/styles/PageTitle';
import { InputBox, SubmitButton } from '../components/styles/UserComplainMyPageInput';
import TokenApi from '../lib/customAxios';
import { getUserEmailUrl } from '../lib/dataPath';
import { getUserInfo } from '../lib/localStorage';

const MyPageBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyPage = () => {
  const userInfo = getUserInfo();
  const [userEmail, setUserEmail] = useState('');

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


  return (
    <Wrapper>
      <MyPageBox>
        <PageTitle>나의 정보 수정</PageTitle>
        {userEmail ?
          <>
            <InputBox type='text' placeholder={userEmail} />
            <InputBox type='password' placeholder='기존 비밀번호'/>
            <InputBox type='password' placeholder='새로운 비밀번호'/>
            <InputBox type='password' placeholder='비밀번호 확인'/>
            <SubmitButton>나의 정보 수정하기</SubmitButton>
          </> : null
        }
      </MyPageBox>
    </Wrapper>
  );
}

export default MyPage;