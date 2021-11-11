import {useEffect} from 'react';

import { Api } from '../../lib/customAxios';
import { ServerPath } from '../../lib/dataPath';
import { ListTable, ListTitle, TableData, TableRow } from '../styles/Table';

const LostAndFoundTable = () => {

  useEffect(() => {
    Api({
      method: 'GET',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}${ServerPath.getLostAndFoundLost}`,
    })
      .then(({data: {data}}) => {
        // eslint-disable-next-line no-console
        console.log(data);
      })
      .catch(err => err);
  })

  return (
    <ListTable>
      <thead>
        <tr>
          <ListTitle>역</ListTitle>
          <ListTitle>전화번호</ListTitle>
          <ListTitle>운영시간</ListTitle>
        </tr>
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