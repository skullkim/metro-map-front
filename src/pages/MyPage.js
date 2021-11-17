import styled from 'styled-components';

import { Wrapper } from '../components/styles/Authorization';
import PageTitle from '../components/styles/PageTitle';
import { InputBox, SubmitButton } from '../components/styles/UserComplainMyPageInput';

const MyPageBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyPage = () => {
  return (
    <Wrapper>
      <MyPageBox>
        <PageTitle>나의 정보 수정</PageTitle>
        <InputBox type='text' />
        <InputBox type='password' placeholder='기존 비밀번호'/>
        <InputBox type='password' placeholder='새로운 비밀번호'/>
        <InputBox type='password' placeholder='비밀번호 확인'/>
        <SubmitButton>나의 정보 수정하기</SubmitButton>
      </MyPageBox>
    </Wrapper>
  );
}

export default MyPage;