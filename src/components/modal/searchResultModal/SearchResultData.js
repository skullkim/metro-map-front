import axios from 'axios';
import {useEffect, useState} from 'react';
import styled, { css } from "styled-components";

import { makePathData, makeReqQuery, makeReqUrl } from "../../../lib/makeRequest";
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
  const [searchResult, setSearchResult] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [searchedPath, setSearchedPath] = useState([]);

  useEffect(() => {
    const url = makeReqUrl(targetStore);
    const data = makeReqQuery(targetStore);

    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_SERVER_ORIGIN}${url}`,
      params: data,
    })
      .then(({data: {data: resultData}}) => {
        setSearchResult(makePathData(targetStore, resultData));
        setSearchedPath(resultData.path);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response);
      })
  }, []);

  return (
    <ResultDataBox>
      {searchResult.length && searchResult.map(({title, data, first}) => (
        <DataBox first={first} key={title}>
          <DataTitle>{title}</DataTitle>
          <Data>{data}</Data>
        </DataBox>
      ))}
    </ResultDataBox>
  );
}

export default SearchResultData;