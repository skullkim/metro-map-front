import axios from "axios";
import {useObserver} from 'mobx-react';

import {PATH} from '../../lib/dataServerPath';
import indexStore from "../../stores/indexStore";
import {Button as SearchBtn} from "../styles/SearchPathBtn";

const SearchButton = () => {
  const {SearchTargetStore: targetStore} = indexStore();

  const handleClick = (event) => {
    event.preventDefault();

    const url = targetStore.stopoverSelected ?
      `${PATH.MIN_PATH_STOPOVER}${targetStore.target}` :
      `${PATH.MIN_PATH}${targetStore.target}`;

    const data = targetStore.stopoverSelected ? {
      from: targetStore.from,
      stopover: targetStore.stopover,
      to: targetStore.to,
    } : {
      from: targetStore.from,
      to: targetStore.to,
    };
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}${url}`,
      params: data,
    })
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response);
      })
  }

  return useObserver(() => (
    <SearchBtn onClick={handleClick}>검색</SearchBtn>
  ))
}

export default SearchButton;
