import { CommonModalBox, ModalTitle } from "./CommonModal";
import ModalCloseButton from "./ModalCloseButton";

const SearchResultModal = () => {
  return (
    <CommonModalBox>
      <ModalTitle>검색 결과</ModalTitle>
      <ModalCloseButton />
    </CommonModalBox>
  );
}

export default SearchResultModal;