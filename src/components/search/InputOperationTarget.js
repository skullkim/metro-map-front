import {useObserver} from 'mobx-react';
import styled from 'styled-components';

import {STATION_CATEGORY} from "../../lib/subwayData";
import indexStore from "../../stores/indexStore";

const InputBox = styled.div`
  flex: 2;
  display: flex;
`;

const InputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  font-size: 18px;
  font-weight: bold;
`;

const InputStation = styled.input`
  height: 40px;
  width: 60px;
  margin-left: 5px;
  padding: 0;
  border: 1px solid #2867b226;
  border-radius: 10px;
  background-color: #2867b226;
`;

const InputOperationTarget = () => {
  const {SearchTargetStore: targetStore} = indexStore();

  const handleChange = ({target: {name, value}}) => {
    switch (name) {
      case STATION_CATEGORY.START_STATION:
        targetStore.setFrom(value);
        break;
      case STATION_CATEGORY.STOPOVER_STATION:
        targetStore.setStopover(value);
        break;
      case STATION_CATEGORY.ARRIVE_STATION:
        targetStore.setTo(value);
        break;
      default:
        throw new Error(`invalid target ${name}`)
    }
  }

  return useObserver(() => (
    <InputBox>
      <InputLabel>
        출발
        <InputStation
          type='text'
          name={STATION_CATEGORY.START_STATION}
          maxLength='3'
          onChange={handleChange}
        />
      </InputLabel>
      {targetStore.stopoverSelected &&
        <InputLabel>
          경유지
          <InputStation
            type='text'
            name={STATION_CATEGORY.STOPOVER_STATION}
            maxLength='3'
            onChange={handleChange}
          />
        </InputLabel>
      }
      <InputLabel>
        도착
        <InputStation
          type='text'
          name={STATION_CATEGORY.ARRIVE_STATION}
          maxLength='3'
          onChange={handleChange}
        />
      </InputLabel>
    </InputBox>
  ));
};

export default InputOperationTarget;
