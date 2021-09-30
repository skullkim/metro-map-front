import {Graph} from 'react-d3-graph';
import styled from 'styled-components';

import subwayData, {subwayConfig} from "../lib/subwayData";

const MapContainer = styled.div`
  width: 1020px;
  height: 430px;
  overflow-x: scroll;
  overflow-y: scroll;
  margin-top: ${(props) => props.mapMarginTop};
  margin-left: ${(props) => props.mapMarginLeft};
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }
`;

const SubwayMap = () => {

  return (
    <>
      <MapContainer
        margin-top="3%"
        margin-left="10.5%"
      >
        <Graph
          id="graph-id"
          data={subwayData}
          config={subwayConfig}
        />
      </MapContainer>
    </>
  );
}

export default SubwayMap;