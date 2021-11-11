import { ListTable, ListTitle, TableData, TableRow } from '../styles/Table';

const LostAndFoundTable = () => {
  return (
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
  );
}

export default LostAndFoundTable;