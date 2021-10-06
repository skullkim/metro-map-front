// import axios from "axios";
import {useObserver} from 'mobx-react';

import indexStore from "../../stores/indexStore";
import {Button as SearchBtn} from "../styles/SearchPathBtn";

const SearchButton = () => {
  // const {SearchTargetStore: targetStore} = indexStore();
  const {ModalOpenStore: openModal} = indexStore();

  const handleClick = (event) => {
    event.preventDefault();
    openModal.setSearchResultModal(true);
    // const url = targetStore.stopoverSelected ?
    //   `${PATH.MIN_PATH_STOPOVER}${targetStore.target}` :
    //   `${PATH.MIN_PATH}${targetStore.target}`;
    //
    // const data = targetStore.stopoverSelected ? {
    //   startStation: targetStore.startStation,
    //   stopoverStation: targetStore.stopoverStation,
    //   arriveStation: targetStore.arriveStation,
    // } : {
    //   startStation: targetStore.startStation,
    //   arriveStation: targetStore.arriveStation,
    // };
    // axios({
    //   method: 'GET',
    //   url: `${process.env.REACT_APP_SERVER_ORIGIN}${url}`,
    //   params: data,
    // })
    //   .then((res) => {
    //     // eslint-disable-next-line no-console
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     // eslint-disable-next-line no-console
    //     console.log(err.response);
    //   })
  }

  return useObserver(() => (
    <SearchBtn onClick={handleClick}>검색</SearchBtn>
  ))
}

export default SearchButton;
