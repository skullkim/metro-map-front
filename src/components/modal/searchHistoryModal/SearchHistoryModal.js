import styled from 'styled-components';

import { ModalBox, CommonModalBox, ModalTitle } from '../CommonModal';
import ModalCloseButton from '../ModalCloseButton';

const ModalTitleBox = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  position: relative;
  top: 20px;
  
  ${ModalTitle} {
    align-self: center;
  }
`;

const StartArriveTitle = styled.th`
  align-self: center;
  font-size: 20px;
  font-weight: bold;
`;

const HistoryTable = styled.table`
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


const CloseButton = styled.section`
  position: relative;
  top: 50px;
`;

const SearchHistoryModal = () => {
  return (
    <CommonModalBox>
      <ModalBox>
        <ModalTitleBox>
          <ModalTitle>최근 검색 내역</ModalTitle>
        </ModalTitleBox>
        <HistoryTable bold='1'>
          <thead>
            <tr>
              <StartArriveTitle>최소비용</StartArriveTitle>
              <StartArriveTitle>출발역 / 도착역</StartArriveTitle>
              <StartArriveTitle>경유지</StartArriveTitle>
              <StartArriveTitle>즐겨찾기</StartArriveTitle>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <TableData>
                시간
              </TableData>
              <TableData>
                120--&gt;806
              </TableData>
              <TableData>
                102
              </TableData>
              <TableData>
                <img src='img/bookmark.svg' alt='bookmark' />
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                시간
              </TableData>
              <TableData>
                120--&gt;806
              </TableData>
              <TableData>
                102
              </TableData>
              <TableData>
                <img src='img/bookmark.svg' alt='bookmark' />
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                시간
              </TableData>
              <TableData>
                120--&gt;806
              </TableData>
              <TableData>
                102
              </TableData>
              <TableData>
                <img src='img/bookmark.svg' alt='bookmark' />
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                시간
              </TableData>
              <TableData>
                120--&gt;806
              </TableData>
              <TableData>
                102
              </TableData>
              <TableData>
                <img src='img/bookmark.svg' alt='bookmark' />
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                시간
              </TableData>
              <TableData>
                120--&gt;806
              </TableData>
              <TableData>
                102
              </TableData>
              <TableData>
                <img src='img/bookmark.svg' alt='bookmark' />
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                시간
              </TableData>
              <TableData>
                120--&gt;806
              </TableData>
              <TableData>
                X
              </TableData>
              <TableData>
                <img src='img/unbookmark.svg' alt='bookmark' />
              </TableData>
            </TableRow>
          </tbody>
        </HistoryTable>
        <CloseButton>
          <ModalCloseButton />
        </CloseButton>
      </ModalBox>
    </CommonModalBox>
  )
}

export default SearchHistoryModal;