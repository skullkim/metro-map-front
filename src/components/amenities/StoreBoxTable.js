import {useEffect, useState} from 'react';

import { Api } from '../../lib/customAxios';
import { ServerPath } from '../../lib/dataPath';
import { ListTable, ListTitle, TableData, TableRow } from '../styles/Table';


const StoreBoxTable = () => {
  // eslint-disable-next-line no-unused-vars
  const [storeBoxList, setStoreBoxList] = useState([]);

  useEffect(() => {
    Api({
      method: 'GET',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}${ServerPath.getStoreBoxList}`,
    })
      .then(({data: {data}}) => {
        setStoreBoxList(data);
      })
      .catch(err => err);
  }, []);

  return (
    <ListTable>
      <thead>
        <tr>
          <ListTitle>역</ListTitle>
        </tr>
      </thead>
      <tbody>
        <TableRow>
          <TableData>203</TableData>
        </TableRow>
      </tbody>
    </ListTable>
  )
}

export default StoreBoxTable;