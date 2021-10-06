import axios from 'axios';
import {useEffect} from 'react';
import styled, { css } from "styled-components";

import {PATH} from '../../../lib/dataServerPath';
import indexStore from "../../../stores/indexStore";

const ResultDataBox = styled.section`
  width: 463px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  ${({first}) => first && css`
    margin-right: 20px;
  `};
`;

const DataTitle = styled.b`
  font-size: 18px;
`;

const Data = styled(DataTitle)``;

const SearchResultData = () => {
  const {SearchTargetStore: targetStore} = indexStore();

  useEffect(() => {
    const url = targetStore.stopoverSelected ?
      `${PATH.MIN_PATH_STOPOVER}${targetStore.target}` :
      `${PATH.MIN_PATH}${targetStore.target}`;

    const data = targetStore.stopoverSelected ? {
      startStation: targetStore.startStation,
      stopoverStation: targetStore.stopoverStation,
      arriveStation: targetStore.arriveStation,
    } : {
      startStation: targetStore.startStation,
      arriveStation: targetStore.arriveStation,
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
  }, []);

  return (
    <ResultDataBox>
      <DataBox first>
        <DataTitle>출발역 / 도착역</DataTitle>
        <Data>120 -&gt; 806</Data>
      </DataBox>
      <DataBox>
        <DataTitle>요금 정보</DataTitle>
        <Data>3333원</Data>
      </DataBox>
      <DataBox>
        <DataTitle>거리 정보</DataTitle>
        <Data>3.3km</Data>
      </DataBox>
      <DataBox>
        <DataTitle>소요 시간</DataTitle>
        <Data>3시간 34분</Data>
      </DataBox>
    </ResultDataBox>
  );
}

export default SearchResultData;