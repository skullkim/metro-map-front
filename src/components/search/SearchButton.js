// import axios from "axios";
import {useObserver} from 'mobx-react';

import indexStore from "../../stores/indexStore";
import {Button as SearchBtn} from "../styles/SearchPathBtn";

const SearchButton = () => {
  const {ModalOpenStore: openModal} = indexStore();

  const handleClick = (event) => {
    event.preventDefault();
    openModal.setSearchResultModal(true);

  }

  return useObserver(() => (
    <SearchBtn onClick={handleClick}>검색</SearchBtn>
  ))
}

export default SearchButton;
