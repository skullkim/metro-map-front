import {observable} from "mobx";

const ModalOpenStore = observable({
  searchResultModal: false,

  setSearchResultModal(searchResultModal) {
    this.searchResultModal = searchResultModal;
  }
});

export default ModalOpenStore;