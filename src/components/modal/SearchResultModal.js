import { ModalBox, ModalOverlay, ModalTitle } from "./CommonModal";
import Portal from "./Portal";

const SearchResultModal = () => {
  return (
    <Portal>
      <ModalOverlay>
        <ModalBox>
          <ModalTitle>검색 결과</ModalTitle>
        </ModalBox>
      </ModalOverlay>
    </Portal>
  );
}

export default SearchResultModal;