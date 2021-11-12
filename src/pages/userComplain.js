import styled, {css} from 'styled-components';

import { SubmitBtn, Wrapper } from '../components/styles/Authorization';
import PageTitle from '../components/styles/PageTitle';

const ComplainInfoInputStyle = css`
  height: 58px;
  border: 3px solid #2867B2;
  border-radius: 10px;
  margin-top: 15px;
  font-size: 20px;
`;

const UserComplainBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputEmail = styled.input`
  width: 473px;
  ${ComplainInfoInputStyle}
`
const SelectSubwayLine = styled.select`
  width: 482px;
  ${ComplainInfoInputStyle}
`;

const ComplainContext = styled.textarea`
  height: 232px;
  width: 473px;
  border: 3px solid #2867B2;
  border-radius: 10px;
  margin-top: 15px;
`;

const SubmitButton = styled(SubmitBtn)`
  width: 482px;
  font-size: 20px;
  margin-top: 30px;
`;

const UserComplain = () => {
  return (
    <Wrapper>
      <UserComplainBox>
        <PageTitle>소중한 의견을 남겨주세요</PageTitle>
        <InputEmail type='text' placeholder='이메일을 입력해 주세요'/>
        <SelectSubwayLine>
          <option value=''>지하철 라인을 선택해 주세요</option>
          <option value='1'>1호선</option>
          <option value='2'>2호선</option>
          <option value='3'>3호선</option>
          <option value='4'>4호선</option>
          <option value='5'>5호선</option>
          <option value='6'>6호선</option>
          <option value='7'>7호선</option>
          <option value='8'>8호선</option>
          <option value='9'>9호선</option>
        </SelectSubwayLine>
        <ComplainContext />
        <SubmitButton>민원 접수하기</SubmitButton>
      </UserComplainBox>
    </Wrapper>
  );
}

export default UserComplain;