import styled from 'styled-components';

import { ModalBox, CommonModalBox, DataTitle, ModalTitle } from '../CommonModal';
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

const StartArriveTitle = styled(DataTitle)`
  margin-top: 30px;
  align-self: center;
  font-size: 20px;
`;

const HistoryBox = styled.section`
  height: 200px;
  width: 200px;
  position: relative;
  top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${DataTitle} {
    margin-top: 15px;
    margin-right: 10px;
  }
`;

const DataBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
`;

const CloseButton = styled.section`
  position: relative;
  top: 100px;
`;

const SearchHistoryModal = () => {
  return (
    <CommonModalBox>
      <ModalBox>
        <ModalTitleBox>
          <ModalTitle>최근 검색 내역</ModalTitle>
          <StartArriveTitle>출발역 / 도착역</StartArriveTitle>
        </ModalTitleBox>
        <HistoryBox>
          <DataBox>
            <DataTitle>120--&gt;806</DataTitle>
            <img src='img/bookmark.svg' alt='bookmark' />
          </DataBox>
          <DataBox>
            <DataTitle>120--&gt;806</DataTitle>
            <img src='img/unbookmark.svg' alt='bookmark' />
          </DataBox>
          <DataBox>
            <DataTitle>120--&gt;806</DataTitle>
            <img src='img/bookmark.svg' alt='bookmark' />
          </DataBox>
          <DataBox>
            <DataTitle>120--&gt;806</DataTitle>
            <img src='img/bookmark.svg' alt='bookmark' />
          </DataBox>
          <DataBox>
            <DataTitle>120--&gt;806</DataTitle>
            <img src='img/bookmark.svg' alt='bookmark' />
          </DataBox>
          <DataBox>
            <DataTitle>120--&gt;806</DataTitle>
            <img src='img/bookmark.svg' alt='bookmark' />
          </DataBox>
          <DataBox>
            <DataTitle>120--&gt;806</DataTitle>
            <img src='img/bookmark.svg' alt='bookmark' />
          </DataBox>
        </HistoryBox>
        <CloseButton>
          <ModalCloseButton />
        </CloseButton>
      </ModalBox>
    </CommonModalBox>
  )
}

export default SearchHistoryModal;