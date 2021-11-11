import styled from 'styled-components';

import { Wrapper } from '../components/styles/Authorization';
import PageTitle from '../components/styles/PageTitle';
import { ListTable, ListTitle, TableData, TableRow } from '../components/styles/Table';

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
        <ListTable>
          <thead>
            <ListTitle>역</ListTitle>
            <ListTitle>전화번호</ListTitle>
            <ListTitle>운영시간</ListTitle>
          </thead>
          <tbody>
            <TableRow>
              <TableData>105</TableData>
              <TableData>12-345-6789</TableData>
              <TableData>09:00~18:00</TableData>
            </TableRow>
          </tbody>
        </ListTable>
      </LostAndFoundBox>
    </Wrapper>
  );
}

export default LostAndFound;