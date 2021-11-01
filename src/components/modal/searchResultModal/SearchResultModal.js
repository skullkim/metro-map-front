import styled from 'styled-components';

import { ModalBox, CommonModalBox, ModalTitle } from '../CommonModal';
import ModalCloseButton from "../ModalCloseButton";

import SearchResultData from "./SearchResultData";

const SearchResultModalBox = styled(ModalBox)`
  justify-content: space-evenly;
`;

const SearchResultModal = () => {
  return (
    <CommonModalBox>
      <SearchResultModalBox>
        <ModalTitle>검색 결과</ModalTitle>
        <SearchResultData />
        <ModalCloseButton />
      </SearchResultModalBox>
    </CommonModalBox>
  );
}

export default SearchResultModal;