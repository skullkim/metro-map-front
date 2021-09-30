import styled from "styled-components";

const SelectBox = styled.div`
  height: 45px;
  width: 350px;
`;

const TargetButton = styled.button`
  height: 45px;
  width: 79px;
  padding: 0;
  border: 1px solid #2867B226;
  border-radius: 10px;
  margin-right: 25px;
  background-color: #2867B226;
  font-size: 18px;
  font-weight: bold;
`;

const SelectOperationTarget = () => {

  return (
    <SelectBox>
      <TargetButton>최단거리</TargetButton>
      <TargetButton>최소시간</TargetButton>
      <TargetButton>최소비용</TargetButton>
    </SelectBox>
  )
}

export default SelectOperationTarget;