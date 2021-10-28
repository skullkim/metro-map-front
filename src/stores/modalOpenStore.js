import {observable} from "mobx";

const ModalOpenStore = observable({
  searchResultModal: false,
  searchHistoryModal: false,

  setSearchResultModal(searchResultModal) {
    this.searchResultModal = searchResultModal;
  },

  setSearchHistoryModal(searchHistoryModal) {
    this.searchHistoryModal = searchHistoryModal;
  },
});

export default ModalOpenStore;