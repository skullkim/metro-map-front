import {useEffect, useState} from 'react';
import styled from 'styled-components';

import TokenApi from '../../../lib/customAxios';
import { ServerPath } from '../../../lib/dataPath';
import { getUserInfo } from '../../../lib/localStorage';
import { SearchStationOption } from '../../../lib/subwayData';
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
  const [searchHistory, setSearchHistory] = useState([]);
  const {userId, accessToken} = getUserInfo();

  useEffect(() => {
    TokenApi({
      method: 'GET',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}${ServerPath.searchHistory}/${userId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    })
      .then(({data: {data: {search_history: userSearchHistory}}}) => {
        setSearchHistory(userSearchHistory);
      })
      .catch(err => err);
  }, []);

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
            {searchHistory.length ? searchHistory.map(({id, from, to, stopover, target, bookmark}) => {
              const bookmarkLogoUrl = `img/${bookmark ? 'bookmark.svg' : 'unbookmark.svg'}`;
              return (
                <TableRow key={id}>
                  <TableData>
                    {SearchStationOption[target]}
                  </TableData>
                  <TableData>
                    {from}--&gt;{to}
                  </TableData>
                  <TableData>
                    {stopover || 'X'}
                  </TableData>
                  <TableData>
                    <img src={bookmarkLogoUrl} alt='bookmark' />
                  </TableData>
                </TableRow>
              )
            }) : null}
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