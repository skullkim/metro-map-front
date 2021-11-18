import { observer } from 'mobx-react';
import {useState} from 'react';
import { Graph } from 'react-d3-graph';
import styled from 'styled-components';

import subwayData, { subwayConfig } from '../../lib/subwayData';
import indexStore from '../../stores/indexStore';
import SearchPathModal from '../modal/searchPathModal/SearchPathModal';

const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapContainer = styled.div`
  width: 1020px;
  height: 800px;
  overflow-x: scroll;
  overflow-y: scroll;
  margin-top: ${props => props.mapMarginTop};
  margin-left: ${props => props.mapMarginLeft};
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;

const SubwayMap = () => {
  const {ModalOpenStore} = indexStore();
  const [searchPathModalPosition, setSearchPathModalPosition] = useState({
    xPosition: 0, yPosition: 0
  });

  const handleClick = (stationId) => {
    const {x: xPosition, y: yPosition} = subwayData.nodes.filter(({id}) => stationId === id)[0];

    ModalOpenStore.setSearchPathModal(true);

    setSearchPathModalPosition({xPosition, yPosition});
  }

  return (
    <Wrapper>
      <MapContainer margin-top='3%' margin-left='10.5%'>
        <Graph id='graph-id' data={subwayData} config={subwayConfig} onClickNode={handleClick}/>
        {ModalOpenStore.searchPathModal ?
          <SearchPathModal
            xPosition={searchPathModalPosition.xPosition}
            yPosition={searchPathModalPosition.yPosition}
          /> :
          null
        }
      </MapContainer>
    </Wrapper>
  );
};

export default observer(SubwayMap);

