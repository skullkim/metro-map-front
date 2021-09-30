import styled from "styled-components";

const InputBox = styled.div`
  height: 45px;
  width: 242px;
  position: relative;
  left: 108px;
`;

const InputLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const InputStation = styled.input`
  height: 48px;
  width: 60px;
  padding: 0;
  border: 1px solid #2867B226;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 15px;
  background-color: #2867B226;
`;

const InputOperationTarget = () => {
  return (
    <InputBox>
      <InputLabel>
        출발
        <InputStation type='text' maxLength='5' />
      </InputLabel>
      <InputLabel>
        도착
        <InputStation type='text' maxLength='5' />
      </InputLabel>
    </InputBox>
  );
}

export default InputOperationTarget;