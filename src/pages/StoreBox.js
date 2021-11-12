import styled from 'styled-components';

import StoreBoxTable from '../components/amenities/StoreBoxTable';
import { Wrapper } from '../components/styles/Authorization';
import PageTitle from '../components/styles/PageTitle';

const StoreBoxBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StoreBox = () => {
  return (
    <Wrapper>
      <StoreBoxBox>
        <PageTitle>물품보관함 위치</PageTitle>
        <StoreBoxTable />
      </StoreBoxBox>
    </Wrapper>
  );
}

export default StoreBox;