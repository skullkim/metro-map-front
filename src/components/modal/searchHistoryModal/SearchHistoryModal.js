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
`;

const HistoryBox = styled.section`
  height: 200px;
  width: 200px;
  position: relative;
  top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${DataTitle} {
    margin-top: 10px;
  }
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
          <DataTitle>120--&gt;806</DataTitle>
          <DataTitle>120--&gt;806</DataTitle>
          <DataTitle>120--&gt;806</DataTitle>
          <DataTitle>120--&gt;806</DataTitle>
          <DataTitle>120--&gt;806</DataTitle>
          <DataTitle>120--&gt;806</DataTitle>
          <DataTitle>120--&gt;806</DataTitle>
        </HistoryBox>
        <CloseButton>
          <ModalCloseButton />
        </CloseButton>
      </ModalBox>
    </CommonModalBox>
  )
}

export default SearchHistoryModal;