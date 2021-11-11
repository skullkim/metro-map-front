import {useEffect, useState} from 'react';

import { Api } from '../../lib/customAxios';
import { ServerPath } from '../../lib/dataPath';
import { ListTable, ListTitle, TableData, TableRow } from '../styles/Table';

const LostAndFoundTable = () => {
  const [lostAndFoundList, setLostAndFoundList] = useState([]);

  useEffect(() => {
    Api({
      method: 'GET',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}${ServerPath.getLostAndFoundLost}`,
    })
      .then(({data: {data}}) => {
        setLostAndFoundList(data);
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
        {lostAndFoundList.length ?
          lostAndFoundList.map(({id, station, callNumber, operatingHour}) => (
            <TableRow key={id}>
              <TableData>{station}</TableData>
              <TableData>{callNumber}</TableData>
              <TableData>{operatingHour}</TableData>
            </TableRow>
          )) : null
        }
        
      </tbody>
    </ListTable>
  );
}

export default LostAndFoundTable;