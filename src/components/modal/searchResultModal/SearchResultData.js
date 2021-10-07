import axios from 'axios';
import {useEffect, useState} from 'react';
import { Graph } from "react-d3-graph";
import styled, { css } from "styled-components";

import { makePathData, makeReqQuery, makeReqUrl } from "../../../lib/makeRequest";
import subwayData, { subwayResultConfig } from "../../../lib/subwayData";
import indexStore from "../../../stores/indexStore";


const ResultBox = styled.section`
  height: 256px;
  width: 463px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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

const GraphBox = styled.div``;

const makeSubwayPathGraph = (path) => {
  const result = {
    nodes: [],
    links: [],
  };

  path.forEach(({station}) => {
    const tmp = subwayData.nodes.find(({name}) => name === station)
    result.nodes = result.nodes.concat({...tmp, x: tmp.x / 5.5 + 30, y: tmp.y / 5.5 + 30});
  });

  for(let i = 1; i < path.length; i += 1) {
    result.links = result.links.concat(subwayData.links.find(({source, target}) => {
      return (path[i - 1].station === source && path[i].station === target) ||
        (path[i].station === source && path[i - 1].station === target);
    }));
  }

  return result;
}

const SearchResultData = () => {
  const {SearchTargetStore: targetStore} = indexStore();
  const [searchResult, setSearchResult] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [searchedPath, setSearchedPath] = useState({});

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
        setSearchedPath(makeSubwayPathGraph(resultData.path));
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response);
      })
  }, []);
  // eslint-disable-next-line no-console
  console.log(searchedPath);
  return (
    <ResultBox>
      <ResultDataBox>
        {searchResult.length && searchResult.map(({title, data, first}) => (
          <DataBox first={first} key={title}>
            <DataTitle>{title}</DataTitle>
            <Data>{data}</Data>
          </DataBox>
        ))}
      </ResultDataBox>
      <GraphBox>
        {searchedPath !== {} && searchedPath.nodes && searchedPath.links &&
          <Graph id='graph-id' data={searchedPath} config={subwayResultConfig} />
        }
      </GraphBox>
    </ResultBox>

  );
}

export default SearchResultData;