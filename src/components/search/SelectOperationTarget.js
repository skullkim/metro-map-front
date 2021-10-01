import {useObserver} from 'mobx-react';
import styled from 'styled-components';

import indexStore from "../../stores/indexStore";

const SelectBox = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TargetButton = styled.button`
  height: 45px;
  width: 79px;
  padding: 0;
  border: 1px solid #2867b226;
  border-radius: 10px;
  margin-right: 25px;
  background-color: #2867b226;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

const SelectOperationTarget = () => {
  const {SearchTargetStore} = indexStore();

  const handleClick = (event) => {
    const {target: {name}} = event;
    event.preventDefault();
    SearchTargetStore.selectTarget(name);
  }

  return useObserver(() => (
    <SelectBox>
      <TargetButton onClick={handleClick} name='distance'>최단거리</TargetButton>
      <TargetButton onClick={handleClick} name='time'>최소시간</TargetButton>
      <TargetButton onClick={handleClick} name='cost'>최소비용</TargetButton>
    </SelectBox>
  ));
};

export default SelectOperationTarget;
