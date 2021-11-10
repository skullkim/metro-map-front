import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SearchStationOption } from '../../lib/subwayData';

const PathListTitle = styled.th`
  align-self: center;
  font-size: 20px;
  font-weight: bold;
`;

const PathListTable = styled.table`
  height: 300px;
  width: 400px;
  position: relative;
  top: 30px;
`;


const TableData = styled.td`
  height: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 20px
`;

const TableRow = styled.tr`
  height: 10px;
`;


const PathTable = ({pathLists, handleClick}) => {
  return (
    <PathListTable>
      <thead>
        <tr>
          <PathListTitle>최소비용</PathListTitle>
          <PathListTitle>출발역 / 도착역</PathListTitle>
          <PathListTitle>경유지</PathListTitle>
          <PathListTitle>즐겨찾기</PathListTitle>
        </tr>
      </thead>
      <tbody>
        {pathLists.length ? pathLists.map(({id, from, to, stopover, target, bookmark}) => {
          const bookmarkLogoUrl = `/img/${bookmark ? 'bookmark.svg' : 'unbookmark.svg'}`;
          const pathInfo = {id, from, to, stopover, target};
          return (
            <TableRow key={id} onClick={(event) => handleClick(event, pathInfo)}>
              <TableData>
                {SearchStationOption[target]}
              </TableData>
              <TableData>
                {from}--&gt;{to}
              </TableData>
              <TableData>
                {stopover || 'X'}
              </TableData>
              <TableData className='bookmark'>
                <img src={bookmarkLogoUrl} alt='bookmark' className='bookmark' />
              </TableData>
            </TableRow>
          );
        }) : null}
      </tbody>
    </PathListTable>
  );
}

PathTable.propTypes = {
  pathLists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    stopover: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    bookmark: PropTypes.bool,
  })).isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default PathTable;