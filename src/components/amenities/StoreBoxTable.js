import { ListTable, ListTitle, TableData, TableRow } from '../styles/Table';


const StoreBoxTable = () => {
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