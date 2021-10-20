
import { CommonModalBox, ModalTitle } from "../CommonModal";
import ModalCloseButton from "../ModalCloseButton";

import SearchResultData from "./SearchResultData";

const SearchResultModal = () => {
  return (
    <CommonModalBox>
      <>
        <ModalTitle>검색 결과</ModalTitle>
        <SearchResultData />
        <ModalCloseButton />
      </>
    </CommonModalBox>
  );
}

export default SearchResultModal;