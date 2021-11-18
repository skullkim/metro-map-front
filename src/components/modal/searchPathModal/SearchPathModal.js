import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { ImagePath } from '../../../lib/dataPath';
import { STATION_CATEGORY } from '../../../lib/subwayData';
import Portal from '../Portal';

const SearchPathBox = styled.div`
  width: 165.6px;
  height: 50px;
  background-color: white;
  border: 3px solid #2867B2;
  position: absolute;
  ${({xPosition, yPosition}) => css`
    left: ${`${xPosition}px`};
    top: ${`${yPosition}px`};
  `}
  
  &:before {
    border-bottom:0 solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #2867B2;
    content:"";
    position:absolute;
    top: 53px;
    left: 75px;
  }
`;

const ModalHeader = styled.div`
  width: 165.5px;
  height: 16px;
  background-color: #2867B2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StationName = styled.b`
  font-size: 10px;
  color: white;
  margin-left: 3px;
`;

const CloseModalButton = styled.img`
  height: 12px;
  width: 12px;
  margin-right: 3px;
  
  &:hover {
    cursor: grab;
  }
`;

const SelectStationBox = styled.div`
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StationButton = styled.button`
  width: 47px;
  height: 20px;
  border: 1px solid #2867B2;
  background-color: #2867B226;
  font-weight: 600; 
`;

const SearchPathModal = ({xPosition, yPosition, stationName, closeModal}) => {
  return (
    <Portal>
      <SearchPathBox xPosition={xPosition - 75} yPosition={yPosition - 65}>
        <ModalHeader>
          <StationName>{stationName}</StationName>
          <CloseModalButton
            src={ImagePath.closeSearchPathModal}
            alt='close search path modal'
            className='closeButton'
            onClick={closeModal}
          />
        </ModalHeader>
        <SelectStationBox>
          <StationButton name={STATION_CATEGORY.START_STATION}>출발</StationButton>
          <StationButton name={STATION_CATEGORY.STOPOVER_STATION}>경유</StationButton>
          <StationButton name={STATION_CATEGORY.ARRIVE_STATION}>도착</StationButton>
        </SelectStationBox>
      </SearchPathBox>
    </Portal>
  );
}

SearchPathModal.propTypes = {
  xPosition: PropTypes.number.isRequired,
  yPosition: PropTypes.number.isRequired,
  stationName: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default observer(SearchPathModal);