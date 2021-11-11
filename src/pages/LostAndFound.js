import styled from 'styled-components';

import LostAndFoundTable from '../components/amenities/LostAndFoundTable';
import { Wrapper } from '../components/styles/Authorization';
import PageTitle from '../components/styles/PageTitle';

const LostAndFoundBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LostAndFound = () => {
  return (
    <Wrapper>
      <LostAndFoundBox>
        <PageTitle>유실물센터 목록</PageTitle>
        <LostAndFoundTable />
      </LostAndFoundBox>
    </Wrapper>
  );
}

export default LostAndFound;